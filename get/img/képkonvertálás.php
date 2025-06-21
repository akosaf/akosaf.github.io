<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Galéria feltöltése</title>
</head>
<body>
    
    <h1>Szöveg txt-be írása</h1>
    <?php
        $input = $_POST['szoveg'];

        $myfile = fopen("testfile.txt", "w") or die("Unable to open file!");
        fwrite($myfile, "<h1>$input</h1>");

        echo "Az általad megadott string: ";
        echo fgets($myfile);
        fclose($myfile);
    ?>
    
    <h1>A feltöltött kép:</h1>
    <?php
    
        $length = count($_FILES['images']); 

        for ($i = 0; $i < $length; $i++) { 
            echo $i; 
        }
    
        $fájl = $_FILES['kép']['tmp_name'];
        $kép = file_get_contents($fájl);
        $forrásKép = imagecreatefromstring($kép);

        $szélesség = imageSX($forrásKép);
        $magasság = imageSY($forrásKép);

        $újmagasság = 1000;
        $újszélesség = $újmagasság * ($szélesség / $magasság);

        $újKép = imagecreatetruecolor($újszélesség, $újmagasság);
        $eredmény = imagecopyresampled($újKép, $forrásKép,
                0, 0, 0, 0,
                $újszélesség, $újmagasság, $szélesség, $magasság);
        imagejpeg($újKép, "újkép.jpg");
    ?>
    <img src="újkép.jpg">
</body>
</html>