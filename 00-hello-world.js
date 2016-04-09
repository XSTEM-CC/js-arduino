// XSTEM codeFun, js-arduino

var j5 = require("johnny-five");
var bot = new j5.Board();

bot.on("ready", function() {
  var led = new j5.Led(13);
  led.on();
});
