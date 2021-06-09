let week = 23;
let hetimenu = {
    "hétfő": [
        "Paradicsomleves",
        "A. Zöldfűszeres bundában sült sertéskaraj, fűszeres kockaburgonyával",
        "B. Zöldséges kínai csirkecsíkok párolt jázminrizzsel"
    ],
    "kedd": [
        "Zöldborsóleves",
        "A. Csikós tokány főtt tésztával",
        "B. Fokhagymás sült csirkecomb petrezselymes burgonyával",
        "C. Tengeri hal kukoricalisztben sütve joghurtos salátával"
    ],
    "szerda": [
        "Korhelyleves",
        "A. Fix – Szántódi ropogós sült burgonyával",
        "B. Zúzapörkölt galuskával",
        "C. Áfonyás-vaníliás palacsinta"
    ],
    "csütörtök": [
        "Őszibarack krémleves",
        "A. Fix – Mokkapecsenye sült burgonyával",
        "B. Brokkolival, füstölt sajttal töltött csirkemell burgonyapürével",
        "C. Káposztás tészta"
    ],
    "péntek": [
        "Palócleves",
        "A. Túrós tészta mangalica tepertővel",
        "B. Gyros tál"
    ],
    "szombat": [
        "Tyúkhúsleves",
        "A. Csirkemell vaslapon sütve cheddar sajt mártással hercegnő burgonyával"
    ],
    "vasárnap": [
        "Sajtkrémleves",
        "A. Rántott sertéskaraj hasábburgonyával"
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