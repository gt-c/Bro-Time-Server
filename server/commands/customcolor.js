async function awaitReply(message, question, limit = 60000) {
	const filter = m => m.author.id === message.author.id;
	await message.reply(question);
	try {
		const collected = await message.channel.awaitMessages(filter, {
			max: 1,
			time: limit,
			errors: ["time"]
		});
		return collected.first().content;
	} catch (error) {
		return false;
	}
}

async function makerole(message, digit) {
	var cancel = "\n Say `cancel` to cancel prompt.";
	const name = await awaitReply(message, "Please specify the name of your role." + cancel, 60000);
	if (name == "cancel") return message.channel.send("**Cancelled Prompt.**");
	if (name.length > 99 - message.author.id.length) {
		message.reply(`the length of the role is too long. Max length is ${99-message.author.id.length} characters`);
	} else {
		const color = await awaitReply(message, "please specify the hex color of your role. Example `#ff0000` or `ff0000`" + cancel, 60000);
		if (color == "cancel") return message.channel.send("**Cancelled Prompt.**");
		var c = color;
		var ishex = /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(`${color}`);
		var ishextag = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(`${color}`);
		if (ishex == true || ishextag == true) {
			if (ishex) {
				c = "#" + c;
			}
			message.guild.createRole({
				name: `${digit}${message.author.id} ${name}`,
				color: c,
			}).then(() => {
				let rolename = `${digit}${message.author.id} ${name}`;
				let role = message.guild.roles.find(r => r.name.toLowerCase() === rolename.toLowerCase());
				let goldpos = message.guild.roles.find("name", "Gold").position;
				message.guild.setRolePosition(role, goldpos + 1, false);
				message.member.removeRole(message.guild.roles.find("name", `${digit}`));
				message.member.addRole(role);
				message.reply(`successfully created the role! To remove the role say \`/customcolor remove\` then \`${digit}\``);
			}).catch(() => {
				message.reply("something went wrong and I could not make the role! ");
			});
		} else {
			message.reply("invalid hex code. Hex code example `#ff0000` or `ff0000`.");
		}
	}
}

async function deleterole(message) {
	var cancel = "\n Say `cancel` to cancel prompt.";
	const digitchoice = await awaitReply(message, "which color role do you want to remove (first digit of role name)?" + cancel, 60000);
	if (digitchoice == "cancel") return message.channel.send("**Canceled Prompt.**");
	if (!isNaN(digitchoice)) {
		if (digitchoice <= 5 && digitchoice >= 1) {
			const name = await awaitReply(message, "what is the custom role name (only the custom part)?" + cancel, 60000);
			if (name == "cancel") return message.channel.send("**Canceled Prompt.**");
			let rolename = `${digitchoice}${message.author.id} ${name}`;
			if (message.guild.roles.find("name", rolename)) {
				const approval = await awaitReply(message, "are you sure you want to delete this custom role?" + cancel, 60000);
				if (approval == "cancel") return message.channel.send("**Canceled Prompt.**");
				if (approval.toLowerCase() == "yes") {
					let role = message.guild.roles.find(r => r.name.toLowerCase() === rolename.toLowerCase());
					role.delete();
					let role1 = message.guild.roles.find("name", `${digitchoice}`);
					message.member.addRole(role1);
					message.reply(`successfully deleted the custom color role! \`${rolename}\``);
				} else {
					message.reply("assuming you didn't mean to say yes, I cancelled the prompt.");
				}
			} else {
				message.reply("I could not find that role.");
			}
		} else {
			message.reply(`\`${digitchoice} \` must be a number between 1 - 5.`);
		}
	} else {
		message.reply(`\`${digitchoice} \` is not a number.`);
	}
}

module.exports = {
	id: "customcolor",
	load: () => {},
	execute: async (call) => {
		var input1 = call.params.readRaw().toLowerCase();
		if (input1 == "remove" || input1 == "rem" || input1 == "delete" || input1 == "del") {
			deleterole(call.message);
		} else if (input1 == "create" || input1 == "add" || input1 == "make") {
			if (call.message.member.roles.find("name", "1")) {
				makerole(call.message, 1);
			} else if (call.message.member.roles.find("name", "2")) {
				makerole(call.message, 2);
			} else if (call.message.member.roles.find("name", "3")) {
				makerole(call.message, 3);
			} else if (call.message.member.roles.find("name", "4")) {
				makerole(call.message, 4);
			} else if (call.message.member.roles.find("name", "5")) {
				makerole(call.message, 5);
			} else {
				call.message.channel.send("You do not have any remaining custom roles.");
			}
		} else {
			const option = await awaitReply(call.message, "would you like to create a custom color role, or delete one?", 60000);
			var choice = option.toLowerCase();
			if (choice == "cancel") return call.message.channel.send("**Canceled Prompt.**");
			if (choice == "create" || choice == "add" || choice == "make") {
				if (call.message.member.roles.find("name", "1")) {
					makerole(call.message, 1);
				} else if (call.message.member.roles.find("name", "2")) {
					makerole(call.message, 2);
				} else if (call.message.member.roles.find("name", "3")) {
					makerole(call.message, 3);
				} else if (call.message.member.roles.find("name", "4")) {
					makerole(call.message, 4);
				} else if (call.message.member.roles.find("name", "5")) {
					makerole(call.message, 5);
				} else {
					call.message.channel.send("You do not have any remaining custom roles.");
				}
			} else if (choice == "remove" || choice == "rem" || choice == "delete" || choice == "del") {
				deleterole(call.message);
			} else {
				call.message.reply("invalid choice. Please rerun the command and choose either `create` or `delete`.");
			}
		}
	}
};
