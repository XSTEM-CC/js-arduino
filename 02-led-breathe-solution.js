#!/usr/bin/env node

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
var five = require("johnny-five");
// Connects to your borad
var myBoard = new five.Board();

// *****************************************************************
// Variables
// *****************************************************************
var myLed;


// *****************************************************************
// Your fun starts here:
//  - When board is "ready", function() { ... } will be executed
// *****************************************************************
myBoard.on("ready", function() {

  // Make sure a PWM pin is used
  // Try 3, 5, 6, 9, 10, 11
  myLed = new five.Led(9);

  this.repl.inject({
    led: myLed
  });

  console.log("You can interact with the RGB LED via the variable 'led' e.g. led.on();\n Hit control-C to exit.\n >> ");

  this.loop(5, function() {

    // Write 3 piece of code, functioning as:
    // 1. Slowly lighten the led, use myLed.brightness(<0 ~ 255>);
    // 2. Slowly dim the led, use myLed.brightness(<255 ~ 0>);
    // 3. Connects 2 & 3, so the led breathing

    myLed.brightness(brightness);
    console.log("brightness:" + brightness);

    var brightness = 0;
    var isFadeIn = true;

    if (brightness == 255) {
      isFadeIn = false;
    }

    if (brightness == 0) {
      isFadeIn = true;
    }

    if (isFadeIn) {
      
      brightness++;

    } else {
      
      brightness--;

    }

  });


});

// *****************************************************************
// Do clean up here:
//  - turn off all leds, stop all animation
// *****************************************************************
myBoard.on("exit", function() {

  myLed.stop();
  myLed.off();

  console.log("myBoard exit");
});