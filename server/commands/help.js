const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
	id: "help",
	load: () => {},
	execute: (call) => {
		var pfx = call.message.data.prefix;
		var param1 = call.params.readRaw();
		var commandDescs = [];
		fs.readFile(__dirname + "/../info/commandinfo.md", (err, data) => {
			if(err) {
				throw err;
			} else {
				var commandDesc = data.toString("utf8").split("\n");
			}
		});
		var helpembed;
		if (param1 == null || param1 == undefined || param1 == "") {
			helpembed = new Discord.RichEmbed()
				.setTitle("Commands")
				.setDescription("Hey! I'm Bro Bot. My developers stride to keep Bro Time as simple (and fun) as possible.")
				.setColor(0x00AE86)
				.setFooter(`Run by ${call.message.author.username}`, call.message.author.avatarURL)
				.addField("Information Commands", `\`${pfx}help [command]\`\n\`${pfx}ping\``)
				.addField("Role Commands", `\`${pfx}freerole (freerole)\`\n\`${pfx}gamerole (game)\`\n\`${pfx}namecolor (color)\``)
				.addField("Event Posting Commands", `\`${pfx}postqotd (qotd)\`\n\`${pfx}postgamenight\``)
				.addField("Utility Commands", `\`${pfx}mt (role)\``)
				.addField("Donator Commands", `\`${pfx}customcolor\``);
		} else if (param1.toLowerCase() == "help") {
			helpembed = new Discord.RichEmbed()
				.setTitle(`${pfx}help`)
				.setDescription(`Purpose: ${commandDescs[0]}\nUsage: \`${pfx}help [command]\`\nRequires: \`Nothing\``)
				.setColor(0x00AE86);
		} else if (param1.toLowerCase() == "ping") {
			helpembed = new Discord.RichEmbed()
				.setTitle(`${pfx}ping`)
				.setDescription(`Purpose: ${commandDescs[1]}\nUsage: \`${pfx}ping\`\nRequires: \`Nothing\``)
				.setColor(0x00AE86);
		} else if (param1.toLowerCase() == "freerole") {
			helpembed = new Discord.RichEmbed()
				.setTitle(`${pfx}freerole`)
				.setDescription(`Purpose: ${commandDescs[2]}nUsage: \`${pfx}freerole ANN/GW/QOTD\`\nRequires: \`Nothing\``)
				.setColor(0x00AE86);
		} else if (param1.toLowerCase() == "gamerole") {
			helpembed = new Discord.RichEmbed()
				.setTitle(`${pfx}gamerole`)
				.setDescription(`Purpose: ${commandDescs[3]}\nUsage: \`${pfx}gamerole (gamerole)\`\nRequires: \`Nothing\``)
				.setColor(0x00AE86);
		} else if (param1.toLowerCase() == "namecolor") {
			helpembed = new Discord.RichEmbed()
				.setTitle(`${pfx}namecolor`)
				.setDescription(`Purpose: ${commandDescs[4]}\nUsage: \`${pfx}namecolor (color)\`\nRequires: \`Nothing/Bro Time Plus/Bro Time Premium/Bro Time Deluxe\``)
				.setColor(0x00AE86);
		} else if (param1.toLowerCase() == "postqotd") {
			helpembed = new Discord.RichEmbed()
				.setTitle(`${pfx}postqotd`)
				.setDescription(`Purpose: ${commandDescs[5]}\nUsage: \`${pfx}postqotd (qotd)\`\nRequires: \`QOTD Host\``)
				.setColor(0x00AE86);
		} else if (param1.toLowerCase() == "postgamenight") {
			helpembed = new Discord.RichEmbed()
				.setTitle(`${pfx}postgamenight`)
				.setDescription(`Purpose: ${commandDescs[6]}\nUsage: \`${pfx}postgamenight...\`\nRequires: \`Game Night Host\``)
				.setColor(0x00AE86);
		} else if (param1.toLowerCase() == "customcolor") {
			helpembed = new Discord.RichEmbed()
				.setTitle(`${pfx}customcolor`)
				.setDescription(`Purpose: ${commandDescs[7]}\nUsage: \`${pfx}customcolor...\`\nRequires: \`Bro Time Plus/Bro Time Premium/Bro Time Deluxe\``)
				.setColor(0x00AE86);
		} else if (param1.toLowerCase() == "mt") {
			helpembed = new Discord.RichEmbed()
				.setTitle(`${pfx}mt`)
				.setDescription(`Purpose: ${commandDescs[8]}\nUsage: \`${pfx}mt (role)\`\nRequires: \`Moderator Permissions\``)
				.setColor(0x00AE86);
		} else if (param1.toLowerCase() == "info") {
			helpembed = new Discord.RichEmbed()
				.setTitle(`${pfx}info`)
				.setDescription(`Purpose: ${commandDescs[9]}\nUsage: \`${pfx}info (topic)\`\nRequires: \`Nothing\``)
				.setColor(0x00AE86);
		} else {
			call.message.reply(`\`${param1} \` is not a valid command. Please try \`${pfx}help (command)\` or just \`${pfx}help\``);
		}
		call.message.channel.send({embed: helpembed});
	}
};
