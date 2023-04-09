/* Function that simulates a typewriteer effect bu typing out one characcter at a time 
arguments: el -> DOM element that will display the text, modArr -> array of strings
that will be typed out sequentially, period -> interval of time in msec between the typing of 
each character 
*/
var typeWrite = function(el, modArr, period) {
    this.modArr = modArr;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
// define a prototype method that does the typing 
typeWrite.prototype.tick = function() {
    // Determine which string from the string array to type next 
    var i = this.loopNum % this.modArr.length;
    var fullTxt = this.modArr[i]; // Stores the full string being typed out 
    // Check if function is in delete mode (in the middle of deleting characters)
    // Subtract characters if func is in deleting mode, add characters otherwise
    if (this.isDeleting) { 
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    // Display the updated text in the DOM element
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    // Set a random amount of time to wait before adding a new character 
    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }
    // Use the setTimeout function to call the tick prototyoe method 
    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    // get string elements to be typed by the function typeWrite from the HTML focument 
    var elements = document.getElementsByClassName('typewrite');
    // Iterate through elements displaying them using typeWrite()
    for (var i=0; i<elements.length; i++) {
        var modArr = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (modArr) {
          new typeWrite(elements[i], JSON.parse(modArr), period);
        }
    }
    // Inject CSS to display flashing cursor effect
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
