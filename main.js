$(window).scroll(function() {
  if (window.scrollY > $("header").innerHeight()) {
    $("#nav-id").addClass("nav-shrinked");
  } else {
    $("#nav-id").removeClass("nav-shrinked");
  }
});

$("#hamburger").click(function() {
  navToggle();
});

$("#blackout").click(function() {
  navHide();
});

$(".nav-link").click(function() {
  navHide();
});

$(".home-link").click(function() {
  navHide();
});

function navToggle() {
  $("#nav-ul").toggleClass("nav-ul-opened");
  $("#blackout").toggleClass("blackout-on");
  $("#nav-id").toggleClass("nav-opened");
  $(document.body).toggleClass("no-scroll");
}

function navHide() {
  $("#nav-ul").removeClass("nav-ul-opened");
  $("#blackout").removeClass("blackout-on");
  $("#nav-id").removeClass("nav-opened");
  $(document.body).removeClass("no-scroll");
}
