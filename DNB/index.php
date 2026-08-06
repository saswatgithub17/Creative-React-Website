<?php
session_start();

$servername = "localhost";
$username = "u361366281_image";
$password = "CTC@c123";
$database = "u361366281_image";

try {
    // Disable strict error reporting for mysqli to avoid 500 errors if connection fails
    mysqli_report(MYSQLI_REPORT_OFF);
    $con = @mysqli_connect($servername, $username, $password, $database);
    if (!$con) {
        $con = @mysqli_connect("localhost", "root", "", $database);
    }
    if(!$con){
        die("Database not connected: " . mysqli_connect_error());
    }
} catch (Exception $e) {
    die("Database connection error: " . $e->getMessage());
}

$msg = "";
if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}

$uploadDir = __DIR__ . '/uploads/';

// Helper to handle file upload
function handleFileUpload($fileInputName, $uploadDir) {
    if (!isset($_FILES[$fileInputName]) || $_FILES[$fileInputName]['error'] != 0) {
        return null;
    }
    
    $fileInfo = pathinfo($_FILES[$fileInputName]['name']);
    $extension = strtolower($fileInfo['extension']);
    $allowed_extensions = ["jpg", "jpeg", "png", "pdf"];
    
    if (!in_array($extension, $allowed_extensions)) {
        return false;
    }

    $uniqueName = uniqid() . '_' . preg_replace("/[^a-zA-Z0-9.-]/", "_", $fileInfo['basename']);
    $destination = $uploadDir . $uniqueName;

    if (move_uploaded_file($_FILES[$fileInputName]['tmp_name'], $destination)) {
        return [
            'type' => ($extension == 'pdf') ? 'pdf' : 'image',
            'path' => 'uploads/' . $uniqueName, // relative path to store in DB
            'full_path' => $destination
        ];
    }
    return false;
}

// ---------------------------
// HANDLE DELETIONS
// ---------------------------
if (isset($_GET['delete_notice'])) {
    $id = intval($_GET['delete_notice']);
    $query = "SELECT file_path FROM IMAGE WHERE image_id=$id";
    $result = mysqli_query($con, $query);
    if ($row = mysqli_fetch_assoc($result)) {
        if (!empty($row['file_path'])) {
            $filePath = __DIR__ . '/' . $row['file_path'];
            if (file_exists($filePath)) { unlink($filePath); }
        }
        mysqli_query($con, "DELETE FROM image WHERE image_id=$id");
        $_SESSION['msg'] = "<div class='suc'><i class='fa-solid fa-check-circle'></i> Notice Deleted Successfully!</div>";
        header("Location: index.php");
        exit();
    }
}

if (isset($_GET['delete_upcoming'])) {
    $title = mysqli_real_escape_string($con, $_GET['delete_upcoming']);
    $query = "SELECT file_path FROM upcoming WHERE TITTLE='$title' LIMIT 1";
    $result = mysqli_query($con, $query);
    if ($row = mysqli_fetch_assoc($result)) {
        if (!empty($row['file_path'])) {
            $filePath = __DIR__ . '/' . $row['file_path'];
            if (file_exists($filePath)) { unlink($filePath); }
        }
        mysqli_query($con, "DELETE FROM upcoming WHERE TITTLE='$title' LIMIT 1");
        $_SESSION['msg'] = "<div class='suc'><i class='fa-solid fa-check-circle'></i> Upcoming Deleted Successfully!</div>";
        header("Location: index.php");
        exit();
    }
}

// ---------------------------
// HANDLE UPLOADS & UPDATES
// ---------------------------
if (isset($_POST['upload_notice'])) {
    $filename = mysqli_real_escape_string($con, $_FILES['notice_file']['name']);
    $description = mysqli_real_escape_string($con, $_POST['description_data']);
    
    $fileData = handleFileUpload('notice_file', $uploadDir);
    
    if ($fileData) {
        $ftype = $fileData['type'];
        $fpath = $fileData['path'];
        $query = "INSERT INTO image (name, description, file_type, file_path) VALUES ('$filename', '$description', '$ftype', '$fpath')";
        if (mysqli_query($con, $query)) {
            $_SESSION['msg'] = "<div class='suc'><i class='fa-solid fa-check-circle'></i> Notice Uploaded Successfully!</div>";
            if (file_exists(__DIR__ . "/send-notification.php")) { include __DIR__ . "/send-notification.php"; }
        } else {
            $_SESSION['msg'] = "<div class='unsuc'><i class='fa-solid fa-circle-exclamation'></i> Database Error.</div>";
        }
    } else {
        $_SESSION['msg'] = "<div class='unsuc'><i class='fa-solid fa-circle-exclamation'></i> Invalid file or upload failed.</div>";
    }
    header("Location: index.php");
    exit();
}

