$(document).ready(function() {
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