<?php
require_once __DIR__ . '/db.php';

// simple endpoint to insert a new app
header('Content-Type: application/json');

$link = $_POST['link'] ?? '';
$alt  = $_POST['alt'] ?? '';

if (!$link || !$alt) {
    echo json_encode(['success' => false, 'message' => 'Missing parameters']);
    exit;
}

try {
    $pdo = getDbConnection();
    $stmt = $pdo->prepare('INSERT INTO apps (link, alt) VALUES (:link, :alt)');
    $stmt->execute([
        ':link' => $link,
        ':alt'  => $alt,
    ]);
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
