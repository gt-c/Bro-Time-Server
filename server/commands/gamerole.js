var games = ["roblox", "minecraft", "cuphead", "fortnite", "undertale", "unturned", "vrchat",
	"pubg", "fnaf", "clash of clans", "clash royale", "sims", "terraria", "subnautica", "rocket league",
	"portal", "hat in time", "csgo", "splatoon", "mario", "starbound", "garry's mod", "overwatch",
	"call of duty", "destiny"];

module.exports = {
	id: "gamerole",
	load: () => {},
	execute: (call) => {
		let game = call.params.readRaw(" ").toLowerCase();
		if (game !== null) {
			if (games.includes(game)) {
				if (call.message.member.roles.find("name", game)) {
					call.message.member.removeRole(call.message.guild.roles.find("name", game));
					call.message.channel
						.send(`Since you already had the \`${game}\` game role, it has been removed from you!`);
				} else {
					call.message.member.addRole(call.message.guild.roles.find("name", game));
					call.message.channel.send(`Successfully given you the \`${game}\` game role!`);
				}
			} else {
				call.message.channel
					.send(`${game} is not a valid game option. Make sure it is an actual gamerole from \`.gameroles\`.`);
			}
		} else {
			call.message.channel.send("You didn't ask for any game role. \n Usage: `/gamerole (gamname)`");
		}
	}
};
