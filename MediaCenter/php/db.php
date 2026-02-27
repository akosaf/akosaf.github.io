<?php
// Database connection settings - adjust credentials as needed
function getDbConnection(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        $host = 'localhost';
        $dbname = 'mediacenter';
        $user = 'root';
        $pass = '';
        $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ];
        $pdo = new PDO($dsn, $user, $pass, $options);
    }
    return $pdo;
}
