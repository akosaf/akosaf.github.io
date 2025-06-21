<?php

$root = $_SERVER['DOCUMENT_ROOT'];
$file = fopen($root."/dscp/classes/users.inc.php", "w") or die("Unable to open file!");
fprintf($file, "<?php\n\n");
for ($i = 0; $i < count($users); $i++) {
    fprintf($file, "\$users[$i] = new User(\"{$users[$i]->username}\", \"{$users[$i]->role}\", \"{$users[$i]->pass}\");\n");
}
fprintf($file, "\n?>");
fclose($file);

?>