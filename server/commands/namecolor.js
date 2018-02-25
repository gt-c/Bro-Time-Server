var allroles = ["red", "blue", "orange", "green", "black", "purple", "pink", "yellow",
	"hotpink", "indigo", "bronze", "cyan", "lightgreen", "silver", "brightred", "hotbrown",
	"darkviolet", "gold"];
var deluxecolors = ["gold"];
var premiumcolors = ["silver", "brightred", "darkviolet", "hotbrown", "darkgreen"];
var pluscolors = ["pink", "indigo", "bronze", "hotpink", "cyan", "lightgreen"];
var freecolors = ["red", "blue", "orange", "green", "black", "purple", "yellow", "white"];

function removeColorRoles(roles, user) {
	allroles.forEach((color) => {
		if (user.roles.find("name", color)) {
			user.removeRole(roles.find("name", color));
		}
	});
}

module.exports = {
	id: "namecolor",
	load: () => {},
	execute: (call) => {
		let color = call.params.readRaw().toLowerCase();
		let role = call.params.readRole();
		if (allroles.includes(color)) {
			if (call.message.member.roles.find("name", "Bro Time Deluxe")) {
				call.message.member.addRole(role);
				removeColorRoles(call.message.guild.roles, call.message.member);
				call.message.channel.send(`Successfully given you the \`${role.name}\` color role!`);
			} else if (call.message.member.roles.find("name", "Bro Time Premium")) {
				if (premiumcolors.includes(color)||pluscolors.includes(color)||freecolors.includes(color)) {
					call.message.member.addRole(role);
					removeColorRoles(call.message.guild.roles, call.message.member);
					call.message.channel.send(`Successfully given you the \`${role.name}\` color role!`);
				} else if (deluxecolors.includes(color)) {
					call.message.channel.send(`\`${role.name}\` is a deluxe only color. Your plan is premium.`);
				}
			} else if (call.message.member.roles.find("name", "Bro Time Plus")) {
				if (pluscolors.includes(color)||freecolors.includes(color)) {
					call.message.member.addRole(role);
					removeColorRoles(call.message.guild.roles, call.message.member);
					call.message.channel.send(`Successfully given you the \`${role.name}\` color role!`);
				} else if (premiumcolors.includes(color)) {
					call.message.channel.send(`\`${role.name}\` is a premium and up color. Your plan is plus.`);
				} else if (deluxecolors.includes(color)) {
					call.message.channel.send(`\`${role.name}\` is a deluxe only color. Your plan is plus.`);
				}
			} else {
				if (freecolors.includes(color)) {
					call.message.member.addRole(role);
					removeColorRoles(call.message.guild.roles, call.message.member);
					call.message.channel.send(`Successfully given you the \`${role.name}\` color role!`);
				} else if (pluscolors.includes(color)) {
					call.message.channel.send(`\`${role.name}\` is a plus and up color. Your plan is free.`);
				} else if (premiumcolors.includes(color)) {
					call.message.channel.send(`\`${role.name}\` is a premium and up color. Your plan is free.`);
				} else if (deluxecolors.includes(color)) {
					call.message.channel.send(`\`${role.name}\` is a deluxe only color. Your plan is free.`);
				}
			}
		} else {
			call.message.channel.send(`\`${color} \` is not a valid color role. Make sure it contains no spaces.`);
		}
	}
};
