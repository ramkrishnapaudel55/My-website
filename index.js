for (i = 0; i <= 6; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);

  });
}



document.addEventListener("keypress", function() {

makeSound(event.key);
buttonAnimation(event.key);

});


function makeSound(key) {
  switch (key) {
    case "w":
      var kick = new Audio("Music/b1.mp3");
      kick.play();

      break;

    case "a":
      var snare = new Audio("Music/b2.mp3");
      snare.play();

      break;

    case "s":
      var tom1 = new Audio("Music/b3.mp3");
      tom1.play();

      break;

    case "d":
      var tom2 = new Audio("Music/b4.mp3");
      tom2.play();

      break;

    case "j":
      var tom3 = new Audio("Music/b5.mp3");
      tom3.play();

      break;

    case "k":
      var tom4 = new Audio("Music/b6.mp3");
      tom4.play();

      break;

    case "l":
      var crash = new Audio("Music/b7.mp3");
      crash.play();

      break;
    default:

  }

}



function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function (){
    activeButton.classList.remove("pressed");
  } , 100);

}
