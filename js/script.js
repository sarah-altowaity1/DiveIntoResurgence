$(document).ready(function() {
    // use jQuery and the ripple.js library to add ripple effects to the page
    $('.container').ripples({
      // set the parameters of the ripple
      resolution: 256,
      dropRadius: 20,
      perturbance: 0.03
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
      // show the text after 2 seconds
    setTimeout(function() {
      $('#text').fadeIn();
    }, 2000);
    
    // hide the text after 5 seconds
    setTimeout(function() {
      $('#text').fadeOut();
    }, 2000);
  });