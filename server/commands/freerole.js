var joinableroles = ["[F] QOTD", "[F] ANN", "[F] GW"];

module.exports = {
	id: "freerole",
	load: () => {},
	execute: (call) => {
		var role = call.params.readRole(true, (candidate) => { return candidate.name.startsWith("[F] "); });
		var finput = role.name
		if (joinableroles.includes(finput)) {
			if(call.message.member.roles.has(role.id)) {
				call.message.member.removeRole(role).then(() => {
					call.message.channel.send(`Successfully removed the \`${finput}\` free role from you.`);
				}).catch(() => {
					call.message.channel.send(`Unable to remove the \`${finput}\` free role from you!`);
				});
			} else {
				call.message.member.addRole(role).then(() => {
					call.message.channel.send(`Successfully added the \`${finput}\` free role to you.`);
				}).catch(() => {
					call.message.channel.send(`Unable to add the \`${finput}\` free role to you!`);
				});
			}
		} else {
			call.message.channel.send(`\`${call.params.readRaw()} \` is not a valid freerole option`);
		}
	}
};
