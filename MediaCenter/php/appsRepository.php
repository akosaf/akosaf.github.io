<?php
require_once __DIR__ . '/db.php';

// CSV storage path (optional)
define('APPS_CSV', __DIR__ . '/../apps.csv');

/**
 * Returns all rows from the apps table or CSV file.
 * Each entry is an associative array with keys 'link' and 'alt'.
 *
 * @return array<int,array{link:string,alt:string}>
 */
function fetchAllApps(): array {
    if (file_exists(APPS_CSV)) {
        $rows = [];
        if (($fh = fopen(APPS_CSV, 'r')) !== false) {
            while (($data = fgetcsv($fh)) !== false) {
                // expect two columns: link,alt
                if (count($data) >= 2) {
                    $rows[] = ['link' => $data[0], 'alt' => $data[1]];
                }
            }
            fclose($fh);
        }
        return $rows;
    }

    $pdo = getDbConnection();
    $stmt = $pdo->query('SELECT link, alt FROM apps');
    return $stmt->fetchAll();
}

/**
 * Add an application to storage (DB or CSV).
 */
function addApp(string $link, string $alt): bool {
    if (file_exists(APPS_CSV)) {
        $fh = fopen(APPS_CSV, 'a');
        if ($fh === false) {
            return false;
        }
        fputcsv($fh, [$link, $alt]);
        fclose($fh);
        return true;
    }
    try {
        $pdo = getDbConnection();
        $stmt = $pdo->prepare('INSERT INTO apps (link, alt) VALUES (:link, :alt)');
        $stmt->execute([
            ':link' => $link,
            ':alt'  => $alt,
        ]);
        return true;
    } catch (Exception $e) {
        return false;
    }
}
