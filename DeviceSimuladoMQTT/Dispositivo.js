//npm install mqtt --save

var mqtt    = require('mqtt');
var client  = mqtt.connect("mqtt://192.168.1.101",
						  {clientId:"DispositivoJM", 
						  will: {
							topic: 'testamento',
							payload: 'Dispositivo JM morreu',
							qos: 0
						   }}
						  );

client.on("connect",function(){	
console.log("Conexão: "+ client.connected);
})
client.on("error",function(error){
console.log("Erro:" + error);
process.exit(1)});

setInterval(() => {
	client.publish('jm', 'Olá, estou vivo e operando');
}, 10000);
