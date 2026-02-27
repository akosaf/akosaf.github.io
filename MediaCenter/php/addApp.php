<?php
require_once __DIR__ . '/appsRepository.php';

// simple endpoint to insert a new app
header('Content-Type: application/json');

$link = $_POST['link'] ?? '';
$alt  = $_POST['alt'] ?? '';

if (!$link || !$alt) {
    echo json_encode(['success' => false, 'message' => 'Missing parameters']);
    exit;
}

$success = addApp($link, $alt);
if ($success) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'failed to store data']);
}
