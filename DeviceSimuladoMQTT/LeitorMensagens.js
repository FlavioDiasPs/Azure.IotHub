var mqtt    = require('mqtt');
const fs = require('fs');
var client  = mqtt.connect("mqtt://192.168.1.101",{clientId:"mqttjsJM"});

var topic_list=["jm","testamento"];
client.subscribe(topic_list,{qos:1});

client.on('message',function(topic, message, packet){
	console.log("Mensagem Recebida: "+ message);
	console.log("Tópico "+ topic);
	fs.appendFileSync('message.txt', topic + ':' + message + "\n");
});
client.on("connect",function(){	
console.log("Conexão: "+ client.connected);

})

client.on("error",function(error){
console.log("Erro:" + error);
process.exit(1)});


