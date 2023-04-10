$(document).ready(function() {
    /* use jQuery and the ripple.js library to add ripple animation upon 
    user clicking and dragging 
    */
    $('.scene-5').ripples({
      // set the parameters for the ripple 
      resolution: 256,
      dropRadius: 20,
      perturbance: 0.07
    });
  });