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

    <!-- floating add button -->
    <button id="addAppBtn" class="btn btn-primary rounded-circle position-fixed" style="bottom:20px; right:20px; width:56px; height:56px;">
        <i class="bi bi-plus-lg"></i>
    </button>

    <!-- add application modal -->
    <div class="modal fade" id="addAppModal" tabindex="-1" aria-labelledby="addAppModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form id="addAppForm" class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addAppModalLabel">Add Application</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="appAlt" class="form-label">Name</label>
              <input type="text" class="form-control" id="appAlt" name="alt" required>
            </div>
            <div class="mb-3">
              <label for="appLink" class="form-label">Link</label>
              <input type="url" class="form-control" id="appLink" name="link" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary"><i class="bi bi-plus-lg"></i></button>
          </div>
        </form>
      </div>
    </div>

    <script>
        // bootstrap modal control
        const addAppBtn = document.getElementById('addAppBtn');
        addAppBtn.addEventListener('click', () => {
            const modalEl = document.getElementById('addAppModal');
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        });

        // handle form submit via AJAX
        document.getElementById('addAppForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const form = e.target;
            const data = new FormData(form);
            const resp = await fetch('php/addApp.php', {
                method: 'POST',
                body: data
            });
            const result = await resp.json();
            if (result.success) {
                location.reload();
            } else {
                alert('Error: ' + (result.message || 'unable to add')); 
            }
        });
    </script>
</body>
</html>