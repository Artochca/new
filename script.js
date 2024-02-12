document.addEventListener("DOMContentLoaded", function () {

    var controller = new ScrollMagic.Controller();

    for (var i = 1; i <= 6; i++) {
        var triggerElement = ".section:nth-child(" + i + ")";
        var scene = new ScrollMagic.Scene({
            triggerElement: triggerElement,
            duration: 10, 
            triggerHook: 5, 
        })
        .setTween(TweenMax.fromTo(triggerElement, 1, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 })) // Анимация для i-го раздела
        .addTo(controller);
    }
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}