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
  });