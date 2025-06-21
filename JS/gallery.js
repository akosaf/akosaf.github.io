let galleryObj = {
    etel: [ "ételek",
        "./img/photos/etel/DSC03626.jpeg",
        "./img/photos/etel/DSC03654.jpeg",
        "./img/photos/etel/DSC03678.jpeg",
        "./img/photos/etel/DSC03769.jpeg",
        "./img/photos/etel/IMG_0292.jpeg",
        "./img/photos/etel/IMG_1958.JPG",
        "./img/photos/etel/IMG_2259.JPG",
        "./img/photos/etel/IMG_3146.jpeg",
        "./img/photos/etel/IMG_4154.jpeg",
        "./img/photos/etel/IMG_4360.jpeg",
        "./img/photos/etel/IMG_4411.jpeg",
        "./img/photos/etel/IMG_4421.jpeg",
        "./img/photos/etel/IMG_4925.jpeg",
        "./img/photos/etel/IMG_5292.jpeg",
        "./img/photos/etel/IMG_5562.jpeg",
        "./img/photos/etel/169.jpg",
        "./img/photos/etel/170.jpg",
        "./img/photos/etel/171.jpg",
        "./img/photos/etel/172.jpg",
        "./img/photos/etel/166.jpg",
        "./img/photos/etel/165.jpg",
        "./img/photos/etel/163.jpg",
        "./img/photos/etel/167.jpg",
        "./img/photos/etel/201.jpg",
        "./img/photos/etel/205.jpg",
        "./img/photos/etel/010.jpg",
        "./img/photos/etel/043.jpg",
        "./img/photos/etel/046.jpg",
        "./img/photos/etel/065.jpg",
        "./img/photos/etel/160.jpg",
        "./img/photos/etel/161.jpg",
        "./img/photos/etel/162.jpg",
    ],
    ital: [ "italok",
        "./img/photos/ital/IMG_3668.jpeg",
        "./img/photos/ital/IMG_4610.jpeg",
        "./img/photos/ital/158.jpg",
        "./img/photos/ital/160.jpg",
        "./img/photos/ital/075.jpg",
        "./img/photos/ital/015.jpg",
        "./img/photos/ital/120.jpg",
        "./img/photos/ital/145.jpg",
        "./img/photos/ital/114.jpg",
        "./img/photos/ital/086.jpg",
    ],
    etterem: [ "étterem",
        "./img/photos/etterem/IMG_5779.JPG",
        "./img/photos/etterem/IMG_5781.JPG",
        "./img/photos/etterem/IMG_5782.JPG",
        "./img/photos/etterem/IMG_5783.JPG",
        "./img/photos/etterem/IMG_5784.JPG",
        "./img/photos/etterem/IMG_5785.JPG",
        "./img/photos/etterem/IMG_5786.JPG",
        "./img/photos/etterem/IMG_5787.JPG",
        "./img/photos/etterem/IMG_5788.JPG",
    ],
    kert: [ "rendezvénytér",
        "./img/photos/kert/DSC02366.jpg",
        "./img/photos/kert/DSC02382.jpg",
        "./img/photos/kert/DSC02414.jpg",
        "./img/photos/kert/IMG_0067.jpeg",
        "./img/photos/kert/IMG_2123.jpeg",
        "./img/photos/kert/IMG_2132.jpeg",
        "./img/photos/kert/IMG_2477.jpeg",
        "./img/photos/kert/IMG_2480.jpeg",
        "./img/photos/kert/IMG_3019.jpeg",
        "./img/photos/kert/IMG_3021.jpeg",
        "./img/photos/kert/IMG_9614.jpeg",
        "./img/photos/kert/IMG_9617.jpeg",
        "./img/photos/kert/IMG_9624.jpeg",
        "./img/photos/kert/IMG_9628.jpeg",
    ],
    panzio: [ "panzió",
        "./img/photos/panzio/IMG_0440.jpg",
        "./img/photos/panzio/IMG_0441.jpg",
        "./img/photos/panzio/IMG_0442.jpg",
        "./img/photos/panzio/IMG_0443.jpg",
        "./img/photos/panzio/IMG_0451.jpg",
        "./img/photos/panzio/IMG_0450.jpg",
        "./img/photos/panzio/IMG_0448.jpg",
        "./img/photos/panzio/IMG_0435.jpg",
        "./img/photos/panzio/IMG_0436.jpg",
        "./img/photos/panzio/IMG_0430.jpg",
        "./img/photos/panzio/IMG_0446.jpg",
        "./img/photos/panzio/IMG_0437.jpg",
        "./img/photos/panzio/IMG_0433.jpg",
        "./img/photos/panzio/IMG_0434.jpg",
        "./img/photos/panzio/IMG_0444.jpg",
        "./img/photos/panzio/IMG_0274.jpg",
    ]
}
function load() {
    for (let i in galleryObj) {
        $(".section51").append(`<div class="hold"><h2 class="innerShadow">${galleryObj[i][0]}</h2><div id="glryS${i}" class="owl-carousel owl-theme"></div></div>`)
        
        for (let j = 1; j < galleryObj[i].length; j++) {
            //console.log(j, galleryObj[i][j]) // TÖRÖLNI KELL
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
/*function zoom(num) { // EZ ITT NEM TUDOM MINEK VOLT, TELJESEN FELESLEGES
    alert(`zoom${num}`)
}*/
$(document).ready(function() {
    load()
    arrange()
    $(".hold").fadeIn(600)
})