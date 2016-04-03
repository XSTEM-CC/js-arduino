// *****************************************************************
// requires
// *****************************************************************
var five = require("johnny-five");

// *****************************************************************
// Variables
// *****************************************************************
var myBoard, myLed;

// Connects to your borad
myBoard = new five.Board();

// *****************************************************************
// Your fun starts here:
//  - When board is "ready", function() { ... } will be executed
// *****************************************************************
myBoard.on("ready", function() {

  // 13 is the pin #
  myLed = new five.Led(9);

  myLed.strobe( 1000 );

  // make myLED available as "led" in REPL
  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)

  this.repl.inject({
    led: myLed
  });
  
  console.log("You can interact with the RGB LED via the variable 'led' e.g. led.on();\n");
  console.log("led.on(); / led.off(); / led.toggle();");
  console.log("led.strobe(<#ms>); / led.blink(<#ms>); / led.stop();");
  console.log("led.brightness(<0-255>);");
  console.log("Hit control-C to exit.\n >> ");
  
});
