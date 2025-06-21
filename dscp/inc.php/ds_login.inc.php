<?php
$nav = "login";
include("inc.php/elements/ds_navbar.inc.php");
?>

<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col-lg-6 col-md-8 col-sm-10">
            <form action="./" method="post" enctype="application/x-www-form-urlencoded">
                <fieldset>
                    <legend><h1>Bejelentkezés</h1></legend>
                    <div class="mb-3">
                        <label for="name" class="form-label">Felhasználónév:</label>
                        <input required type="text" class="form-control" name="name">
                    </div>
                    <div class="mb-3">
                        <label for="pw" class="form-label">Jelszó:</label>
                        <input required type="password" class="form-control" name="pw">
                    </div>
                    <div class="d-grid gap-2">
                        <input type="submit" class="btn btn-primary btn-lg btn-block mt-3 mb-2" value="Bejelentkezés">
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="col"></div>
    </div>
</div>