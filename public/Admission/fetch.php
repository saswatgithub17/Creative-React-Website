<?php
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin) header("Access-Control-Allow-Origin: $origin");
header('Content-Type: application/json');

require_once 'db.php';

// Validate admin password
$key = $_GET['key'] ?? '';
if ($key !== ADMIN_PASSWORD) {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Unauthorized']);
    exit;
}

// Optional filters
$course = $_GET['course'] ?? '';
$status = $_GET['status'] ?? '';

try {
    $where  = [];
    $params = [];

    if ($course) { $where[] = 'course = ?';  $params[] = $course; }
    if ($status) { $where[] = 'status = ?';  $params[] = $status; }

    $sql  = 'SELECT * FROM applications';
    if ($where) $sql .= ' WHERE ' . implode(' AND ', $where);
    $sql .= ' ORDER BY submitted_at DESC';

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $rows = $stmt->fetchAll();

    // Stats
    $statsStmt = $pdo->query("
        SELECT
            COUNT(*) AS total,
            SUM(course = 'BBA')   AS bba,
            SUM(course = 'BCA')   AS bca,
            SUM(course = 'B.Sc CS(H)') AS bsc_cs,
            SUM(course = 'B.Sc DS')    AS bsc_ds,
            SUM(status = 'Pending')    AS pending,
            SUM(status = 'Contacted')  AS contacted,
            SUM(status = 'Admitted')   AS admitted,
            SUM(status = 'Rejected')   AS rejected
        FROM applications
    ");
    $stats = $statsStmt->fetch();

    echo json_encode(['success' => true, 'data' => $rows, 'stats' => $stats]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to fetch data']);
}
