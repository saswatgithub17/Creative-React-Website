<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "u361366281_image";
$password = "CTC@c123";
$database = "u361366281_image";

try {
    mysqli_report(MYSQLI_REPORT_OFF);
    $con = @mysqli_connect($servername, $username, $password, $database);
    if (!$con) {
        $con = @mysqli_connect("localhost", "root", "", $database);
    }
    if(!$con){
        echo json_encode(["status" => "error", "message" => "Database not connected: " . mysqli_connect_error()]);
        exit();
    }
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Database connection error: " . $e->getMessage()]);
    exit();
}

// Ensure the schema is updated and it has the created_at column if you want sorting
$query = "SELECT TITTLE, UPCOMING, file_type, file_data, file_path, created_at FROM upcoming ORDER BY created_at DESC";
$result = mysqli_query($con, $query);

// Fallback in case created_at is not present
if (!$result) {
    $query = "SELECT TITTLE, UPCOMING, file_type, file_data, file_path FROM upcoming";
    $result = mysqli_query($con, $query);
}

$upcomings = array();

if($result && $result->num_rows > 0){
    while($row = mysqli_fetch_assoc($result)){
        $ftype = isset($row['file_type']) && $row['file_type'] ? $row['file_type'] : null;
        
        $fileUrl = null;
        if (!empty($row['file_path'])) {
            $fileUrl = "/DNB/" . $row['file_path'];
        } elseif ($ftype && isset($row['file_data']) && $row['file_data']) {
            $mime_type = ($ftype === 'pdf') ? 'application/pdf' : 'image/png';
            $fileUrl = "data:" . $mime_type . ";base64," . base64_encode($row['file_data']);
        }
        
        $upcomings[] = array(
            "title" => $row['TITTLE'],
            "description" => $row['UPCOMING'],
            "type" => $ftype,
            "file_data" => $fileUrl
        );
    }
}

echo json_encode(["status" => "success", "data" => $upcomings]);
?>
