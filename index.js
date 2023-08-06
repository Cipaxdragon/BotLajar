const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const prefix = "!";
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.on("message", (message) => {
	console.log(`Pesan baru dari: ${message.author.tag} di channel: ${message.channel.name}`);
	console.log(`Isi Pesan: ${message.content}`);
  });
  

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, c => {
	
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("ready", () => {
	console.log(`Aktivitas Di Aktifkan`);
	client.user.setActivity("Menghancurkan Dunia");

	//Menghingirim pesan
	const channel = client.channels.cache.get("757979533931446282");
	channel.send("Anjing Logikanya Susah Asu client.on(\"message\", (message) => { gak mau jalan @everyone");
})


// Log in to Discord with your client's token
client.login(token);
