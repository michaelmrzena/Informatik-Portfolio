var cursor = $(".cursor"),
  follower = $(".cursor-follower");

var posX = 0,
  posY = 0;

var mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 12,
        top: posY - 12
      }
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

$(document).on("mousemove", function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$(".activate").on("mouseenter", function() {
  cursor.addClass("active");
  follower.addClass("active");
});
$(".activate").on("mouseleave", function() {
  cursor.removeClass("active");
  follower.removeClass("active");
});

/* Für Image Hover Effek im Menü
function setNewImage1() {
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(https://i.ibb.co/Y2mx5Vb/6-ON.png)';
}

function setNewImage2() {
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(https://i.ibb.co/9NVvH1k/2-On.png)';
}

function setNewImage3() {
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(https://i.ibb.co/tP37c0t/1-On.png)';
}

function setNewImage4() {
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(https://i.ibb.co/r3FgkZm/4-ON.png)';
}

function reset() {
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(https://i.ibb.co/Qb3KJqw/5-ON.png)';
}
*/

document.addEventListener('click', event => {
     cursor.addClass("active");
    follower.addClass("active");

    setTimeout(() => {
                cursor.removeClass("active");
    follower.removeClass("active");
            }, 325)
});



//Zeit Delay 1 für Grosser Titel
setTimeout(appearBig, 200)

function appearBig() {
  var element = document.getElementById("appearbig");
  element.classList.add("fadeIn");
}
//Zeit Delay 2 für Kleinen Titel
setTimeout(appearSmall, 500)

function appearSmall() {
  var element = document.getElementById("appearsmall");
  element.classList.add("fadeIn");
}
//Zeit Delay 3 für Button
setTimeout(appearBtn, 900)

function appearBtn() {
  var element = document.getElementById("appearbtn");
  element.classList.add("fadeIn");
}

setTimeout(appearContent, 1200)

function appearContent() {
  var element = document.getElementsByClassName("appearcontent");
  element.classList.add("fadeIn");
  alert("Hello! I am an alert box!!");
}


function goBack(){
  window.open("https://www.google.com");
}
