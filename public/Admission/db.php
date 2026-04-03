<?php
// ============================================================
//  DATABASE CONFIGURATION — Fill in your Hostinger credentials
//  hPanel → Databases → MySQL Databases → your database details
// ============================================================

define('DB_HOST', 'localhost');
define('DB_NAME', 'u361366281_admission');     // e.g. u123456_ctcadmission
define('DB_USER', 'u361366281_admission');     // e.g. u123456_ctcadmin
define('DB_PASS', 'CTC@c123'); // Your DB password

// Admin password for the admin dashboard
define('ADMIN_PASSWORD', 'ctc@Admin2026');   // Change this!

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'success' => false,
        'error'   => 'Database connection failed. Please check db.php credentials.'
    ]);
    exit;
}