if (isset($_POST['update_notice'])) {
    $id = intval($_POST['image_id']);
    $description = mysqli_real_escape_string($con, $_POST['description_data']);
    $fileData = handleFileUpload('notice_file', $uploadDir);
    
    if ($fileData) {
        // Delete old file
        $oldRes = mysqli_query($con, "SELECT file_path FROM image WHERE image_id=$id");
        if ($oldRow = mysqli_fetch_assoc($oldRes)) {
            if (!empty($oldRow['file_path']) && file_exists(__DIR__ . '/' . $oldRow['file_path'])) {
                unlink(__DIR__ . '/' . $oldRow['file_path']);
            }
        }
        
        $ftype = $fileData['type'];
        $fpath = $fileData['path'];
        $filename = mysqli_real_escape_string($con, $_FILES['notice_file']['name']);
        
        $query = "UPDATE image SET name='$filename', description='$description', file_type='$ftype', file_path='$fpath' WHERE image_id=$id";
    } else {
        $query = "UPDATE image SET description='$description' WHERE image_id=$id";
    }
    
    if (mysqli_query($con, $query)) {
        $_SESSION['msg'] = "<div class='suc'><i class='fa-solid fa-check-circle'></i> Notice Updated Successfully!</div>";
    } else {
        $_SESSION['msg'] = "<div class='unsuc'><i class='fa-solid fa-circle-exclamation'></i> Database Error.</div>";
    }
    header("Location: index.php");
    exit();
}

if (isset($_POST['upload_upcoming'])) {
    $title = mysqli_real_escape_string($con, $_POST['title']);
    $description = mysqli_real_escape_string($con, $_POST['description']);
    $fileData = handleFileUpload('upcoming_file', $uploadDir);
    
    if ($fileData) {
        $ftype = $fileData['type'];
        $fpath = $fileData['path'];
        $query = "INSERT INTO upcoming (TITTLE, UPCOMING, file_type, file_path) VALUES ('$title', '$description', '$ftype', '$fpath')";
    } else {
        $query = "INSERT INTO upcoming (TITTLE, UPCOMING) VALUES ('$title', '$description')";
    }
    
    if (mysqli_query($con, $query)) {
        $_SESSION['msg'] = "<div class='suc'><i class='fa-solid fa-check-circle'></i> Upcoming Event Added!</div>";
    } else {
        $_SESSION['msg'] = "<div class='unsuc'><i class='fa-solid fa-circle-exclamation'></i> Database Error.</div>";
    }
    header("Location: index.php");
    exit();
}

if (isset($_POST['update_upcoming'])) {
    $old_title = mysqli_real_escape_string($con, $_POST['old_title']);
    $title = mysqli_real_escape_string($con, $_POST['title']);
    $description = mysqli_real_escape_string($con, $_POST['description']);
    $fileData = handleFileUpload('upcoming_file', $uploadDir);
    
    if ($fileData) {
        // Delete old file
        $oldRes = mysqli_query($con, "SELECT file_path FROM upcoming WHERE TITTLE='$old_title' LIMIT 1");
        if ($oldRow = mysqli_fetch_assoc($oldRes)) {
            if (!empty($oldRow['file_path']) && file_exists(__DIR__ . '/' . $oldRow['file_path'])) {
                unlink(__DIR__ . '/' . $oldRow['file_path']);
            }
        }
        
        $ftype = $fileData['type'];
        $fpath = $fileData['path'];
        $query = "UPDATE upcoming SET TITTLE='$title', UPCOMING='$description', file_type='$ftype', file_path='$fpath' WHERE TITTLE='$old_title'";
    } else {
        $query = "UPDATE upcoming SET TITTLE='$title', UPCOMING='$description' WHERE TITTLE='$old_title'";
    }
    
    if (mysqli_query($con, $query)) {
        $_SESSION['msg'] = "<div class='suc'><i class='fa-solid fa-check-circle'></i> Upcoming Event Updated!</div>";
    } else {
        $_SESSION['msg'] = "<div class='unsuc'><i class='fa-solid fa-circle-exclamation'></i> Database Error.</div>";
    }
    header("Location: index.php");
    exit();
}

