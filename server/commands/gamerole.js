var games = ["roblox", "minecraft", "cuphead", "fortnite", "undertale", "unturned", "vrchat",
	"pubg", "fnaf", "clash of clans", "clash royale", "sims", "terraria", "subnautica", "rocket league",
	"portal", "hat in time", "csgo", "splatoon", "mario", "starbound", "garry's mod", "overwatch",
	"call of duty", "destiny"];

module.exports = {
	id: "gamerole",
	load: () => {},
	execute: (call) => {
		var rawinput = call.params.readRaw();
		if (rawinput === "") return call.message.reply("You must specify a gamerole!");
		var game = games.find(function(g) {
			return g.toLowerCase().startsWith(rawinput.toLowerCase());
		});
		if (game !== undefined) {
			if (call.message.member.roles.has(game.id)) {
				call.message.member.removeRole(game).then(() => {
					call.message.channel.send(`Since you already had the \`${game}\` game role, it has been removed from you!`);
				}).catch(() => {
					call.message.channel.send(`Unable to remove the \`${game}\` game role!`);
				});
			} else {
				call.message.member.addRole(game).then(() => {
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
