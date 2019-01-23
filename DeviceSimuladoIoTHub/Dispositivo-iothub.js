
'use strict';


// Using the Azure CLI:
// az iot hub device-identity show-connection-string --hub-name {YourIoTHubName} --device-id MyNodeDevice --output table
var connectionString = '';
// Using the Node.js Device SDK for IoT Hub:
//   https://github.com/Azure/azure-iot-sdk-node
// The sample connects to a device-specific MQTT endpoint on your IoT Hub.
var Mqtt = require('azure-iot-device-mqtt').Mqtt;
var DeviceClient = require('azure-iot-device').Client
var Message = require('azure-iot-device').Message;
console.log(connectionString);
var client = DeviceClient.fromConnectionString(connectionString, Mqtt);

// envio a cada 1 segundo
setInterval(function(){

  var message = new Message(JSON.stringify({
    temperature: 20 + (Math.random() * 15),
    humidity: 60 + (Math.random() * 20)
  }));


  console.log('Enviando Mensagem: ' + message.getData());

  // Send the message.
  client.sendEvent(message, function (err) {
    if (err) {
      console.error('Erro: ' + err.toString());
    } else {
      console.log('Mensagem Enviada');
    }
  });
}, 1000);
