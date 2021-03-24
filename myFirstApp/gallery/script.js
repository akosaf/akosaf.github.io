// GALLERY

let galleryArr = [
    {
        image: "./img/DSC_0412.JPG",
        title: "Piano",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem in eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_0215.jpg",
        title: "Ant",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem in eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_0387.JPG",
        title: "Snail",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem in eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_0431.jpg",
        title: "Bridge",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem in eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_1207.jpg",
        title: "Clock",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem in eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_6494.jpg",
        title: "Blow ball",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem in eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_6685.jpg",
        title: "Woodpecker",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem in eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_8967.jpg",
        title: "Ducks",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem in eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
];

/*for (let i = 0; i < galleryArr.length-1; i++) {*/
for (let i in galleryArr) {
    $('ul').append(`<li><img src="${galleryArr[i].image}" alt="${galleryArr[i].title}" id="item${i}"></li>`)
};

let current = 0;

function prev() {
    //
    (current <= 0)
        ? current = galleryArr.length-1
        : current--
    console.log(current);
    $('.bigPic').attr('src', galleryArr[current].image)
}

function next() {
    //
//    if (current == galleryArr.length-1) {
//        current = 0;
//    } else {
//        current++;
//    }
    (current == galleryArr.length-1)
        ? current = 0
        : current++
    console.log(current);
    $('.bigPic').attr('src', galleryArr[current].image)
}

$('li').click(function(item) {
    i = item.target.id.slice(4)
    console.log(i)
    $('.bigPic').attr('src', galleryArr[i].image)
    current = i
})
