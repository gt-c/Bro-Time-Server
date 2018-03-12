module.exports = {
	id: "mt",
	load: () => {},
	execute: (call) => {
		let role = call.params.readRole();
		if(call.message.member.roles
		.some(r=>["330919872630358026", "402175094312665098", "395265037356236810", "387768886096953355"]
			.includes(r.id)) ) {
			if (!role) return call.message.reply("Invalid role!");
			role.setMentionable(!role.mentionable);
		} else {
			call.message.reply("You do not have permission to use this command!");
		}
		call.message.delete();
	}
};
