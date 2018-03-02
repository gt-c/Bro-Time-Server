var games = ["<@&405163385148276736>", "<@&405163429188337665>", "<@&405163430056558592>", "<@&405163474335956994>", 
	"<@&405163485463314432>", "<@&405163534285275146>", "<@&405163718226346007>", "<@&405163735989354496>",
	"<@&405163837092790272>", "<@&405163788975996928>", "<@&405163655840268288>", "<@&405163938834153493>", 
	"<@&405163996120088599>", "<@&405164035034578949>", "<@&405164088495439873>", "<@&405164127401803800>", 
	"<@&405164166370820106>", "<@&405164202811064321>", "<@&405164240656138240>", "<@&405164283828109323>", 
	"<@&405164323284058133>", "<@&405166298985922600>", "<@&410216775733739520>", "<@&410217263980085248>",
	"<@&414507850136682498>"];

module.exports = {
	id: "gamerole",
	load: () => {},
	execute: (call) => {
		var prms = call.params;
		var role = prms.readRole();
		var rawinput = call.message.content.substr(10);
		if (games.includes(role)) {
			if (rawinput.toLowerCase() == "clash of clans") {
				// temporary fix for the readRole error taking action on clash royale when the user specifies clash of clans
				role = call.message.guild.roles.find("name", "Clash of Clans");
			}
			if (call.message.member.roles.has(role)) {
				call.message.member.removeRole(role).then(() => {
					call.message.reply(`since you already had the \`${rawinput}\` game role, it has been removed from you!`);
				}).catch(() => {
					call.message.reply(`unable to remove the \`${rawinput}\` game role!`);
				});
			} else {
				call.message.member.addRole(role).then(() => {
					call.message.reply(`successfully given you the \`${rawinput}\` game role!`);
				}).catch(() => {
					call.message.reply(`unable to give you the \`${rawinput}\` game role!`);
				});
			}
		} else {
			call.message.reply(`\`${rawinput} \` is not a valid game option.`);
		}
	}
};
