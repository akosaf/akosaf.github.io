<?php
$nav = "weekly";
include("inc.php/elements/ds_navbar.inc.php");

$edit = false;
foreach ($days as $day) {
    if (isset($_POST[$day->short."SC"]) || isset($_POST[$day->short."SN"])) {
        $edit = true;
    }
}

if ($edit) {
    $root = $_SERVER['DOCUMENT_ROOT'];
    $file = fopen($root."/dscp/classes/days.inc.php", "w") or die("Unable to open file!");
    fprintf($file, "<?php\n\n");
    for ($i = 0; $i < count($days); $i++) {
        if (isset($_POST[$days[$i]->short."SC"]) || isset($_POST[$days[$i]->short."SN"]) || isset($_POST[$days[$i]->short."SF"]) || isset($_POST[$days[$i]->short."SD"])) {
            if ($_POST[$days[$i]->short."SC"] == "checked") {
                if (isset($_POST[$days[$i]->short."SF"]) && $_POST[$days[$i]->short."SF"] == "checked") {
                    $days[$i] = new Day($days[$i]->name, $days[$i]->short, $_POST[$days[$i]->short."SN"], true, $_POST[$days[$i]->short."SD"]);
                    fprintf($file, "\$days[$i] = new Day(\"{$days[$i]->name}\", \"{$days[$i]->short}\", {$days[$i]->numOfDishes}, true, \"{$days[$i]->hasFixed}\");\n");
                } else {
                    $days[$i] = new Day($days[$i]->name, $days[$i]->short, $_POST[$days[$i]->short."SN"], true, null);
                    fprintf($file, "\$days[$i] = new Day(\"{$days[$i]->name}\", \"{$days[$i]->short}\", {$days[$i]->numOfDishes}, true, null);\n");
                }
            }
        } else if ($edit) {
            $days[$i] = new Day($days[$i]->name, $days[$i]->short, $days[$i]->numOfDishes, false, $days[$i]->hasFixed);
            fprintf($file, "\$days[$i] = new Day(\"{$days[$i]->name}\", \"{$days[$i]->short}\", {$days[$i]->numOfDishes}, false, null);\n");
        }
    }
    fprintf($file, "\n?>");
    fclose($file);
}

?>

<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col-lg-8 col-md-10 col-sm-12">
            <form action="./" method="post" enctype="application/x-www-form-urlencoded">
                <div class="row mb-3">
                    <label for="week" class="col-2 col-form-label">Hét:</label>
                    <div class="col-1">
                    <?php
                        $week = date("W")+1;
                        echo renderInput("number", "week", $week, "week", "form-control", "required  style=\"text-align: center;\"");
                    ?>
                    </div>
                </div>
                <div id="inputForm">
<?php

    foreach ($days as $day) {
        
        $isRequired = "required";
        $isChecked = "checked";
        if (!$day->isActive) {
            $isRequired = "disabled";
            $isChecked = "";
        }
        
        echo "<fieldset>\n";
        
        echo "<div class=\"form-check mt-2 mb-2\">\n";
        echo renderInput("checkbox", "$day->short"."X", "", "$day->short"."X", "form-check-input", $isChecked);
        echo renderLabel($day->short."X", "form-check-label", $day->name);
        echo "</div>\n";
        
        echo "<div class=\"mb-2 row\">\n";
        if ($day->numOfDishes == 0) {
            echo renderLabel($day->short."S", "col-sm-2 col-form-label", "Megjegyzés: ");
        } else {
            echo renderLabel($day->short."S", "col-sm-2 col-form-label", "Leves: ");
        }
        echo "<div class=\"col-sm-10\">\n";
        echo renderInput("text", $day->short."S", "", $day->short."S", "form-control", $isRequired);
        echo "</div>\n</div>\n";
        
        for ($i = 0; $i < $day->numOfDishes; $i++) {
            $char = chr($i+65);
            echo "<div class=\"mb-2 row\">\n";
            echo renderLabel("$day->short$i", "col-sm-2 col-form-label", "$char menü:");
            echo "<div class=\"col-sm-10\">\n";
            if ($i == 0 && !is_null($day->hasFixed)) {
                echo renderInput("text", "$day->short$char", "Fix – $day->hasFixed", "$day->short$char", "form-control", $isRequired);
            } else {
                echo renderInput("text", "$day->short$char", "", "$day->short$char", "form-control", $isRequired);
            }
            echo "</div>\n</div>\n";
        }
        
        echo "</fieldset>\n";
    }
    
?>

                </div>
                <div class="container">
                    <div class="row">
                        <div class="col"></div>
                        <div class="col-9 d-grid gap-2">
                            <button type="submit" name="navbtn" value="weeklynext" class="btn btn-primary btn-lg btn-block mt-3 mb-4">Tovább <i class="bi bi-arrow-right-square"></i></button>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </form>
        </div>
        <div class="col"></div>
    </div>
</div>

<script>

    let inputForm = document.getElementById("inputForm")
    let c = inputForm.children.length;

    function checkBox(i) {
        inputForm.children[i].children[0].children[0].addEventListener('change', function() {
            if (this.checked) {
                for (let j = 0; j < this.parentElement.parentElement.querySelectorAll("input[type=text]").length; j++) {
                    this.parentElement.parentElement.querySelectorAll("input[type=text]")[j].disabled=false;
                    this.parentElement.parentElement.querySelectorAll("input[type=text]")[j].required=true;
                }
                this.parentElement.children[0].title = "Aktív";
            } else {
                for (let j = 0; j < this.parentElement.parentElement.querySelectorAll("input[type=text]").length; j++) {
                    this.parentElement.parentElement.querySelectorAll("input[type=text]")[j].disabled=true;
                    this.parentElement.parentElement.querySelectorAll("input[type=text]")[j].required=false;
                }
                this.parentElement.children[0].title = "Inaktív";
            }
        });
    }

    for (let i = 0; i < c; i++) {
        checkBox(i)
    }

</script>