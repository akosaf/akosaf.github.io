<?php
// Returns a favicon URL based on the domain of the provided link.
function get_favicon(string $link): string {
    $parsed = parse_url($link);
    if (!$parsed || !isset($parsed['host'])) {
        return '';
    }
    $host = $parsed['host'];
    // simple approach: assume /favicon.ico
    return "https://$host/favicon.ico";
}
