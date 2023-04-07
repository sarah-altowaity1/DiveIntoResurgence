// $(document).ready(function() {
//     $('.scene-1').ripples({
//         resolution: 256,
//         dropRadius: 20,
//         perturbance: 0.03
//     });
// });

// window.onload=function(){
//     document.getElementById("sound").play();
// }

$(document).ready(function() {
    $('.scene-1').ripples({
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.03
    });
    $('#sound').get(0).play();
});