const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const prefix = "!";

const { PresenceData, ActivityType } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.on("message", (message) => {
	console.log(`Pesan baru dari: ${message.author.tag} di channel: ${message.channel.name}`);
	console.log(`Isi Pesan: ${message.content}`);

	// Cek apakah pesan berasal dari pengguna dan memiliki prefix
	if (message.author.bot || !message.content.startsWith(prefix)) {
		return;
	}

	// Pisahkan argumen dari pesan
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	// Cek jika perintah adalah "ping"
	if (command === "ping") {
		message.reply("pong");
	}
});

client.once("ready", () => {
	console.log(`Ready! Logged in as ${client.user.tag}`);

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
