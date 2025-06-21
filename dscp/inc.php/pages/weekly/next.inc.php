<?php
include("inc.php/elements/ds_navbar.inc.php");
?>

<div class="container">
    <div class="row">
    <div class="col"></div>
    <div class="col-lg-4 col-md-6 col-sm-12">

    <form action="./" method="post">
        <div class="d-grid gap-0">
            <div class="input-group mb-3">
                <!-- <span class="input-group-text"><i class="bi bi-box-arrow-down"></i></span> -->

<?php

$data = array();

foreach ($_POST as $key => $value) {
    $data[$key] = trim(htmlspecialchars($value));
}

$max = 0;
foreach ($days as $day) {
    if ($max < $day->numOfDishes) {
        $max = $day->numOfDishes;
    }
}

$menus = array();
foreach ($days as $day) {
    $menus[$day->short] = array();
}

foreach ($data as $key => $value) {
    if ($key != "week" && $key[2] != "X" && str_split($key, 2)[0] != "na") {
        array_push($menus[str_split($key, 2)[0]], $value);
    }
}
foreach ($days as $day) {
    for ($i = count($menus[$day->short]); $i <= $max; $i++) {
        array_push($menus[$day->short], "");
    }
}

function writeCSV($data, $menus, $max) {
    $root = $_SERVER['DOCUMENT_ROOT'];
    $year = str_split(date("Y"), 2)[1];
    $week = $data['week'];
    
    $dlfile = fopen($root."/CSV/export$year{$data['week']}.csv", "w") or die("Unable to open file!");
    fprintf($dlfile, chr(0xEF).chr(0xBB).chr(0xBF));
    fprintf($dlfile, "Nap;Hétfő;Kedd;Szerda;Csütörtök;Péntek;Szombat;Vasárnap\n");
    
    for ($i = 0; $i <= $max; $i++) {
        if ($i == 0) {
            fprintf($dlfile, "Leves");
        } else {
            $char = chr($i+64);
            fprintf($dlfile, "$char menü:");
        }
        fprintf($dlfile, ";{$menus['mo'][$i]};{$menus['tu'][$i]};{$menus['we'][$i]};{$menus['th'][$i]};{$menus['fr'][$i]};{$menus['sa'][$i]};{$menus['su'][$i]}\n");
    }

    fclose($dlfile);
    
    echo "<a href=\"../CSV/export$year$week.csv\" class=\"form-control btn btn-outline-secondary btn-lg btn-block\">Exportálás</a>";
}

writeCSV($data, $menus, $max);


?>
                <span class="input-group-text"><i class="bi bi-filetype-csv"></i></span>
            </div>
            <div class="input-group mb-3">
                <!-- <span class="input-group-text"><i class="bi bi-hourglass-split"></i></span> -->
                <a id="addTiming" class="form-control btn btn-outline-secondary btn-lg btn-block">Időzítés</a>
                <span class="input-group-text"><i class="bi bi-clock"></i></span>
            </div>
            <div class="input-group mb-3">
                <!-- <span class="input-group-text"><i class="bi bi-file-earmark-arrow-up"></i></span> -->
                <button type="submit" name="navbtn" value="weeklyTimer" class="form-control btn btn-outline-secondary btn-lg btn-block">Élesítés</button>
                <span class="input-group-text"><i class="bi bi-arrow-down-up"></i></span>
            </div>
        </div>
    </form>

    </div>
    <div class="col"></div>
    </div>
</div>
<script>

    document.getElementById("addTiming").addEventListener("click", viewTimingForm);

    function viewTimingForm() {
        let update = new Date();
        if (update.getDay() < 5) update = new Date(update.getTime() + ((5 - update.getDay()) * 86400000));
        let year = update.getFullYear();
        let month = update.getMonth()+1;
        if (month < 10) month = "0" + month;
        let day = update.getDate();
        console.log(`${year}-${month}-${day}T18:00:00`);
        let form =
        `<input type="datetime-local" id="targetDate" name="targetDate" class="form-control" value="${year}-${month}-${day}T15:00:00">` +
        `<button type="submit" name="navbtn" value="weeklyTimer" class="btn btn-outline-secondary btn-lg btn-block">Mentés</button>` +
        `<span class="input-group-text"><i class="bi bi-clock"></i></span>`;
        document.getElementById("addTiming").parentElement.innerHTML = form;
    }

</script>