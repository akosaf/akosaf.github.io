///DECLARING
let a = "", b = "", c = "";
///OPERATING
function add(num) {
    /*if (b != "") {
        //clr()
    } else */
    if (num == '.' && (a == "" || a == "0")) {
        a = "0"
    } //else if (a != "" && b == "" && c == "") {clr()}

    if (num == '.' && a.includes(".")) {}
    else if (a == "0" && num != '.') {disp('up', num); a = num;}
    else if (b == "") {disp('up', a+num); a += num;}
    else {disp('up', `${b} ${c} ${a+num}`); a += num;}
    console.log(`a = ${a}, b = ${b}, c = ${c}, num = ${num}`)
}
function disp(pos, curr) {
    if (pos == 'dwn') {
        $('#screen').append(`<br><span>${curr}</span>`)
    } else if (pos == 'up') {
        $('#screen').html(curr)
    }
}
function clr() {
    a = ""; b = "";
    disp('up', a)
}
function operation(o) {
    if (a == "") {clr()}
    else {
        b = a;
        c = o;
        a = "";
        disp('up', a)
        disp('up', `${b} ${c}`)
    }
}
function equals() {
    if (a == "666") {darkmode();/* clr() */}
    else if (a == 0 && c =="/") {disp('dwn', "Error")}
    else if (c == "+") {a = parseFloat(b) + parseFloat(a); disp('dwn', a)}
    else if (c == "-") {a = parseFloat(b) - parseFloat(a); disp('dwn', a)}
    else if (c == "*") {a = parseFloat(b) * parseFloat(a); disp('dwn', a)}
    else if (c == "/") {a = parseFloat(b) / parseFloat(a); disp('dwn', a)}
    b = ""; c = "";
}
function backspace() {
    a = a.substring(0, a.length-1);
    disp('up', a);
}
///BUGFIXES
//ne lehessen az elején nulla
//eredménykiírásnál, ha tizedest írok, akkor clr() és "0."
//KÉSZ  ne lehessen több tizedespont
//KÉSZ  ha tizedesponttal kezdek, tegyen elé nullát
//KÉSZ  nullával nem lehet osztani
//KÉSZ  nem lehet operátorral kezdeni
//KÉSZ  enter billentyű nem működik -- elvileg igen
//KÉSZ  tovább kell számolni az előző eredménnyel
///KEYEVENTS

$(document).keydown(function(e) {
    e.preventDefault();
    if(e.keyCode == 97) {add(1)}
    else if(e.keyCode == 98) {add(2)}
    else if(e.keyCode == 99) {add(3)}
    else if(e.keyCode == 100) {add(4)}
    else if(e.keyCode == 101) {add(5)}
    else if(e.keyCode == 102) {add(6)}
    else if(e.keyCode == 103) {add(7)}
    else if(e.keyCode == 104) {add(8)}
    else if(e.keyCode == 105) {add(9)}
    else if(e.keyCode == 96) {add(0)}
    else if(e.keyCode == 110) {add('.')}
    else if(e.keyCode == 106) {operation('*')}
    else if(e.keyCode == 111) {operation('/')}
    else if(e.keyCode == 109) {operation('-')}
    else if(e.keyCode == 107) {operation('+')}
    else if(e.keyCode == 8) {backspace()}
    else if(e.keyCode == 46) {clr()}
    else if(e.keyCode == 13) {equals()}
})
/*
input.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("equBtn").click();
    }
});
*/

function darkmode() {
    $('#screen').css('background', '#222')
    $('#screen').css('color', '#fff')
    $('button').css('background', '#222')
    $('button').css('color', '#fff')
    $('button').css('border-color', '#444')
}
