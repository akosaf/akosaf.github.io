<?php
// Returns the largest resolution favicon URL from the head element of the provided link.
function get_favicon(string $link): string {
    $parsed = parse_url($link);
    if (!$parsed || !isset($parsed['host'])) {
        return '';
    }

    try {
        // Fetch the HTML content
        $html = @file_get_contents($link, false, stream_context_create([
            'http' => ['timeout' => 5]
        ]));
        if (!$html) {
            return '';
        }

        // Extract head element
        preg_match('/<head[^>]*>(.*?)<\/head>/is', $html, $headMatch);
        if (!isset($headMatch[1])) {
            return '';
        }
        $head = $headMatch[1];

        // Find all favicon-related links
        preg_match_all('/<link[^>]*rel=["\']([^"\']*icon[^"\']*)["\'][^>]*href=["\']([^"\']+)["\'][^>]*sizes=["\']([^"\']+)["\'][^>]*>/i', $head, $matches, PREG_SET_ORDER);

        if (empty($matches)) {
            // Try without sizes attribute
            preg_match_all('/<link[^>]*rel=["\']([^"\']*icon[^"\']*)["\'][^>]*href=["\']([^"\']+)["\'][^>]*>/i', $head, $matches, PREG_SET_ORDER);
        }

        $icons = [];
        foreach ($matches as $match) {
            $href = $match[2];
            $sizes = isset($match[3]) ? $match[3] : '';

            // Convert relative URLs to absolute
            $faviconUrl = resolveUrl($href, $link);

            // Extract resolution from sizes attribute
            $resolution = 0;
            if (preg_match('/(\d+)x(\d+)/', $sizes, $sizeMatch)) {
                $resolution = max((int)$sizeMatch[1], (int)$sizeMatch[2]);
            }

            $icons[] = [
                'url' => $faviconUrl,
                'resolution' => $resolution,
            ];
        }

        // Sort by resolution (descending) and return the largest
        if (!empty($icons)) {
            usort($icons, fn($a, $b) => $b['resolution'] <=> $a['resolution']);
            return $icons[0]['url'];
        }

        return '';
    } catch (Exception $e) {
        return '';
    }
}

// Helper function to resolve relative URLs to absolute URLs
function resolveUrl(string $relative, string $base): string {
    $base_parsed = parse_url($base);
    
    // Already absolute
    if (preg_match('|^https?://|', $relative)) {
        return $relative;
    }

    $base_url = $base_parsed['scheme'] . '://' . $base_parsed['host'];
    if (isset($base_parsed['port'])) {
        $base_url .= ':' . $base_parsed['port'];
    }

    // Protocol-relative URL
    if (strpos($relative, '//') === 0) {
        return $base_parsed['scheme'] . ':' . $relative;
    }

    // Absolute path
    if (strpos($relative, '/') === 0) {
        return $base_url . $relative;
    }

    // Relative path
    $basePath = dirname($base_parsed['path'] ?? '/');
    if ($basePath !== '/') {
        $basePath .= '/';
    }
    return $base_url . $basePath . $relative;
}
