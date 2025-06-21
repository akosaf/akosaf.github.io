<?php
$nav = "back";
$target = "main";
include("inc.php/elements/ds_navbar.inc.php");

if (!isset($_POST["new"]) && isset($_POST["username"])) {
    array_push($users, new User($_POST["username"], "user", $_POST["pass"]));
} else if (isset($_POST["p".$users[0]->username])) {
    for ($i = 0; $i < count($users); $i++) {
        if (isset($_POST["c".$users[$i]->username])) {
            $users[$i] = new User($users[$i]->username, $_POST["c".$users[$i]->username], $_POST["p".$users[$i]->username]);
        } else {
            $users[$i] = new User($users[$i]->username, "user", $_POST["p".$users[$i]->username]);
        }
    }
}
include("inc.php/pages/users/set.inc.php");
?>

<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col-lg-7 col-md-10 col-sm-12">

            <form action="./" method="post" class="">
                <table class="table table-hover">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">Fióktípus</th>
                            <th scope="col">Név</th>
                            <th scope="col">Jelszó</th>
                        </tr>
                    </thead>
                    <tbody id="inputForm">

<?php

foreach ($users as $user) {

    $isMaster = "checked";
    if ($user->role != "master") {
        $isMaster = "";
    }

    echo "<tr>\n";

    echo "<td>\n".renderInput("checkbox", "c$user->username", "master", "c$user->username", "btn-check", $isMaster);
    echo "<label class=\"btn btn-outline-light\" for=\"c$user->username\">Master</label>\n</td>\n";

    echo "<td class=\"align-middle\">$user->username</td>\n";

    echo "<td>\n".renderInput("password", "p$user->username", $user->pass, "p$user->username", "form-control")."</td>\n";
    
    echo "</tr>\n";

}

?>

                        <tr>
                            <td>
                                <input checked class="btn-check" id="new" type="checkbox" name="new" value="checked">
                                <label class="btn btn-outline-light" for="new">Új fiók <i class="bi bi-person-plus"></i></label>
                            </td>
                            <td>
                                <input type="text" name="username" class="form-control" disabled>
                            </td>
                            <td>
                                <input type="password" name="pass" class="form-control" disabled>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="container">
                    <div class="row">
                        <div class="col"></div>
                        <div class="col-6 d-grid gap-2">
                            <div class="btn-group">
                                <!-- <a class="btn btn-outline-secondary btn-lg btn-block mt-3 mb-4 col-5" href="./"><i class="bi bi-backspace"></i> Vissza</a> -->
                                <button type="submit" name="navbtn" value="usersSave" class="btn btn-primary btn-lg btn-block mt-3 mb-4 col-7">Mentés <i class="bi bi-arrow-right-square"></i></button>
                            </div>
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

    let addUser = document.getElementById("new");

    addUser.parentElement.addEventListener('change', function() {
        if (addUser.parentElement.children[0].checked) {
            this.parentElement.children[1].children[0].disabled=true;
            this.parentElement.children[1].children[0].required=false;
            this.parentElement.children[2].children[0].disabled=true;
            this.parentElement.children[2].children[0].required=false;
        } else {
            this.parentElement.children[1].children[0].disabled=false;
            this.parentElement.children[1].children[0].required=true;
            this.parentElement.children[2].children[0].disabled=false;
            this.parentElement.children[2].children[0].required=true;
        }
    });

</script>