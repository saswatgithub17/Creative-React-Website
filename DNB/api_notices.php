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

// Order by image_id descending so newest is first
$query = "SELECT image_id, name, description, file_type, image, file_path, created_at FROM image ORDER BY image_id DESC";
$result = mysqli_query($con, $query);

$notices = array();

if($result && $result->num_rows > 0){
    while($row = mysqli_fetch_assoc($result)){
        $ftype = isset($row['file_type']) ? $row['file_type'] : 'image';
        
        // Check if created_at is within the last 72 hours
        $is_new = false;
        if (isset($row['created_at'])) {
            $created_time = strtotime($row['created_at']);
            $current_time = time();
            if (($current_time - $created_time) <= (72 * 3600)) {
                $is_new = true;
            }
        }
        
        $mime_type = ($ftype === 'pdf') ? 'application/pdf' : 'image/png';
        
        // Use new file_path system if available, else fallback to legacy base64
        $fileUrl = null;
        if (!empty($row['file_path'])) {
            // Provide the relative URL path to the file
            $fileUrl = "/DNB/" . $row['file_path'];
        } elseif (!empty($row['image'])) {
            $fileUrl = "data:" . $mime_type . ";base64," . base64_encode($row['image']);
        }
        
        $notices[] = array(
            "id" => $row['image_id'],
            "title" => $row['name'],
            "description" => $row['description'],
            "type" => $ftype,
            "is_new" => $is_new,
            "file_data" => $fileUrl
        );
    }
}

echo json_encode(["status" => "success", "data" => $notices]);
?>
