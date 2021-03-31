
/* PREMIèRE PAGE jS pause et lecture vidéo en background */
    var video = document.getElementById("video");
    var boutonPauseLire = document.getElementById("bouton");
    
    function PauseLire() {
      if (video.paused) {
        video.play();
        boutonPauseLire.innerHTML = "Pause";
      } else {
        video.pause();
        boutonPauseLire.innerHTML = "Jouer";
      }
    }

/* PAGE 1 jS Slide*/


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myslide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var myIndex = 0;
      carousel();
      
      function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 2500);    
      }
