$(document).ready(function() {
  $("#theButton").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("body").addClass("light-text");
    $("#button2").toggle();
    $("#theButton").toggle();
  });

  $("#button2").click(function() {
    $("body").removeClass();
    $("#button2").toggle();
    $("#theButton").toggle();
  });

});