<?php
// Allow React app (same domain and localhost during dev)
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

require_once 'db.php';

// Read JSON body
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request data']);
    exit;
}

// Sanitize helper
$s = fn($v) => htmlspecialchars(strip_tags(trim($v ?? '')));

// Map form fields
$fullName  = $s($data['fullName']  ?? '');
$dob       = $s($data['dob']       ?? '');
$gender    = $s($data['gender']    ?? '');
$category  = $s($data['category']  ?? 'General');
$phone     = $s($data['phone']     ?? '');
$email     = $s($data['email']     ?? '');
$school10  = $s($data['school10']  ?? '');
$pct10     = $s($data['pct10']     ?? '');
$school12  = $s($data['school12']  ?? '');
$stream    = $s($data['stream']    ?? '');
$pct12     = $s($data['pct12']     ?? '');
$yearPass  = $s($data['yearPass']  ?? '');
$course    = $s($data['course']    ?? '');
$address   = $s($data['address']   ?? '');
$district  = $s($data['district']  ?? '');
$state     = $s($data['state']     ?? 'Odisha');
$pincode   = $s($data['pincode']   ?? '');
$havePC    = $s($data['havePC']    ?? '');
$reference = $s($data['reference'] ?? '');

// Validate required fields
if (!$fullName || !$dob || !$gender || !$phone || !$course) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

// Phone validation
if (!preg_match('/^\d{10}$/', $phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid phone number']);
    exit;
}

try {
    $stmt = $pdo->prepare("
        INSERT INTO applications
            (full_name, dob, gender, category, phone, email,
             school10, pct10, school12, stream, pct12, year_pass,
             course, address, district, state, pincode, have_pc, reference)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->execute([
        $fullName, $dob, $gender, $category, $phone, $email,
        $school10, $pct10, $school12, $stream, $pct12, $yearPass,
        $course, $address, $district, $state, $pincode, $havePC, $reference
    ]);

    $appId = $pdo->lastInsertId();

    echo json_encode([
        'success'        => true,
        'message'        => 'Application submitted successfully!',
        'application_id' => $appId
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save application. Please try again.']);
}
