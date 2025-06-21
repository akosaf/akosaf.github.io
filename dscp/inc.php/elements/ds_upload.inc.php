<?php
$nav = "back";
$target = "weekly";
include("inc.php/elements/ds_navbar.inc.php");
?>
<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col-lg-6 col-md-8 col-sm-10">
            <form action="./" method="post" class="input-group mb-3" enctype="multipart/form-data">
                <input type="file" name="file" class="form-control" id="file">
                <?php
                    echo renderButton("submit", "navbtn", "$target", "", "input-group-text", "Feltöltés");
                ?>
            </form>
        </div>
        <div class="col"></div>
    </div>
</div>
