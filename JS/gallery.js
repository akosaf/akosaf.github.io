let galleryObj = {
    etel: [ "ételek",
        "./img/photos/etel/IMG_0149.jpg",
        "./img/photos/etel/IMG_0156.jpg",
        "./img/photos/etel/IMG_0162.jpg",
        "./img/photos/etel/IMG_0184.jpg",
        "./img/photos/etel/IMG_0238.jpg",
        "./img/photos/etel/IMG_0196.jpg",
        "./img/photos/etel/IMG_0250.jpg",
        "./img/photos/etel/IMG_0264.jpg",
        "./img/photos/etel/IMG_0269.jpg",
        "./img/photos/etel/IMG_0324.jpg",
        "./img/photos/etel/IMG_0326.jpg",
        "./img/photos/etel/IMG_0427.jpg",
        "./img/photos/etel/IMG_0462.jpg",
        "./img/photos/etel/IMG_0468.jpg",
    ],
    ital: [ "italok",
        "./img/photos/ital/mokka_italok_02.jpg",
        "./img/photos/ital/mokka_italok_03.jpg",
        "./img/photos/ital/mokka_italok_04.jpg",
        "./img/photos/ital/mokka_italok_05.jpg",
        "./img/photos/ital/IMG_0317.jpg",
        "./img/photos/ital/mokka_italok_06.jpg",
        "./img/photos/ital/mokka_italok_15.jpg",
        "./img/photos/ital/mokka_italok_11.jpg",
        "./img/photos/ital/mokka_italok_12.jpg",
        "./img/photos/ital/mokka_italok_01.jpg",
    ],
    etterem: [ "étterem",
        "./img/photos/etterem/IMG_0277.jpg",
        "./img/photos/etterem/IMG_0279.jpg",
        "./img/photos/etterem/IMG_0299.jpg",
        "./img/photos/etterem/IMG_0300.jpg",
        "./img/photos/etterem/IMG_0301.jpg",
        "./img/photos/etterem/IMG_0304.jpg",
        "./img/photos/etterem/IMG_0307.jpg",
        "./img/photos/etterem/mokka-etterem_01.jpg",
    ],
    kert: [ "kert",
        "./img/photos/kert/IMG_0310.jpg",
        "./img/photos/kert/IMG_0286.jpg",
        "./img/photos/kert/IMG_0288.jpg",
        "./img/photos/kert/IMG_0287.jpg",
        "./img/photos/kert/IMG_0293.jpg",
    ],
    panzio: [ "panzió",
        "./img/photos/panzio/IMG_0274.jpg",
        "./img/photos/panzio/IMG_0440.jpg",
        "./img/photos/panzio/IMG_0441.jpg",
        "./img/photos/panzio/IMG_0442.jpg",
        "./img/photos/panzio/IMG_0443.jpg",
        "./img/photos/panzio/IMG_0444.jpg",
        "./img/photos/panzio/IMG_0448.jpg",
        "./img/photos/panzio/IMG_0451.jpg",
        "./img/photos/panzio/IMG_0450.jpg",
        "./img/photos/panzio/IMG_0435.jpg",
        "./img/photos/panzio/IMG_0436.jpg",
        "./img/photos/panzio/IMG_0437.jpg",
        "./img/photos/panzio/IMG_0430.jpg",
        "./img/photos/panzio/IMG_0433.jpg",
        "./img/photos/panzio/IMG_0434.jpg",
        "./img/photos/panzio/IMG_0438.jpg",
        "./img/photos/panzio/IMG_0439.jpg",
        "./img/photos/panzio/IMG_0445.jpg",
        "./img/photos/panzio/IMG_0446.jpg",
        "./img/photos/panzio/IMG_0447.jpg",
    ]
}
function load() {
    for (let i in galleryObj) {
        $(".section51").append(`<div class="hddn"><h2 class="innerShadow">${galleryObj[i][0]}</h2><div id="glryS${i}" class="owl-carousel owl-theme"></div></div>`)
        
        for (let j = 1; j < galleryObj[i].length; j++) {
            console.log(j, galleryObj[i][j])
            $(`.section51 #glryS${i}`).append(`<div class="item"><a href="${galleryObj[i][j]}"><img src="${galleryObj[i][j]}"></a></div>`)
        }
        //$(".section51").append(``)
    }
}
function arrange() {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        autoWidth: true,
        //responsiveClass:true,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
}
function zoom(num) {
    alert(`zoom${num}`)
}
$(document).ready(function() {
    load()
    arrange()
    $(".hddn").fadeIn(600)
})