// ---------------------------
// FETCH DATA FOR DISPLAY
// ---------------------------
$noticesResult = mysqli_query($con, "SELECT * FROM image ORDER BY created_at DESC, image_id DESC");
$upcomingsResult = mysqli_query($con, "SELECT * FROM upcoming ORDER BY created_at DESC");

// ---------------------------
// PRE-FILL EDIT FORMS
// ---------------------------
$editNotice = null;
if (isset($_GET['edit_notice'])) {
    $id = intval($_GET['edit_notice']);
    $res = mysqli_query($con, "SELECT * FROM image WHERE image_id=$id");
    if ($row = mysqli_fetch_assoc($res)) {
        $editNotice = $row;
    }
}

$editUpcoming = null;
if (isset($_GET['edit_upcoming'])) {
    $t = mysqli_real_escape_string($con, $_GET['edit_upcoming']);
    $res = mysqli_query($con, "SELECT * FROM upcoming WHERE TITTLE='$t' LIMIT 1");
    if ($row = mysqli_fetch_assoc($res)) {
        $editUpcoming = $row;
    }
}

// Helper for generating View URLs
function getFileUrl($row, $isUpcoming = false) {
    if (!empty($row['file_path'])) {
        return $row['file_path'];
    }
    // Legacy Blob support
    $mime = (isset($row['file_type']) && $row['file_type'] === 'pdf') ? 'application/pdf' : 'image/png';
    $blobField = $isUpcoming ? (isset($row['file_data']) ? $row['file_data'] : null) : (isset($row['image']) ? $row['image'] : null);
    
    if ($blobField) {
        return "data:" . $mime . ";base64," . base64_encode($blobField);
    }
    return null;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CTC DNB Admin Dashboard</title>
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * { box-sizing: border-box; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; }
        body { background-color: #f1f5f9; margin: 0; padding: 40px 20px; color: #334155; }
        
        .header { text-align: center; margin-bottom: 40px; }
        .header h1 { color: #0f172a; margin-bottom: 10px; font-weight: 700; font-size: 2.2rem; display: flex; align-items: center; justify-content: center; gap: 15px; }
        .header h1 i { color: #3b82f6; }
        .header p.subtitle { color: #64748b; font-size: 1.1rem; }
        
        .dashboard-container { display: flex; gap: 30px; flex-wrap: wrap; align-items: flex-start; max-width: 1400px; margin: 0 auto; }
        
        .panel { flex: 1; min-width: 380px; background: #ffffff; padding: 35px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03); margin-bottom: 30px; }
        .panel h2 { margin-top: 0; color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 25px; font-size: 1.5rem; display: flex; align-items: center; gap: 10px; }
        .panel h2 i { color: #3b82f6; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; font-weight: 600; margin-bottom: 8px; color: #475569; font-size: 0.95rem; }
        .form-control { width: 100%; padding: 12px 15px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; transition: border-color 0.2s, box-shadow 0.2s; background: #f8fafc; }
        .form-control:focus { outline: none; border-color: #3b82f6; background: #fff; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
        
        .btn { padding: 12px 20px; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1rem; width: 100%; transition: all 0.2s; display: flex; justify-content: center; align-items: center; gap: 8px; text-decoration: none; }
        .btn-primary { background: #3b82f6; color: #fff; }
        .btn-primary:hover { background: #2563eb; }
        .btn-warning { background: #f59e0b; color: #fff; }
        .btn-warning:hover { background: #d97706; }
        
        .action-btns { display: flex; gap: 8px; margin-top: 15px; }
        .action-btns .btn { width: auto; padding: 8px 12px; font-size: 0.85rem; flex: 1; }
        .btn-view { background: #10b981; color: white; }
        .btn-view:hover { background: #059669; }
        .btn-edit { background: #f59e0b; color: white; }
        .btn-edit:hover { background: #d97706; }
        .btn-danger { background: #ef4444; color: white; }
        .btn-danger:hover { background: #dc2626; }
        
        .suc, .unsuc { padding: 15px 20px; border-radius: 8px; margin-bottom: 30px; font-weight: 600; text-align: center; max-width: 600px; margin-left: auto; margin-right: auto; display: flex; align-items: center; justify-content: center; gap: 10px; }
        .suc { color: #065f46; background: #d1fae5; border: 1px solid #a7f3d0; }
        .unsuc { color: #991b1b; background: #fee2e2; border: 1px solid #fecaca; }
        
        .list-container { margin-top: 40px; }
        .list-container h3 { margin-bottom: 20px; color: #334155; font-size: 1.2rem; }
        
        .item-card { border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; margin-bottom: 20px; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: box-shadow 0.2s, border-color 0.2s; }
        .item-card:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border-color: #cbd5e1; }
        .item-card h4 { margin: 0 0 8px 0; color: #0f172a; font-size: 1.1rem; line-height: 1.4; }
        .item-card p.desc { margin: 0 0 15px 0; font-size: 0.95rem; color: #64748b; line-height: 1.5; }
        
        .preview-badge { display: inline-flex; align-items: center; gap: 6px; background: #f1f5f9; padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; color: #475569; font-weight: 600; margin-bottom: 10px; }
        .preview-badge i { color: #3b82f6; }
        
        .cancel-edit { display: inline-block; margin-top: 15px; color: #64748b; text-decoration: none; font-size: 0.95rem; font-weight: 600; text-align: center; width: 100%; transition: color 0.2s; }
        .cancel-edit:hover { color: #0f172a; }
    </style>
</head>
<body>

    <div class="header">
        <h1><i class="fa-solid fa-desktop"></i> Digital Notice Board</h1>
        <p class="subtitle">Unified Admin Dashboard</p>
        <?php if($msg) echo $msg; ?>
    </div>

    <div class="dashboard-container">
        
        <!-- ==================== NOTICES PANEL ==================== -->
        <div class="panel">
            <h2><i class="fa-solid fa-bullhorn"></i> <?php echo $editNotice ? "Update Notice" : "Upload Notice"; ?></h2>
            
            <form method="post" enctype="multipart/form-data">
                <?php if($editNotice): ?>
                    <input type="hidden" name="image_id" value="<?php echo $editNotice['image_id']; ?>">
                <?php endif; ?>
                
                <div class="form-group">
                    <label>Description:</label>
                    <input type="text" name="description_data" class="form-control" placeholder="Short description..." required value="<?php echo $editNotice ? htmlspecialchars($editNotice['description']) : ''; ?>" />
                </div>

                <div class="form-group">
                    <label><?php echo $editNotice ? "Upload New File (Optional):" : "Select File (PDF/Image):"; ?></label>
                    <input type="file" name="notice_file" class="form-control" accept=".jpg,.jpeg,.png,.pdf" <?php echo $editNotice ? "" : "required"; ?> />
                </div>
                
                <?php if($editNotice): ?>
                    <button type="submit" name="update_notice" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i> Update Notice</button>
                    <a href="index.php" class="cancel-edit">Cancel Edit</a>
                <?php else: ?>
                    <button type="submit" name="upload_notice" class="btn btn-primary"><i class="fa-solid fa-upload"></i> Upload Notice</button>
                <?php endif; ?>
            </form>

            <div class="list-container">
                <h3>Current Notices</h3>
                <?php
                if ($noticesResult && $noticesResult->num_rows > 0) {
                    while ($row = mysqli_fetch_assoc($noticesResult)) {
                        echo "<div class='item-card'>";
                        echo "<h4>" . htmlspecialchars($row['name']) . "</h4>";
                        if ($row['description']) echo "<p class='desc'>" . htmlspecialchars($row['description']) . "</p>";
                        
                        $fileUrl = getFileUrl($row, false);
                        if ($fileUrl) {
                            $icon = (isset($row['file_type']) && $row['file_type'] === 'pdf') ? 'fa-file-pdf' : 'fa-image';
                            $badgeText = !empty($row['file_path']) ? "File Storage" : "DB Storage";
                            echo "<div class='preview-badge'><i class='fa-solid $icon'></i> $badgeText</div>";
                        }
                        
                        echo "<div class='action-btns'>";
                        if ($fileUrl) {
                            echo "<a href='$fileUrl' target='_blank' class='btn btn-view'><i class='fa-solid fa-eye'></i> View</a>";
                        }
                        echo "<a href='?edit_notice=" . $row['image_id'] . "' class='btn btn-edit'><i class='fa-solid fa-pen'></i> Edit</a>";
                        echo "<a href='?delete_notice=" . $row['image_id'] . "' class='btn btn-danger' onclick=\"return confirm('Delete this notice permanently?');\"><i class='fa-solid fa-trash'></i> Delete</a>";
                        echo "</div>";
                        
                        echo "</div>";
                    }
                } else {
                    echo "<p>No notices found.</p>";
                }
                ?>
            </div>
        </div>

        <!-- ==================== UPCOMINGS PANEL ==================== -->
        <div class="panel">
            <h2><i class="fa-solid fa-calendar-alt"></i> <?php echo $editUpcoming ? "Update Event" : "Add Upcoming Event"; ?></h2>
            
            <form method="post" enctype="multipart/form-data">
                <?php if($editUpcoming): ?>
                    <input type="hidden" name="old_title" value="<?php echo htmlspecialchars($editUpcoming['TITTLE']); ?>">
                <?php endif; ?>

                <div class="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" class="form-control" placeholder="Event Title" required value="<?php echo $editUpcoming ? htmlspecialchars($editUpcoming['TITTLE']) : ''; ?>" />
                </div>
                <div class="form-group">
                    <label>Description:</label>
                    <input type="text" name="description" class="form-control" placeholder="Event Details" required value="<?php echo $editUpcoming ? htmlspecialchars($editUpcoming['UPCOMING']) : ''; ?>" />
                </div>
                <div class="form-group">
                    <label><?php echo $editUpcoming ? "Replace File (Optional):" : "Optional File (PDF/Image):"; ?></label>
                    <input type="file" name="upcoming_file" class="form-control" accept=".jpg,.jpeg,.png,.pdf" />
                </div>
                
                <?php if($editUpcoming): ?>
                    <button type="submit" name="update_upcoming" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i> Update Event</button>
                    <a href="index.php" class="cancel-edit">Cancel Edit</a>
                <?php else: ?>
                    <button type="submit" name="upload_upcoming" class="btn btn-primary"><i class="fa-solid fa-upload"></i> Add Event</button>
                <?php endif; ?>
            </form>

            <div class="list-container">
                <h3>Current Upcoming Events</h3>
                <?php
                if ($upcomingsResult && $upcomingsResult->num_rows > 0) {
                    while ($row = mysqli_fetch_assoc($upcomingsResult)) {
                        echo "<div class='item-card'>";
                        echo "<h4>" . htmlspecialchars($row['TITTLE']) . "</h4>";
                        echo "<p class='desc'>" . htmlspecialchars($row['UPCOMING']) . "</p>";
                        
                        $fileUrl = getFileUrl($row, true);
                        if ($fileUrl) {
                            $icon = (isset($row['file_type']) && $row['file_type'] === 'pdf') ? 'fa-file-pdf' : 'fa-image';
                            $badgeText = !empty($row['file_path']) ? "File Storage" : "DB Storage";
                            echo "<div class='preview-badge'><i class='fa-solid $icon'></i> $badgeText</div>";
                        }
                        
                        echo "<div class='action-btns'>";
                        if ($fileUrl) {
                            echo "<a href='$fileUrl' target='_blank' class='btn btn-view'><i class='fa-solid fa-eye'></i> View</a>";
                        }
                        echo "<a href='?edit_upcoming=" . urlencode($row['TITTLE']) . "' class='btn btn-edit'><i class='fa-solid fa-pen'></i> Edit</a>";
                        echo "<a href='?delete_upcoming=" . urlencode($row['TITTLE']) . "' class='btn btn-danger' onclick=\"return confirm('Delete this event permanently?');\"><i class='fa-solid fa-trash'></i> Delete</a>";
                        echo "</div>";
                        
                        echo "</div>";
                    }
                } else {
                    echo "<p>No upcoming events found.</p>";
                }
                ?>
            </div>
        </div>

    </div>

</body>
</html>
