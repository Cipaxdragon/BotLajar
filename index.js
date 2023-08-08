const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const prefix = "!";

// Import modul PresenceData dan ActivityType
const { PresenceData, ActivityType } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.on("message", (message) => {
	console.log(`Pesan baru dari: ${message.author.tag} di channel: ${message.channel.name}`);
	console.log(`Isi Pesan: ${message.content}`);
});

client.once("ready", () => {
	console.log(`Ready! Logged in as ${client.user.tag}`);

	// Definisikan PresenceData dan set aktivitas kustom
	const presenceData = {
		status: 'dnd',
		activities: [
			{
				name: 'Spotify',
				type: ActivityType.Listening
			}
		]
	};

	client.user.setPresence(presenceData);

	
	const channel = client.channels.cache.get("757979533931446282");

channel.send("https://cdn.discordapp.com/attachments/1137451858588344451/1138490610999906464/image.png");
	});
client.login(token);
