// XSTEM codeFun, js-arduino

// *****************************************************************
// Variables
// *****************************************************************
var five = require("johnny-five");
var myBoard, myLed;

// Connects to your borad
myBoard = new five.Board();

// *****************************************************************
// Do clean up here:
//  - e.g., turn off all leds, stop all animation
//  - this == myBoard
// *****************************************************************
myBoard.on("exit", function() {

  console.log("Bye~~~ See u again...");

});

// *****************************************************************
// Your fun starts here:
//  - When board is "ready", function() { ... } will be executed
// *****************************************************************
myBoard.on("ready", function() {

  // 13 is the pin #
  myLed = new five.Led(13);

  myBoard.repl.inject({
    led: myLed
  });

  
  /*
  myBoard.loop(500, function(){
    
    // Put your code here, it will be executed repeatedly every 500ms

  });
  */

  
  console.log("You can interact with the LED via the variable 'led';\n");
  console.log(" led.on(); // turn on the led\n led.off(); // turn off the led\n led.toggle(); // toggle the led \n");
  console.log("Hit control-C to exit.\n >> ");
  
});


/*
Questions:
  - Code your led to blink.
  - Make sure myLed is off, after you exit your program?
*/