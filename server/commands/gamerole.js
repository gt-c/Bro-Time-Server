var games = ["Roblox", "Minecraft", "Cuphead", "Fortnite", "Undertale", "Unturned", "VRChat",
	"PUBG", "FNAF", "Clash of Clans", "Clash Royale", "Sims", "Terraria", "Subnautica", "Rocket League",
	"Portal", "Hat in Time", "CSGO", "Splatoon", "Mario", "Starbound", "Garry's Mod", "Overwatch",
	"Call of Duty", "Destiny"];

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
			var role = call.message.guild.roles.find("name", game);
			if (call.message.member.roles.has(role.id)) {
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
