const password = "creta2024#";
let input = prompt("please enter the password");
while (input !== password) {
  input = prompt("please enter the password");
}

$(document).ready(function () {
  // onTop = getElementOnTop();
  setTimeout(() => {
    $("#hero-heading").addClass("onScreen");
  }, 1000);
  setTimeout(() => {
    $("#hero-subheading").addClass("onScreen");
  }, 1500);
  setTimeout(() => {
    $(".header-wrapper").addClass("onScreen");
  }, 2000);
  setTimeout(() => {
    $("div#root").addClass("onScreen");
  }, 2200);
});
