<?php

function renderInput($type, $name, $value, $id = "", $class, $args = "") {
    return "<input type=\"$type\" name=\"$name\" value=\"$value\" id=\"$id\" class=\"$class\" $args>\n";
}

function renderButton($type, $name, $value, $id = "", $class, $args = "") {
    return "<button type=\"$type\" name=\"$name\" value=\"$value\" id=\"$id\" class=\"$class\">$args</button>\n";
}

function renderLabel($for, $class, $args = "") {
    return "<label for=\"$for\" class=\"$class\">$args</label>\n";
}

?>