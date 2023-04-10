$(document).ready(function() {
    // get sound from the HTML document
    var sound = $('#sound').get(0);
    
    // start playback when user interacts with the page
    $(document).on("click touchstart", function() {
        sound.play();
    });
    
    // rewind audio when it finishes playing
    sound.addEventListener("ended", function() {
        sound.currentTime = 0;
    });
});