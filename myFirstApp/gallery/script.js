// GALLERY

let galleryArr = [
    {
        image: "./img/DSC_0412.JPG",
        title: "Piano",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_0215.jpg",
        title: "Ant",
        paragraph: "Lorem eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_0387.JPG",
        title: "Snail",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem in eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_0431.jpg",
        title: "Bridge",
        paragraph: "Quidem in eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_1207.jpg",
        title: "Clock",
        paragraph: "Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_6494.jpg",
        title: "Dandelion",
        paragraph: "Lorem in eveniet sed nobis. Itaque, autem! Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_6685.jpg",
        title: "Woodpecker",
        paragraph: "Sapiente, non repellendus! Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    },
    {
        image: "./img/SAM_8967.jpg",
        title: "Ducks",
        paragraph: "Quas totam doloremque adipisci necessitatibus eius ad, quasi nobis illum quam itaque!"
    }
];

// LOAD THUMBNAILS
//for (let i = 0; i < galleryArr.length; i++) {
for (let i in galleryArr) {
    //$('ul').append(`<li><img src="${galleryArr[i].image}" alt="${galleryArr[i].title}" id="item${i}"></li>`)
    $('ul').append(`<li id="item${i}" style="background-image: url(${galleryArr[i].image})"></li>`)
};

let current = 0;

function choosePic(i) {
//    $('.bigPic').attr('src', galleryArr[i].image);
    $('.bigPic').css('background-image', `url(${galleryArr[i].image})`);
    $('h2').text(galleryArr[i].title);
    $('p').text(galleryArr[i].paragraph);
    current = i;
    cancelUpload();
}

function prev() {
    (current <= 0)
        ? current = galleryArr.length-1
        : current--
    choosePic(current)
}

function next() {
    (current == galleryArr.length-1)
        ? current = 0
        : current++
    choosePic(current);
}

///Choose thumbnail
function choose() {
    $('li').click(function(item) {
        i = item.target.id.slice(4)
        choosePic(i)
})}
choose()

///KEY EVENTS
function arrowKeys() {
    $(document).keydown(function(e) {
        if (e.keyCode == 37) {prev()}
        else if (e.keyCode == 39) {next()}
})}
arrowKeys()

///Extra functions

function addView() {
    $(document).unbind("keydown");
    $('div.upld').css('display', 'block')
    $('#addBtn').css('display', 'none')
    $('#uplBtn').attr('onclick', 'upload()')
    $('#editBtn').css('display', 'none')
}

function cancelUpload() {
    $('div.upld').css('display', 'none')
    $('#addBtn').css('display', 'inline-block')
    $('#uploadSrc').val("")
    $('#uploadTitle').val("")
    $('#uploadInfo').val("")
    $('#delBtn').css('display', 'none')
    $('#editBtn').css('display', 'inline')
    //arrowKeys()
}

function upload() {
    i = galleryArr.length
    update(i)
    $('ul').append(`<li id="item${i}" style="background-image: url(${galleryArr[i].image})"></li>`)
    choose()
}

function update(i) {
    if ($('#uploadSrc').val() != "") {
        Arr = $('#uploadSrc').val().split("fakepath")[1].split("")
        path = "./img/"
        for (let j = 1; j < Arr.length; j++) {
            path += Arr[j]
        }
    } else {
        path = galleryArr[current].image
    }
    galleryArr[i] = {
        image: path,
        title: $('#uploadTitle').val(),
        paragraph: $('#uploadInfo').val()
    }
    choosePic(i)
    cancelUpload()
}

function modify() {
    update(current)
    //$('#uplBtn').attr('onclick', 'upload()')
    $('ul').html("")
    for (let i in galleryArr) {
        $('ul').append(`<li id="item${i}" style="background-image: url(${galleryArr[i].image})"></li>`)
    };
    choose()
    $('#delBtn').css('display', 'none')
}

function edit() {
    //$('#uploadSrc').val(`${galleryArr[current].image}`)
    $('#uploadTitle').val(`${galleryArr[current].title}`)
    $('#uploadInfo').val(`${galleryArr[current].paragraph}`)
    addView()
    $('#uplBtn').attr('onclick', 'modify()')
    $('#delBtn').css('display', 'inline')
}

function del() {
    c = current
    galleryArr.splice(c, 1)
    $('ul').html("")
    for (let i in galleryArr) {
        $('ul').append(`<li id="item${i}" style="background-image: url(${galleryArr[i].image})"></li>`)
    };
    choose()
    if (current == galleryArr.length) {
        current = 0;
    }
    choosePic(current);
}

//kérdések:
//jobbra/balra nyilak funkciójának inaktiválása az edit menüben
//todo appal volt valami kérdés
//miért nem ugyanaz a for és a for in (load thumbnails) -- de ugyanaz
//a thumbnailbar miért nem zsugorodik össze?

$(document).ready(()=>{
    $('body').css('opacity', '100')
})