var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  sw(buttons[i]);
}

  function sw(element) {
    switch (element.innerHTML) {

      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        element.addEventListener("click", function() {
          tom1.play();
          buttonAnimation(element.innerHTML);
        });
        break;

      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        element.addEventListener("click", function() {
          tom2.play();
          buttonAnimation(buttons[i].innerHTML);
        });
        break;

      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        element.addEventListener("click", function() {
          tom3.play();
          buttonAnimation(element.innerHTML);
        });
        break;

      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        element.addEventListener("click", function() {
          tom4.play();
          buttonAnimation(element.innerHTML);
        });
        break;

      case "j":
        var snare = new Audio('sounds/snare.mp3');
        element.addEventListener("click", function() {
          snare.play();
          buttonAnimation(element.innerHTML);
        });
        break;

      case "k":
        var crash = new Audio('sounds/crash.mp3');
        element.addEventListener("click", function() {
          crash.play();
          buttonAnimation(element.innerHTML);
        });
        break;

      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        element.addEventListener("click", function() {
          kick.play();
          buttonAnimation(element.innerHTML);
        });
        break;

      default:
        console.log(element.innerHTML);
    }
  }


  document.addEventListener("keydown", function(event) {
    swkey(event.key);
    buttonAnimation(event.key);
  });

  function swkey(element) {
    switch (element) {
      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      default:
        console.log(element);
    }
  }

function buttonAnimation(currentKey)
{
  console.log(currentKey);
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed");},100);
};
