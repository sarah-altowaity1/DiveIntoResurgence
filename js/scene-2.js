$(document).ready(function() {
    $('.scene-2').ripples({
      resolution: 256,
      dropRadius: 20,
      perturbance: 0.07
    });

    var sound = $('#sound').get(0);

    // Start playback when user interacts with the page
    $(document).on("click touchstart", function() {
      sound.play();
  });
  
  // Rewind audio when it finishes playing
  sound.addEventListener("ended", function() {
      sound.currentTime = 0;
  });


  window.onload = function ()
  {
    var kid = document.getElementById("kid")
    var rect = kid.getBoundingClientRect();
    var newLeft = rect.left;
    var newRight = rect.right;

    kid.style.position = 'relative';

    setInterval(function(){
      newLeft = newLeft + 0.2;
      newRight = newRight + 0.2;

      if(newRight >= screen.width) {
        newLeft = 0;
        newRight = rect.width;
      }

      kid.style.left = newLeft + 'px';
      kid.style.right = newRight + 'px';
      
    },1);
  }
  });