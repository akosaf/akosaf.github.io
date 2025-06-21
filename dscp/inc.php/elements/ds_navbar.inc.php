<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <div class="container-fluid">

<?php

if (isset($nav)) {
    if ($nav == "login") {
        echo "<a class=\"navbar-brand ms-1\" href=\"./\">DS Control Panel</a>\n";
    } else if ($nav == "main") {
        echo "<a class=\"navbar-brand ms-1\" href=\"./\">DS Control Panel</a>\n";
        echo "<form action=\"./\" method=\"post\" enctype=\"application/x-www-form-urlencoded\">\n";
        echo renderButton("submit", "navbtn", "logout", "", "btn btn-outline-danger my-2 my-sm-0", "Kijelentkezés <i class=\"bi bi-box-arrow-right\"></i>");
        echo "</form>\n";
    } else if ($nav == "back") {
        echo "<a class=\"navbar-brand ms-1\" href=\"./\">DS Control Panel <i class=\"bi bi-house\"></i></a>\n";
        echo "<form action=\"./\" method=\"post\" enctype=\"application/x-www-form-urlencoded\">\n";
        echo renderButton("submit", "navbtn", $target, "", "btn btn-outline-secondary my-2 my-sm-0", "<i class=\"bi bi-backspace\"></i> Vissza");
        echo renderButton("submit", "navbtn", "logout", "", "btn btn-outline-danger my-2 my-sm-0", "Kijelentkezés <i class=\"bi bi-box-arrow-right\"></i>");
        echo "</form>\n";
    } else if ($nav == "weekly") {
        echo "<a class=\"navbar-brand ms-1\" href=\"./\">DS Control Panel <i class=\"bi bi-house\"></i></a>\n";
        echo "<form action=\"./\" method=\"post\" enctype=\"application/x-www-form-urlencoded\">\n";
        echo renderButton("submit", "navbtn", "weeklyupl", "", "btn btn-outline-secondary my-2 my-sm-0", "Importálás <i class=\"bi bi-upload\"></i>");
        echo renderButton("submit", "navbtn", "weeklyset", "", "btn btn-outline-secondary my-2 my-sm-0", "Beállítások <i class=\"bi bi-sliders\"></i>");
        echo renderButton("submit", "navbtn", "logout", "", "btn btn-outline-danger my-2 my-sm-0", "Kijelentkezés <i class=\"bi bi-box-arrow-right\"></i>");
        echo "</form>\n";
    } else {
        echo "<a class=\"navbar-brand ms-1\" href=\"./\">DS Control Panel <i class=\"bi bi-house\"></i></a>\n";
        echo "<form action=\"./\" method=\"post\" enctype=\"application/x-www-form-urlencoded\">\n";
        echo renderButton("submit", "navbtn", "logout", "", "btn btn-outline-danger my-2 my-sm-0", "Kijelentkezés <i class=\"bi bi-box-arrow-right\"></i>");
        echo "</form>\n";
    }
} else {
    echo "<a class=\"navbar-brand ms-1\" href=\"./\">DS Control Panel <i class=\"bi bi-house\"></i></a>\n";
    echo "<form action=\"./\" method=\"post\" enctype=\"application/x-www-form-urlencoded\">\n";
    echo renderButton("submit", "navbtn", "logout", "", "btn btn-outline-danger my-2 my-sm-0", "Kijelentkezés <i class=\"bi bi-box-arrow-right\"></i>");
    echo "</form>\n";
}

?>

    </div>
</nav>