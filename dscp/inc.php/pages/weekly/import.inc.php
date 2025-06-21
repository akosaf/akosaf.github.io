

<?php
    
        //if (isset($_POST['submit'])) {
            //$file = $_FILES['file'];
            //$content = file_get_contents($file);

            //$sfile = "uploadtest.txt";
            //$scontent = file_get_contents($sfile);
            //echo $scontent;
            //echo "<br><br>";
            $cfile = "export33.csv";
            $ccontent = file_get_contents($cfile);
            echo $ccontent;
            echo "<br><br>";
            
            //foreach($ccontent as $k)
            
            $csv = explode(';',$ccontent);
            //print_r($csv);
            print_r( array_values( $csv ));
            echo "<br><br>";
            //echo "$csv[24]";
            echo "<br><br>";

            foreach ($csv as $value) {
                echo "$value <br>";
            }

            //$file = file('export30.csv');
            
            /*
            $file = fopen($_FILES['db']['tmp_name'], "r");
            echo $file;
            $headers = fgetcsv($file, 1000, ",");
            while (($data = fgetcsv($file, 1000, ",")) !== FALSE) {
                $data[0];
                $data[1];
            }
            
            echo $data;

            fclose($file);
            foreach($file as $k)
            $csv[]=explode(',',$k);
            print_r($csv);
            */
        //}
    
    ?>
    <?php
    /*
    $uploaddir = '/var/www/uploads/';
    $uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

    echo '<pre>';
    if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
        echo "File is valid, and was successfully uploaded.\n";
    } else {
        echo "Possible file upload attack!\n";
    }

    echo 'Here is some more debugging info:';
    print_r($_FILES);

    print "</pre>";
    */
?>
