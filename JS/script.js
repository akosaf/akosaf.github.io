"use strict";

function heightCheck(page) {
  if (page == "home") {
    $(".bckgnd01").css("height", window.innerHeight - document.getElementById('navB').clientHeight)
  } else if (page == "etterem") {
    $(".section11").css("height", window.innerHeight - document.getElementById('s12h').clientHeight)
  }
}

function parallaxScrollInit() {
  let trE = `${(100 - document.documentElement.scrollTop + document.documentElement.scrollTop / 1.04)}%`
  $(".bckgnd02").css("background-position-y", (trE))
}

function positionBgnd(page) {
  if (page == "etterem") {
    if ($(window).width() > 992) {
      $('.s11bg').addClass("bcatt")
      $(".s11bg").css("background-position-y", "center")
    } else {
      $('.s11bg').removeClass("bcatt")
      let trE = `${document.documentElement.scrollTop - 40}px`
      $(".s11bg").css("background-position-y", trE)
    }
  } else if (page == "panzio") {
    if ($(window).width() > 992) {
      $('.bg20').addClass("bcatt")
      document.getElementById("bg20").style.backgroundPositionY = "center"
      document.getElementById("bg20").style.backgroundSize = "cover"
    } else {
      $('.bg20').removeClass("bcatt")
      let trE = `${document.documentElement.scrollTop - 420}px`
      document.getElementById("bg20").style.backgroundPositionY = `${trE}`
      document.getElementById("bg20").style.backgroundSize = `224%`
    }
  }
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$(document).ready(function () {
  if (checkDoc() == "home") {
    parallaxSwitch()
    heightCheck(checkDoc())
  }
  if (checkDoc() == "etterem") {
    heightCheck(checkDoc())
    positionBgnd(checkDoc())
  }
  if (checkDoc() == "panzio") {
    positionBgnd(checkDoc())
  }
})

$(window).scroll(function () {
  if (checkDoc() == "home") {
    parallaxSwitch()
  }
  if (checkDoc() == "etterem") {
    heightCheck(checkDoc())
    positionBgnd(checkDoc())
  }
  if (checkDoc() == "panzio") {
    positionBgnd(checkDoc())
  }
})

$(window).resize(function () {
  if (checkDoc() == "home") {
    parallaxSwitch()
  }
  if (checkDoc() == "etterem") {
    heightCheck(checkDoc())
    positionBgnd(checkDoc())
  }
  if (checkDoc() == "panzio") {
    positionBgnd(checkDoc())
  }
})

function parallaxSwitch() {
  if ($(window).width() > 1014) {
    parallaxScrollInit()
  } else {
    parallaxScrollInit()
  }
}

function checkDoc() {
    if (/etterem.html/.test(document.URL)) {
    return "etterem"
  } else if (/panzio.html/.test(document.URL)) {
    return "panzio"
  } else if (/etlap.html/.test(document.URL)) {
    return "etlap"
  } else if (/menu.html/.test(document.URL)) {
    return "menu"
  } else if (/galeria.html/.test(document.URL)) {
    return "galeria"
  } else {
    return "home"
  }
}