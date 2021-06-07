let galleryObj = {
    etel: [ "ételek",
        "./img/photos/IMG_0149.jpg",
        "./img/photos/IMG_0156-1.jpg",
        "./img/photos/IMG_0162-1.jpg",
        "./img/photos/IMG_0184-1.jpg",
        "./img/photos/IMG_0196.jpg",
        "./img/photos/IMG_0238.jpg",
        "./img/photos/IMG_0255.jpg",
        "./img/photos/IMG_0264.jpg",
        "./img/photos/IMG_0269.jpg"
    ],
    ital: [ "italok",
        //"/img/photos/IMG_0314.jpg",
        //"/img/photos/IMG_0315.jpg",
        "./img/photos/ital/mokka_italok_02.jpg",
        "./img/photos/ital/mokka_italok_03.jpg",
        "./img/photos/ital/mokka_italok_04.jpg",
        "./img/photos/ital/mokka_italok_05.jpg",
        "./img/photos/ital/IMG_0317.jpg",
        "./img/photos/ital/mokka_italok_06.jpg",
        //"/img/photos/ital/mokka_italok_14.jpg",
        "./img/photos/ital/mokka_italok_15.jpg",
        //"/img/photos/ital/mokka_italok_08.jpg",
        //"/img/photos/ital/mokka_italok_07.jpg",
        //"/img/photos/ital/mokka_italok_09.jpg",
        //"/img/photos/ital/mokka_italok_10.jpg",
        "./img/photos/ital/mokka_italok_11.jpg",
        "./img/photos/ital/mokka_italok_12.jpg",
        //"/img/photos/ital/mokka_italok_13.jpg",
        "./img/photos/ital/mokka_italok_01.jpg",
    ],
    etterem: [ "étterem",
        "./img/photos/IMG_0277.jpg",
        "./img/photos/IMG_0279.jpg",
        "./img/photos/IMG_0299.jpg",
        "./img/photos/IMG_0300.jpg",
        "./img/photos/IMG_0301.jpg",
        "./img/photos/IMG_0304.jpg",
        "./img/photos/IMG_0307.jpg",
        "./img/photos/etterem/mokka-etterem_01.jpg",
        //"/img/photos/etterem/mokka-etterem_02.jpg",
        //"/img/photos/etterem/mokka-etterem_03.jpg",
        //"/img/photos/etterem/mokka-etterem_04.jpg",
        //"/img/photos/etterem/mokka-etterem_05.jpg",
        //"/img/photos/etterem/mokka-etterem_06.jpg",
        //"/img/photos/etterem/mokka-etterem_07.jpg"
    ],
    kert: [ "kert",
        "./img/photos/IMG_0310.jpg",
        "./img/photos/IMG_0286.jpg",
        "./img/photos/IMG_0288.jpg",
        "./img/photos/IMG_0287.jpg",
        "./img/photos/IMG_0293.jpg",
        //"/img/photos/kert/mokka_kert_01.jpg",
        //"/img/photos/kert/mokka_kert_04.jpg",
        //"/img/photos/kert/mokka_kert_02.jpg",
        //"/img/photos/kert/mokka_kert_03.jpg",
    ],
    panzio: [ "panzió",
        "./img/mokkapanzio.jpg",
        "./img/photos/panzio/mokka_panzio_01.jpg",
        "./img/photos/panzio/mokka_panzio_02.jpg",
        "./img/photos/panzio/mokka_panzio_03.jpg",
        "./img/photos/panzio/mokka_panzio_04.jpg",
        "./img/photos/panzio/mokka_panzio_05.jpg",
        "./img/photos/panzio/mokka_panzio_06.jpg",
        "./img/photos/panzio/mokka_panzio_07.jpg",
        "./img/photos/panzio/mokka_panzio_08.jpg",
        "./img/photos/panzio/mokka_panzio_09.jpg",
        "./img/photos/panzio/mokka_panzio_10.jpg",
        "./img/photos/panzio/mokka_panzio_11.jpg",
        "./img/photos/panzio/mokka_panzio_12.jpg",
        "./img/photos/panzio/mokka_panzio_13.jpg",
        "./img/photos/panzio/mokka_panzio_14.jpg",
        "./img/photos/panzio/mokka_panzio_15.jpg",
        "./img/photos/panzio/mokka_panzio_16.jpg",
        "./img/photos/panzio/mokka_panzio_17.jpg",
        "./img/photos/panzio/mokka_panzio_18.jpg",
        "./img/photos/panzio/mokka_panzio_19.jpg",
        "./img/photos/panzio/mokka_panzio_20.jpg",
        "./img/photos/panzio/mokka_panzio_21.jpg",
        "./img/photos/panzio/mokka_panzio_22.jpg",
        "./img/photos/panzio/mokka_panzio_23.jpg",
        "./img/photos/panzio/mokka_panzio_24.jpg",
        "./img/photos/panzio/mokka_panzio_25.jpg",
        "./img/photos/panzio/mokka_panzio_26.jpg",
        "./img/photos/panzio/mokka_panzio_27.jpg",
        "./img/photos/panzio/mokka_panzio_28.jpg",
        "./img/photos/panzio/mokka_panzio_29.jpg"
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