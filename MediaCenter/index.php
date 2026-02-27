<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AkOS</title>
    <link href="style.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
</head>
<body>
    <?php
    include 'php/navbar.php';
    include 'php/favico.php';
    include 'php/appsRepository.php';
    ?>

    <main id="mainContent" class="container mt-3">
        <div class="tiles-container">
            <?php
            // fetch applications from the database and render tiles
            $apps = fetchAllApps();
            foreach ($apps as $app) {
                $link = htmlspecialchars($app['link'], ENT_QUOTES);
                $alt  = htmlspecialchars($app['alt'], ENT_QUOTES);
                $favicon = get_favicon($link);
                echo "<a href=\"$link\" target=\"_blank\" class=\"app-tile\">";
                echo "<img src=\"$favicon\" alt=\"$alt\">";
                echo "<span>$alt</span>";
                echo "</a>\n";
            }
            ?>
        </div>
        <div class="iframe-container">
            <iframe frameborder="0" allowfullscreen></iframe>
        </div>
    </main>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="script.js"></script>

    <script>
        function updateClockAndDate() {
            const now = new Date();
            document.getElementById('currentTime').textContent = now.toLocaleTimeString();
            document.getElementById('currentDate').textContent = now.toLocaleDateString();
        }
        updateClockAndDate();
        setInterval(updateClockAndDate, 1000);

        document.getElementById('homeBtn').addEventListener('click', () => {
            window.location.href = 'https://akosaf.github.io/MediaCenter/index.php';
        });
    </script>
</body>
</html>