var five = require("johnny-five");
var board = new five.Board();
var request = require('request');

var stdout = 0;

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);
  // Blink every half second
  // led.blink(1000);
  this.pinMode(0, five.Pin.ANALOG);
  // this.clock.tick(25);
  this.analogRead(0, function(voltage) {
    // console.log(voltage);
    stdout = voltage;
  });

  setInterval(function(){
    // console.log(stdout)
    // var payload = JSON.stringify({"latestValue": Math.floor(Math.random()*1024), "latestTimestamp": Date.now()});
    var payload = JSON.stringify({"latestValue": Math.floor(stdout * 2.5), "latestTimestamp": Date.now()}); // 2.5 is factor for [0-250/251-500/501-750/750++]
    var header = {
      'Content-Type': 'application/json'
    };

    var options = {
      url: 'https://bantu-asap.firebaseio.com/smoke-network/1.json',
      method: 'PATCH',
      headers: header,
      body: payload
    }
    request(options, function(error, response, body) {
      console.log(body);
    // var dataResult = JSON.parse(body);
    // console.log(dataResult);
    });
  }, 2500);

});
