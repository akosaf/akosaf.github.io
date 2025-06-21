<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Szöveg konvertálása</title>
</head>
<body>
    <?php
function resizeImageToMegapixel($srcPath, $destPath) {
    list($width, $height, $type) = getimagesize($srcPath);
    $originalPixels = $width * $height;

    // Target is 1,000,000 pixels
    $scale = sqrt(1000000 / $originalPixels);
    $newWidth = intval($width * $scale);
    $newHeight = intval($height * $scale);

    switch ($type) {
        case IMAGETYPE_JPEG:
            $srcImage = imagecreatefromjpeg($srcPath);
            break;
        case IMAGETYPE_PNG:
            $srcImage = imagecreatefrompng($srcPath);
            break;
        case IMAGETYPE_GIF:
            $srcImage = imagecreatefromgif($srcPath);
            break;
        default:
            return false; // unsupported format
    }

    $resizedImage = imagecreatetruecolor($newWidth, $newHeight);
    imagecopyresampled($resizedImage, $srcImage, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

    imagejpeg($resizedImage, $destPath); // you can change to imagepng if you prefer

    imagedestroy($srcImage);
    imagedestroy($resizedImage);
    return true;
}

if (isset($_FILES['files'])) {
    $total = count($_FILES['files']['name']);
    $uploadDir = 'uploads/';
    if (!is_dir($uploadDir)) mkdir($uploadDir);

    for ($i = 0; $i < $total; $i++) {
        $tmpName = $_FILES['files']['tmp_name'][$i];
        $fileName = basename($_FILES['files']['name'][$i]);
        $targetPath = $uploadDir . $fileName;

        if ($_FILES['files']['error'][$i] === UPLOAD_ERR_OK) {
            if (resizeImageToMegapixel($tmpName, $targetPath)) {
                echo "Resized and saved: $fileName<br>";
            } else {
                echo "Unsupported image format: $fileName<br>";
            }
        } else {
            echo "Error uploading: $fileName<br>";
        }
    }
} else {
    echo "No files uploaded.";
}
?>

</body>
</html>