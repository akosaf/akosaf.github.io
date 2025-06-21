<?php
session_start();

spl_autoload_register(function($class) {
    include ("./classes/".$class.".inc.php");
});

include("inc.php/util/display.inc.php");
include("classes/users.inc.php");
include("classes/days.inc.php");

$nav = "";
$sessionexpires = 600;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DS Control Panel</title>
    <link rel="shortcut icon" href="../img/dip.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <style>
        h1 {
            margin-top: 5vh;
            margin-bottom: 32px;
            color: #444;
            text-align: center;
        }
        nav {
            margin-bottom: 4vh;
        }
        input#week {
            min-width: 70px;
        }
        .numberInput {
            max-width: 64px;
        }
    </style>
</head>
<body>

<?php

    if (isset($_COOKIE['ssn']) && isset($_SESSION['sid'])) {
        loggedIn($sessionexpires, $days, $users);
    } else if (isset($_SESSION['sid']) && isset($_POST['navbtn']) && $_POST['navbtn'] != "logout") {
        sessionExpired();
    } else {
        $success = false;
        /*if (isset($_COOKIE['tries'])) {
            $tries = $_COOKIE['tries'];
        } else {
            $tries = 3;
        }*/
        if (isset($_POST["name"]) && isset($_POST["pw"])) {
            foreach ($users as $user) {
                if (htmlspecialchars($_POST["name"]) == $user->username) {
                    if (htmlspecialchars($_POST["pw"]) == $user->pass) {
                        if ($user->role == "master") {
                            $_SESSION['sid'] = "master";
                        } else {
                            $_SESSION['sid'] = "user";
                        }
                        setcookie("ssn", "session", time() + $sessionexpires);
                        include("inc.php/ds_main.inc.php");
                        $success = true;
                    } else {
                        /*$tries--;
                        setcookie("tries", $tries, time() + 10);
                        if ($tries == 0) {
                            include("inc.php/ds_login.inc.php");
                            $message = "Hibás jelszó! Felhasználói fiók blokkolva!";
                            include("inc.php/elements/ds_loginerr.inc.php");
                        } else {*/
                            //include("inc.php/ds_login.inc.php");
                            //$message = "Hibás jelszó!";
                            //include("inc.php/elements/ds_loginerr.inc.php");
                        //}
                    }
                }
            }
            if ($success == false) {
            //if ($success == false && (isset($_COOKIE['tries']))) {
                include("inc.php/ds_login.inc.php");
                $message = "Sikertelen belépés!";
                $color = "danger";
                include("inc.php/elements/ds_message.inc.php");
            }
        } else {
            include("inc.php/ds_login.inc.php");
        }
    }

    function loggedIn($sessionexpires, $days, $users) {
        setcookie("ssn", "session", time() + $sessionexpires);
        if (isset($_POST['navbtn'])) {
            if ($_POST['navbtn'] == "weekly") {
                include("inc.php/pages/weekly/fill.inc.php");
            } else if ($_POST['navbtn'] == "weeklyupl") {
                $target = "weekly";
                include("inc.php/elements/ds_upload.inc.php");
            } else if ($_POST['navbtn'] == "weeklyset") {
                $target = "weekly";
                include("inc.php/pages/weekly/settings.inc.php");
            } else if ($_POST['navbtn'] == "weeklyTimer") {
                include("inc.php/pages/weekly/finish.inc.php");
            } else if ($_POST['navbtn'] == "weeklynext") {
                include("inc.php/pages/weekly/next.inc.php");
            } else if ($_POST['navbtn'] == "gallery") {
                include("inc.php/pages/gallery/ds_gallery.inc.php");
            } else if ($_POST['navbtn'] == "menu") {
                include("inc.php/pages/menu/ds_menu.inc.php");
            } else if ($_POST['navbtn'] == "users") {
                include("inc.php/pages/users/fill.inc.php");
            } else if ($_POST['navbtn'] == "usersSave") {
                include("inc.php/pages/users/fill.inc.php");
            } else if ($_POST['navbtn'] == "logout") {
                logOut();
            } else {
                include("inc.php/ds_main.inc.php");
            }
        } else {
            include("inc.php/ds_main.inc.php");
        }
    }

    function sessionExpired() {
        session_destroy();
        include("inc.php/ds_login.inc.php");
        $message = "A munkamenet lejárt!";
        $color = "danger";
        include("inc.php/elements/ds_message.inc.php");
    }

    function logOut() {
        session_destroy();
        setcookie("ssn", "session", time() + 0);
        include("inc.php/ds_login.inc.php");
        $message = "Sikeres kijelentkezés!";
        $color = "success";
        include("inc.php/elements/ds_message.inc.php");
    }

?>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

</body>
</html>