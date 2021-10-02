'use strict';
var five = require('johnny-five'),
    Shield = require("j5-sparkfun-weather-shield")(five),
    device = require('azure-iot-device');


// Factory function from AMQP-specific package
// Other options include HTTP (azure-iot-device-http) and MQTT (azure-iot-device-mqtt)
var clientFromConnectionString = require('azure-iot-device-amqp').clientFromConnectionString;

var location = process.env.DEVICE_LOCATION || 'Espoo';
var connectionString = process.env.IOTHUB_CONN || 'YOUR IOT HUB DEVICE-SPECIFIC CONNECTION STRING FROM THE DEVICE EXPLORER';

// Define the Protocol that will be used to send messages to Azure IoT Hub AMQP over Web Sockets.
var Protocol = require('azure-iot-device-amqp-ws').AmqpWs;

// The client object that communicates with Azure IoT Hubs
var Client = require('azure-iot-device').Client;

// The message object that will define the message format going into Azure IoT Hubs
var Message = require('azure-iot-device').Message;

// The client instance that will manage the connection to your IoT Hub
// The client is created in the context of an Azure IoT device.
var client = Client.fromConnectionString(connectionString, Protocol);


// Extract the Azure IoT Hub device ID from the connection string
var deviceId = device.ConnectionString.parse(connectionString).DeviceId;

console.log("Device ID: " + deviceId);

// Johnny-Five board instance to represent our Arduino board
var board = new five.Board();

// board executes the function and reports that its ready and initialized
board.on("ready", function(){
  console.log("Board is Alive!!!!");

  // Open connection to Azure IOT Hub
  client.open(function(err){
      console.log("Azure IOT connection open..");

      if(err){
        console.error("Could not connect =( : " + err.message); //Connection error
      }else{
        client.on('error', function(err){
          console.error(err.message); //Client error
        });

        // Connection established, Set weather sheild object

        // The SparkFun Weather Shield has two sensors on the I2C bus -
        // a humidity sensor (HTU21D) which can provide both humidity and temperature, and a
        // barometer (MPL3115A2) which can provide both barometric pressure and humidity.
        // Controllers for these are wrapped in a convenient plugin class:
        var weather = new Shield({
              variant: "ARDUINO", // or PHOTON
              freq: 1000,         // Set the callback frequency to 1-second
              elevation: 100      // Go to http://www.WhatIsMyElevation.com to get your current elevation
        });


        weather.on("data", function(){
          console.log("weather data event fired!!!");

          var payload = JSON.stringify({
              deviceId: deviceId,
              location: location,
              celsius: this.celsius,
              fahrenheit: this.fahrenheit,
              relativeHumidity: this.relativeHumidity,
              pressure: this.pressure,
              feet: this.feet,
              meters: this.meters
          });

          // Message based on the payload JSON
          var message = new Message(payload);

          // Debugging
          console.log("Sending message: " + message.getData());

          // Send Message to Azure IOT Hub
          client.sendEvent(message, printResultFor('send'));
        });
      }
  });

});



// Helper function to print result in the console
function printResultFor(op){
  return function printResult(err, res){
      if(err) console.log(op + ' error: ' + err.toString());
  };
}
