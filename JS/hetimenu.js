let now = new Date();
let week;
let date;
let time;
let dateTime;
let timestamp;
let file;
init();
load();

function init(correction) {
    if (correction == undefined) correction = 0;
    now = setDate(correction);
    week = getWeek(now);
    date = getDate(now);
    time = getTime(now);
    dateTime = getDateTime(now);
    timestamp = getTimestamp(now);
}

function setDate(correction) { return new Date(now.getTime() + (604800000 * correction)); }

function getWeek(date) {
    let week;
    let startOfYear = new Date(date.getFullYear(), 0, 1);
    week = Math.ceil((((date.getTime() - startOfYear.getTime()) / 86400000) + startOfYear.getDay() + 1) / 7);
    if (date.getDay() == 0) week = (week - 1);
    if (week == 0) week = 1;
    return week;
}

function getDate(date) { return (date.toLocaleString()+"").slice(0,13); }

function getTime(date) { return (date.toLocaleString()+"").slice(14); }

function getDateTime(date) { return date.toLocaleString(); }

function getTimestamp(date) { return date.getTime(); }

function getDayName(date) { return (date.toString()+"").slice(0,3);}

function load() {
    file = setFile();
    $(".menu").append(`<h3 class="innerShadow">${week}. heti ajánlatunk:</h3>`)
    for (let i in file) {
        if (file[i][0] != "") {
            $(".menu").append(`<hr><h4 class="innerShadow">${i}</h4><hr><ul id="menu${i}"></ul>`);
            for (let j in file[i]) {
                $(`.menu #menu${i}`).append(`<li class="innerShadow">${file[i][j]}</li>`);
            }
        }
    }
}

function setFile() {
    if (isActivationThisWeek() && isActivated()) {
        if (isUploaded(1)) {
            return csvToObject(printPath());
        } else {
            init(-1);
        }
    }
    if (isUploaded()) {
        return csvToObject(printPath());
    }
    init(-1);
    return setFile();
}

function isActivated(correction) {
    if (correction != undefined) init(correction);
    if (now.getTime() > updateAt.getTime()) return true;
    return false;
}

function isActivationThisWeek() {
    if (getWeek(updateAt) == getWeek(now)) return true;
    return false;
}

function isUploaded(correction) {
    if (correction != undefined) init(correction);
    let result = false;
    let path = printPath();
    if ($.ajax({type: "GET", url: path, async: false}).status == 200) result = true;
    return result;
}

function printPath() {
    let year = (now.getFullYear()+"").slice(2);
    return `./CSV/export${year}${week}.csv`;
}

function csvToObject(path) {
    let lines = loadFile(path).split("\n"); //LF
    //let lines = loadFile(path).split("\r"); //CRLF
    let weekDays = lines[0].split(";");
    weekDays.shift();
    var object = {};

    for (w in weekDays) {
        object[weekDays[w]] = [];
    }

    for (l = 1, w = 0; l < lines.length; l++, w++) {
        if (l == 6) w = 0;
        let dishes = lines[l].split(";");
        dishes.shift();
        for (d = 0; d < dishes.length; d++) {
            //object[weekDays[d]].push(renderMenuName(w, dishes[d])); //LF compatible
            if (dishes[d] != "\r") {
                object[weekDays[d]].push(renderMenuName(w, dishes[d])); //CRLP & LF compatible
            } else {
                object[weekDays[d]].push(renderMenuName(w, "")); //CRLP & LF compatible
            }
        }
    }
    return object;
}

function loadFile(path) {
    return $.ajax({type: "GET", url: path, async: false}).responseText;
}

function renderMenuName(i, d) {
    if (i != 0 && d != "") return String.fromCharCode(i + 64) + ". " + d;
    return d;
}
