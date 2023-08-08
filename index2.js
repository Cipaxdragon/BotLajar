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
		status: 'online',
		activities: [
			{
				name: 'Spotify',
				type: ActivityType.Listening
			}
		]
	};

	client.user.setPresence(presenceData);
	const codeString = ` \`\`\`
	const { Client, GatewayIntentBits } = require('discord.js');
	const { token } = require('./config.json');
	const prefix = "!";
	
	// Import modul PresenceData dan ActivityType
	const { PresenceData, ActivityType } = require('discord.js');
	
	const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
	
	client.on("message", (message) => {
		console.log(\`Pesan baru dari: \${message.author.tag} di channel: \${message.channel.name}\`);
		console.log(\`Isi Pesan: \${message.content}\`);
	});
	
	client.once("ready", () => {
		console.log(\`Ready! Logged in as \${client.user.tag}\`);
	
		// Definisikan PresenceData dan set aktivitas kustom
		const presenceData = {
			status: 'online',
			activities: [
				{
					name: 'Spotify',
					type: ActivityType.Listening
				}
			]
		};
	
		client.user.setPresence(presenceData);
	
		const channel = client.channels.cache.get("757979533931446282");
		channel.send("Halo Saya Kahlil, Telaso mu Semua");
	});
	
	client.login(token); \`\`\`
	`;


	const channel = client.channels.cache.get("847167613842489405");
	channel.send(codeString);
});

client.login(token);
