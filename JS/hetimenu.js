let week = 19;
let hetimenu = {
    "hétfő": [
        "Burgonyakrémleves",
        "A. Bolognai rakott spagetti",
        "B. Szezámmagos csirkemell rizibizivel"
    ],
    "kedd": [
        "Májusi zöldségleves",
        "A. Sertéskaraj császárszalonnás lecsóval, párolt rizzsel",
        "B. Tejszínes-gombás csirke csíkok orsótésztával",
        "C. Burgonyafőzelék fasírttal"
    ],
    "szerda": [
        "Lebbencsleves",
        "A. Fix – Szántódi ropogós sült burgonyával",
        "B. Cézár saláta",
        "C. Grízes tészta sárgabarack lekvárral"
    ],
    "csütörtök": [
        "Meggyleves",
        "A. Fix – Mokkapecsenye sült burgonyával",
        "B. Csirkepaprikás galuskával",
        "C. Rántott cukkini, karfiol, gomba, zöldséges jázmin rizzsel"
    ],
    "péntek": [
        "Lencsegulyás",
        "A. Brassói aprópecsenye",
        "B. Kijevi csirkemell burgonyapürével"
    ],
    "szombat": [
        "Zöldborsóleves",
        "A. Sertéskaraj bécsi bundában vegyes körettel"
    ],
    "vasárnap": [
        "Tyúkhúsleves",
        "A. Gyros tál"
    ]
}

function load () {
    $(".menu").append(`<h3 class="innerShadow">${week}. heti ajánlatunk:</h3>`)
    for (let i in hetimenu) {
        $(".menu").append(`<hr><h4 class="innerShadow">${i}</h4><hr><ul id="menu${i}"></ul>`)
        for (let j in hetimenu[i]) {
            $(`.menu #menu${i}`).append(`<li class="innerShadow">${hetimenu[i][j]}</li>`)
        }
    }
}
load()