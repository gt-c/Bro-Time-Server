var games = ["roblox", "minecraft", "cuphead", "fortnite", "undertale", "unturned", "vrchat",
	"pubg", "fnaf", "clash of clans", "clash royale", "sims", "terraria", "subnautica", "rocket league",
	"portal", "hat in time", "csgo", "splatoon", "mario", "starbound", "garry's mod", "overwatch",
	"call of duty", "destiny"];

function isURL(str) {
	var pattern = new RegExp("^(https?:\\/\\/)?"+
	"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|"+
	"((\\d{1,3}\\.){3}\\d{1,3}))"+
	"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*"+
	"(\\?[;&a-z\\d%_.~+=-]*)?"+
	"(\\#[-a-z\\d_]*)?$", "i");
	return pattern.test(str);
}

async function awaitReply(message, question, limit = 60000){
	const filter = m => m.author.id === message.author.id;
	await message.reply(question);
	try {
		const collected = await message.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] });
		return collected.first().content;
	} catch (error) {
		return false;
	}
}


module.exports = {
	id: "postgamenight",
	load: () => {},
	execute: async (call) => {
		if (call.message.member.roles.has("380900721828298753")) {
			const game = await awaitReply(call.message, "what is the game you want to host on?", 60000);
			if (game == "cancel") return call.message.channel.send("**Canceled Prompt.**");
			var gamerole;
			if (games.includes(game)) {
				gamerole = call.message.guild.roles.find(r=> r.name.toLowerCase() === game.toLowerCase());
			} else {
				gamerole = game;
			}
			const link = await awaitReply(call.message, "what is the link of your game? If none respond with `none`.", 60000);
			if (link == "cancel") return call.message.channel.send("**Canceled Prompt.**");
			var islink = isURL(link);
			if (islink || link.toLowerCase() == "none") {
				var varlink;
				if (link.toLowerCase() == "none") {
					varlink = "`none`";
				} else {
					varlink = link;
				}
				const other = await awaitReply(call.message, "any other information you would like to add about your hosting?", 60000);
				if (other == "cancel") return call.message.channel.send("**Canceled Prompt.**");
				let annchannel = call.message.guild.channels.find("name", "announcements");
				if (games.includes(game)) {
					gamerole.setMentionable(true);
				}
				annchannel.send(`**Game:** ${gamerole}\n**Link:** ${varlink}\n**Other Information:** \`${other}\`\n*Posted by ${call.message.author}*`);
				if (games.includes(game)) {
					gamerole.setMentionable(false);
				}
			} else {
				call.message.channel.send(`Error: invalid link: \`${link}\``);
			}
		} else {
			call.message.channel.send("Error: missing role: `Game Night Host`");
		}
	}
};
