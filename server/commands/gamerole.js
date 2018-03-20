var games = ["roblox", "minecraft", "cuphead", "fortnite", "undertale", "unturned", "vrchat",
	"pubg", "fnaf", "clash of clans", "clash royale", "sims", "terraria", "subnautica", "rocket league",
	"portal", "hat in time", "csgo", "splatoon", "mario", "starbound", "garry's mod", "overwatch",
	"call of duty", "destiny"];

module.exports = {
	id: "gamerole",
	load: () => {},
	execute: (call) => {
		var rawinput = call.message.content.substr(10);
		if (rawinput == undefined) return call.message.reply("You must specify a gamerole!");
		var game = games.filter(g => g.toLowerCase().startsWith(rawinput.toLowerCase()));
		if (game.length != games.length && game.length != 0) {
			game = game[0];
			var role = call.message.guild.roles.find("name", game);
			game = role.name.toLowerCase();
			if(call.message.member.roles.has(role.id)) {
				call.message.member.removeRole(role).then(() => {
					call.message.channel.send(`Since you already had the \`${game}\` game role, it has been removed from you!`);
				}).catch(() => {
					call.message.channel.send(`Unable to remove the \`${game}\` game role!`);
				});
			} else {
				call.message.member.addRole(role).then(() => {
					call.message.channel.send(`Successfully given you the \`${game}\` game role!`);
				}).catch(() => {
					call.message.channel.send(`Unable to give you the \`${game}\` game role!`);
				});
			}
		} else {
			call.message.channel.send(`\`${rawinput} \` is not a valid game option.`);
		}
	}
};
