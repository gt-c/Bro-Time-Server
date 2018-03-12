module.exports = {
	id: "mt",
	load: () => {},
	execute: (call) => {
		let role = call.params.readRole();
		const prefixes = ["", "-g- ", "[f] ", "[c] "];
		if(call.message.member.roles
			.some(r=>["330919872630358026", "402175094312665098", "395265037356236810", "387768886096953355"]
				.includes(r.id)) ) {
			if (!role) return message.channel.reply("Invalid role!");	
			role.setMentionable(!role.mentionable);
		} else {
			call.message.channel.reply(`You do not have permission to use this command!`);
		}
		call.message.delete();
	}
};
