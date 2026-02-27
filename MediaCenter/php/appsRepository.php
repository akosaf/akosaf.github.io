<?php
require_once __DIR__ . '/db.php';

/**
 * Returns all rows from the apps table.
 * Each entry is an associative array with keys 'link' and 'alt'.
 *
 * @return array<int,array{link:string,alt:string}>
 */
function fetchAllApps(): array {
    $pdo = getDbConnection();
    $stmt = $pdo->query('SELECT link, alt FROM apps');
    return $stmt->fetchAll();
}
