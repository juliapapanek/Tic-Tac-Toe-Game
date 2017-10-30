// every even click add an x to the td if no value is currently present in it
// every odd click add an o to the td if no value is current present in it
// if a value is already present in a td, alert you cannot choose this space

$(document).ready(function(){

  var player = 1;

$(".square").on("click", function(event){

  var squareSelected = $(this);

  if (squareSelected.hasClass("ex") || squareSelected.hasClass("oh")) {
    alert("This spot is taken. Please choose another one.");
  } else {
    if(player === 1) {
      squareSelected.text("X");
      squareSelected.addClass("ex");
      player = 2;
    } else {
      squareSelected.text("O");
      squareSelected.addClass("oh");
      player = 1;
    }
  }
});

// function checkIfPlayerWon() {
//
//   if ($(".sq1").hasClass("ex") && $(".sq2").hasClass("ex") && (".sq3").hasClass("ex")) {
//     alert("you won!");
//   }
//
// }


});
