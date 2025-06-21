<?php
$nav = "back";
include("inc.php/elements/ds_navbar.inc.php");
?>

<div class="container">
    <div class="row">
    <div class="col"></div>
    <div class="col-12">

    <form action="./" method="post" class="mb-5">
        <table class="table table-hover">
            <thead class="table-light">
                <tr>
                <th scope="col">Aktív</th>
                <th scope="col">Nap</th>
                <th scope="col">Főételek száma</th>
                <th scope="col">Fix étel</th>
                </tr>
            </thead>
            <tbody id="inputForm">

<?php

foreach ($days as $day) {

    $isRequired = "required";
    $isChecked = "checked";
    if (!$day->isActive) {
        $isRequired = "disabled";
        $isChecked = "";
    }
    
    echo "<tr>\n";

    echo "<td scope=\"row\" class=\"align-middle\">\n<div class=\"form-check form-switch\">\n";
    echo renderInput("checkbox", $day->short."SC", "checked", "", "form-check-input", $isChecked." role=\"switch\"");
    echo "</div>\n</td>\n";

    echo "<td class=\" align-middle\">$day->name</td>\n";

    echo "<td class=\"col-2\">\n";
    echo renderInput("number", $day->short."SN", $day->numOfDishes, "", "form-control numberInput text-center", $isRequired);

    $isRequired = "required";
    $isChecked = "checked";
    if (!$day->hasFixed) {
        $isRequired = "disabled";
        $isChecked = "";
    }
    
    echo "<td>\n<div class=\"input-group mb-0\">\n";
    echo "<div class=\"input-group-text\">\n";
    if ($day->isActive) {
        echo renderInput("checkbox", $day->short."SF", "checked", "", "form-check-input mt-0", $isChecked);
    } else {
        echo renderInput("checkbox", $day->short."SF", "checked", "", "form-check-input mt-0", $isRequired);
    }
    echo "</div>\n";
    echo renderInput("text", $day->short."SD", "$day->hasFixed", "", "form-control", $isRequired);
    echo "</div>\n</td>\n";
    
    echo "</tr>\n";

}

?>
                </div>

            </tbody>
        </table>
        <div class="container">
            <div class="row">
                <div class="col"></div>
                <div class="col-lg-6 d-grid gap-2">
                    <div class="btn-group mt-3">
                        <!-- <a href="./" name="navbtn" value="weekly" class="btn btn-outline-secondary btn-lg btn-block col-lg-4"><i class="bi bi-backspace"></i> Mégsem</a> -->
                        <!-- <button name="navbtn" value="weekly" class="btn btn-outline-secondary btn-lg btn-block col-lg-4"><i class="bi bi-backspace"></i> Mégsem</button> -->
                        <input type="hidden" name="frmname" value="weekly_settings"/>
                        <button type="submit" name="navbtn" value="weekly" class="btn btn-primary btn-lg btn-block">Mentés <i class="bi bi-arrow-right-square"></i></button>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </form>

</div>


<script>

    let inputForm = document.getElementById("inputForm");
    let c = inputForm.children.length;
    
    function checkBox(i) {
        inputForm.children[i].children[0].children[0].children[0].addEventListener('change', function() {
            if (this.checked) {
                this.parentElement.parentElement.parentElement.children[2].children[0].disabled=false;
                this.parentElement.parentElement.parentElement.children[2].children[0].required=true;

                this.parentElement.parentElement.parentElement.children[3].children[0].children[0].children[0].disabled=false;
                if (this.parentElement.parentElement.parentElement.children[3].children[0].children[1].value != "") {
                    this.parentElement.parentElement.parentElement.children[3].children[0].children[1].disabled=false;
                    this.parentElement.parentElement.parentElement.children[3].children[0].children[1].required=true;
                }
            } else {
                this.parentElement.parentElement.parentElement.children[2].children[0].disabled=true;
                this.parentElement.parentElement.parentElement.children[2].children[0].required=false;

                this.parentElement.parentElement.parentElement.children[3].children[0].children[0].children[0].disabled=true;
                this.parentElement.parentElement.parentElement.children[3].children[0].children[0].children[0].required=false;
                this.parentElement.parentElement.parentElement.children[3].children[0].children[1].disabled=true;
                this.parentElement.parentElement.parentElement.children[3].children[0].children[1].required=false;
            }
        });
        inputForm.children[i].children[3].children[0].children[0].children[0].addEventListener('change', function() {
            if (this.checked) {
                this.parentElement.parentElement.children[1].disabled=false;
                this.parentElement.parentElement.children[1].required=true;
            } else {
                this.parentElement.parentElement.children[1].disabled=true;
                this.parentElement.parentElement.children[1].required=false;
            }
        });
    }

    for (let i = 0; i < c; i++) {
        checkBox(i)
    }

</script>