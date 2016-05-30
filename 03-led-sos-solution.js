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
// Do clean up here:
//  - e.g., turn off all leds, stop all animation
// *****************************************************************
bot.on("exit", function() {

  console.log("Bye~~~ See u again...");

});

// *****************************************************************
// Your fun starts here:
//  - When board is "ready", function() { ... } will be executed
// *****************************************************************
bot.on("ready", function() {

  console.log("Hit control-C to exit.\n >> ");


  // 13 is the pin #
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

    if (count == 1
      || count == 3
      || count == 5

      || count == 8
      || count == 9
      || count == 10

      || count == 12
      || count == 13
      || count == 14

      || count == 16
      || count == 17
      || count == 18

      || count == 21
      || count == 23
      || count == 25){
      myLed.on();
      console.log("on");
    }
    else {
      myLed.off();
      console.log("off");
    }

    count = count + 1;

    if (count >= 27 && count < 30) {
      myLed.off();
      return;
    }
    else if (count == 30){
      count = 1;
    }


  });


});


/*
Questions:
  - Code your led to blink.
  - Make sure myLed is off, after you exit your program?
*/