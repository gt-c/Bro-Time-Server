async function awaitReply(message, question, limit = 60000){
    const filter = m => m.author.id === message.author.id;
    await message.channel.send(question);
    try {
      const collected = await message.channel.awaitMessages(filter, { max: 1, time: limit, errors: ['time'] });
      return collected.first().content;
    } catch (error) {
      console.log(error)
      return false;
    }
  }

async function makerole(message, digit) {
	const name = await awaitReply(message, "Please specify the name of your role.", 60000);
	if (name == "cancel") return message.channel.send("**Cancelled Prompt.**");
	if (name.length > 62) {
		message.channel.send("Length of role is too long. Max length is 62 characters")
	} else {
		const color = await awaitReply(message, "Please specify the hex color of your role.", 60000);
		if (color == "cancel") return message.channel.send("**Cancelled Prompt.**");
		var ishex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(`${color}`)
		if (ishex == true) {
			message.guild.createRole({
				name: `cc ${digit} ${message.author.username} ${name}`,
				color: color,
			}).then(() => {
				let rolename = `cc ${digit} ${message.author.username} ${name}`;
				let role = message.guild.roles.find(r=> r.name.toLowerCase() === rolename.toLowerCase());
				let goldpos = message.guild.roles.find("name", "Gold").position;
				message.guild.setRolePosition(role, goldpos+1, false);
				message.member.removeRole(message.guild.roles.find("name", `${digit}`));
				message.member.addRole(role);
				message.channel
				.send(`Successfully created the role and given you it! To remove the role say \`/customcolor remove ${digit}\``);
			}).catch(() => {
				message.channel.send("🤖 Something went wrong and I could not make the role! 🤖");
			});
		} else {
			message.channel.send("Invalid hex code. Hex code example \`#ff0000\`.");
		}
	}
}

async function deleterole(message) {
	let rolename = `cc ${digitchoice} ${message.author.username} ${name}`;
	const digitchoice = await awaitReply(message, "Which color role would you like to remove (1-5)?", 60000);
	if (digitchoice == "cancel") return message.channel.send("**Canceled Prompt.**");
	if (message.guild.roles.find("name" rolename)) {
		if (!isNaN(digitchoice)) {
			if (digitchoice <= 5 && digitchoice >= 1) {
				const approval = await awaitReply(message, "Are you sure you would like to delete this custom role?", 60000);
				if (approval == "cancel") return message.channel.send("**Canceled Prompt.**");
				if (approval == "yes" || approval == "Yes") {
					let role = message.guild.roles.find(r=> r.name.toLowerCase() === rolename.toLowerCase());
					role.delete()
					let role1 = message.guild.roles.find("name", `${digitchoice}`)
					message.member.addRole(role1);
				}
			} else {
				message.channel.send(`\`${digitchoice} \` must be a number between 1 - 5.`);
			}
		} else {
			message.channel.send(`\`${digitchoice} \` is not a number.`);
		}
	} else {
		message.channel.send(`You do not have a role under \`${digitchoice}\`.`);
	}
}

module.exports = {
	id: "customcolor",
	load: () => {},
	execute: async (call) => {
		var input1 = call.params.readRaw().toLowerCase();
		console.log(input1)
		if (input1=="remove"||input1=="rem"||input1=="delete"||input1=="del") {
				deleterole(call.message)
		} else {
			if (call.message.member.roles.find("name", "1")) {
				makerole(call.message, 1)
			} else if (call.message.member.roles.find("name", "2")) {
				makerole(call.message, 2)
			} else if (call.message.member.roles.find("name", "3")) {
				makerole(call.message, 3)
			} else if (call.message.member.roles.find("name", "4")) {
				makerole(call.message, 4)
			} else if (call.message.member.roles.find("name", "5")) {
				makerole(call.message, 5)
			} else {
				call.message.channel.send("You do not have any remaining custom roles.")
			}
		}
	}
};
