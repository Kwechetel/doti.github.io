function myNav() {
    var x = document.getElementById("myNav");
    if (x.className === "topnav") {
        x.className += " respnav";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      
      event.preventDefault();
      
      var hash = this.hash;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        
        window.location.hash = hash;
      });
    } 
  });
  // Scrow spy for about section
  $("#about").hover(function() {
    $(".about").addClass("active");
  }, function() {
    $(".about").removeClass("active");
  });
  // Scrow spy for portfolio section
  $("#portfolio").hover(function() {
    $(".portfolio").addClass("active");
  }, function() {
    $(".portfolio").removeClass("active");
  });
  // Scrow spy for contact section
  $("#contact").hover(function() {
    $(".contact").addClass("active");
  }, function() {
    $(".contact").removeClass("active");
  });  
  // Animate go-top class
  $(".go-top").hover(function() {
    $(this).addClass("animated rubberBand");
  });  
  
  $("#portfolio, #contact, footer, .go-top").hover(function() {
    $(".go-top").removeClass("hide");
  }, function() {
    $(".go-top").addClass("hide");
  });
  
  $("button#submit").click(function() {
    $("#after-contact").removeClass("hide");
    $("body").css("overflow", "hidden");
    $(".networks").clone().appendTo("#cloned-links");
  });
  
  $(".close-btn").click(function() {
    $("#after-contact").addClass("hide");
    $("body").css("overflow", "visible");
    $("#networks").closest(".networks").remove();
    event.preventDefault();
  });
});
$(function(){
  $("#heading").typed({
    strings: ["Welcome...", "Whom am I?"],
    typeSpeed: 0,
    backSpeed:0,
    backDelay:3500,
    loop:true
  });
  $("#content p").typed({
    strings: ["Sorry, contact form is currently disabled._ _", "Please contact me directly on social networks below:_ _"],
    typeSpeed: 0,
    backSpeed:0,
    backDelay:3500,
    loop:true
  });
});
