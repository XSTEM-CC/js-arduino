#!/usr/bin/env node

// XSTEM codeFun, js-arduino

// ███████╗    ██████╗    ███████╗
// ██╔════╝   ██╔═══██╗   ██╔════╝
// ███████╗   ██║   ██║   ███████╗
// ╚════██║   ██║   ██║   ╚════██║
// ███████║██╗╚██████╔╝██╗███████║
// ╚══════╝╚═╝ ╚═════╝ ╚═╝╚══════╝

// *****************************************************************
// Variables
// *****************************************************************
var j5 = require("johnny-five");
var bot, myLed;

// Connects to your robot brain
bot = new j5.Board({
  debug: false
});

// *****************************************************************
// Your fun starts here:
//  - When board is "ready", function() { ... } will be executed
// *****************************************************************
bot.on("ready", function() {

  console.log("Hit control-C to exit.\n >> ");

  // 9 is the pin #
  myLed = new j5.Led(9);

  myLed.off();

  bot.repl.inject({
    led: myLed
  });

  var count = 1;

  bot.loop(100, function() {

    // 1. Write code, functioning as:
    //    "S", on (100ms), off (100ms), on, off, on, off
    // 2. Write code, functioning as:
    //    "O", on (300ms), off (100ms), on, off, on, off
    // 3. Write code, functioning as:
    //    "S", on (100ms), off (100ms), on, off, on, off
    //    +off (100ms)
    //    "O", on (300ms), off (100ms), on, off, on, off
    //    +off (100ms)
    //    "S", on (100ms), off (100ms), on, off, on, off

  });

});

// *****************************************************************
// Do clean up here:
//  - e.g., turn off all leds, stop all animation
// *****************************************************************
bot.on("exit", function() {

  myLed.off();
  console.log("Bye~~~ See u again...");

});
