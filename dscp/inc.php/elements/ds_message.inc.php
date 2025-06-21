<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col-lg-6 col-md-8 col-sm-10">
            <div class="list-group mt-3">
<?php
    if (!isset($color)) $color = "success";
    echo "<span class=\"text-center list-group-item list-group-item-$color\">$message</span>"
?>
            </div>
        </div>
        <div class="col"></div>
    </div>
</div>
