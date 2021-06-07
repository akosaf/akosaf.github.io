"use strict";

function parallaxScrollInit() {
    $(".bckgnd02").css("background-position-y", (($(window).scrollTop()) / 4) - $(window).height())
}
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}
$(document).ready(function () {
    parallaxSwitch()
})

$(window).scroll(function () {
    parallaxSwitch()
})

$(window).resize(function () {
    parallaxSwitch()
})

function parallaxSwitch() {
    if ($(window).width() > 1014) {
        parallaxScrollInit()
    }
}