<?php
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin) header("Access-Control-Allow-Origin: $origin");
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (($data['key'] ?? '') !== ADMIN_PASSWORD) {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Unauthorized']);
    exit;
}

$id     = intval($data['id'] ?? 0);
$status = $data['status'] ?? '';
$allowed = ['Pending', 'Contacted', 'Admitted', 'Rejected'];

if (!$id || !in_array($status, $allowed)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid data']);
    exit;
}

try {
    $stmt = $pdo->prepare('UPDATE applications SET status = ? WHERE id = ?');
    $stmt->execute([$status, $id]);
    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Update failed']);
}
