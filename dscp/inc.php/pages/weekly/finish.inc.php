<?php

$root = $_SERVER['DOCUMENT_ROOT'];
$file = fopen($root."/JS/init.js", "w") or die("Unable to open file!");

if (isset($_POST['targetDate'])) {
    fprintf($file, "let updateAt = new Date('{$_POST['targetDate']}:00');");
    $message = "Időzítés aktív!";
} else {
    $date = str_split(date("c"),19)[0];
    fprintf($file, "let updateAt = new Date('$date');");
    $message = "Heti menü élesítve!";
}

fclose($file);

include("inc.php/ds_main.inc.php");
include("inc.php/elements/ds_message.inc.php");

?>