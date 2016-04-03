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
  myLed = new five.Led(9);

  myLed.on();

  // Code your led to blink
  /*
  myBoard.loop(500, function(){
    
    // Make your led blink.
    // Following code will be executed every 500ms

  });
  */

  myBoard.repl.inject({
    led: myLed
  });
  
  console.log("You can interact with the LED via the variable 'led';\n");
  console.log(" led.on(); \n led.off(); \n led.toggle(); \n");
  console.log("Hit control-C to exit.\n >> ");
  
});


/*
Questions:
  - Make sure myLed is off, after you exit your program?
  - Code your led to blink.

*/