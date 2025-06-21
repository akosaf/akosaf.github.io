<?php
$nav = "main";
include("inc.php/elements/ds_navbar.inc.php");
?>

<div class="container">
    <div class="row">
    <div class="col"></div>
    <div class="col-lg-6 col-md-8 col-sm-10">
        <form action="./" method="post">
            <div class="d-grid gap-0">
                <button name="navbtn" value="weekly" class="btn btn-outline-secondary btn-lg btn-block mb-4">Heti menü szerkesztése</button>
                <button name="navbtn" value="gallery" class="btn btn-outline-secondary btn-lg btn-block mb-4">Galéria szerkesztése</button>
                <button name="navbtn" value="menu" class="btn btn-outline-secondary btn-lg btn-block mb-4">Étlap szerkesztése</button>
                <?php
                if ($_SESSION['sid'] == "master") {
                    echo renderButton("", "navbtn", "users", "", "btn btn-outline-secondary btn-lg btn-block", "Felhasználói fiókok szerkesztése");
                }
                ?>
            </div>
        </form>
    </div>
    <div class="col"></div>
    </div>
</div>