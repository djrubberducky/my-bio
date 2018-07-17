// Initialization of social buttons
var facebookButton = new LiquidButton({
  title: "Facebook",
  elementId: "facebook-button"
});

var vkButton = new LiquidButton({
  title: "VK",
  elementId: "vk-button"
});

var instagramButton = new LiquidButton({
  title: "Instagram",
  elementId: "instagram-button"
});

var sendButton = new LiquidButton({
  title: "Send",
  elementId: "send-button"
});



// Initialization of collapsed nav bar
var header = document.getElementById("header");
var navigationBar = document.getElementById("navigation-bar");

header.addEventListener("click", function () {
  var isOpen = navigationBar.getAttribute("data-open");
  if (isOpen) {
    navigationBar.removeAttribute("data-open");
  } else {
    navigationBar.setAttribute("data-open", "1");
  }
});



// Initialization of carousels
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    lazyLoad: true,
    autowidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 5,
  });
});
