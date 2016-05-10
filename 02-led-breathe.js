// XSTEM codeFun, js-arduino
// 
// ██████╗ ██████╗ ███████╗ █████╗ ████████╗██╗  ██╗██╗███╗   ██╗ ██████╗     ██╗     ███████╗██████╗ 
// ██╔══██╗██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██║  ██║██║████╗  ██║██╔════╝     ██║     ██╔════╝██╔══██╗
// ██████╔╝██████╔╝█████╗  ███████║   ██║   ███████║██║██╔██╗ ██║██║  ███╗    ██║     █████╗  ██║  ██║
// ██╔══██╗██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══██║██║██║╚██╗██║██║   ██║    ██║     ██╔══╝  ██║  ██║
// ██████╔╝██║  ██║███████╗██║  ██║   ██║   ██║  ██║██║██║ ╚████║╚██████╔╝    ███████╗███████╗██████╔╝
// ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝     ╚══════╝╚══════╝╚═════╝ 

// *****************************************************************
// requires
// *****************************************************************
var j5 = require("johnny-five");

// *****************************************************************
// Variables
// *****************************************************************
var bot, myLed;

// Connects to your borad
bot = new j5.Board();

// *****************************************************************
// Your fun starts here:
//  - When board is "ready", function() { ... } will be executed
// *****************************************************************
bot.on("ready", function() {

  // Make sure a PWM pin is used
  // Try 3, 5, 6, 9, 10, 11
  myLed = new j5.Led(9);

  this.repl.inject({
    led: myLed
  });

  console.log("You can interact with the RGB LED via the variable 'led' e.g. led.on();\n Hit control-C to exit.\n >> ");

  this.loop(10, function() {

    // Write 3 piece of code, functioning as:
    // 1. Slowly lightening the led, use myLed.brightness(<0 ~ 255>);
    // 2. Slowly diming the led, use myLed.brightness(<255 ~ 0>);
    // 3. Connects 2 & 3, so the led looks like breathing


  });


});

// *****************************************************************
// Do clean up here:
//  - turn off all leds, stop all animation
// *****************************************************************
bot.on("exit", function() {

  myLed.stop();
  myLed.off();

  console.log("myBoard exit");
});