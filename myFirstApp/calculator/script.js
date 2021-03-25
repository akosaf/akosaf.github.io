///DECLARING
let a = "", b = "", c = "";
///OPERATING
function add(num) {
    if (num == 0 && a == "") {
        //
    } else if (num == '.' && a == "") {
        //
    }
    if (b == "") {disp('up', a+num)}
    else {disp('up', `${b} ${c} ${a+num}`)}
    a += num;
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
    b = a;
    c = o;
    a = "";
    disp('up', a)
    disp('up', `${b} ${c}`)
}
function equals() {
    if (c == "+") {disp('dwn', parseFloat(b) + parseFloat(a))}
    else if (c == "-") {disp('dwn', parseFloat(b) - parseFloat(a))}
    else if (c == "*") {disp('dwn', parseFloat(b) * parseFloat(a))}
    else if (c == "/") {disp('dwn', parseFloat(b) / parseFloat(a))}
    a = ""; b = ""; c = "";
}
function backspace() {
    a = a.substring(0, a.length-1);
    disp('up', a);
}
///BUGFIXES
//ne lehessen az elején nulla
//ne lehessen több tizedespont
//ha tizedesponttal kezdek, tegyen elé nullát
//nullával nem lehet osztani
//nem lehet operátorral kezdeni
//tovább kell számolni az előző eredménnyel
///KEYEVENTS
$(document).keydown(function(e) {
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
})/*
$(document).keypress(function(e) {
    else if(e.which == 13) {equals()}
})*/
function darkmode() {
    $('#screen').css('background', '#222')
    $('#screen').css('color', '#fff')
    $('button').css('background', '#222')
    $('button').css('color', '#fff')
    $('button').css('border-color', '#444')
}

darkmode()