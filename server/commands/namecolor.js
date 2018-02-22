var deluxecolors = ["red", "blue", "orange", "green", "black", "purple", "pink", "yellow",
	"hotpink", "indigo", "bronze", "cyan", "lightgreen", "silver", "brightred", "hotbrown",
	"darkviolet", "gold"];
var premiumcolors = ["red", "blue", "orange", "green", "black", "purple", "pink", "yellow",
	"hotpink", "indigo", "bronze", "cyan", "lightgreen", "silver", "brightred", "hotbrown",
	"darkviolet"];
var pluscolors = ["red", "blue", "orange", "green", "black", "purple", "pink", "yellow",
	"hotpink", "indigo", "bronze", "cyan", "lightgreen"];
var freecolors = ["red", "blue", "orange", "green", "black", "purple", "yellow"];

function removeColorRoles(roles, user) {
	deluxecolors.forEach((color) => {
		if (user.roles.find("name", color)) {
			user.removeRole(roles.find("name", color));
		}
	});
}

function error(channel) {
	channel.send("The color you provided was either invalid, or is not available for your current plan.");
}

function success(channel, color) {
	channel.send(`Successfully given you the ${color} color role!`);
}

module.exports = {
	id: "namecolor",
	load: () => {},
	execute: (call) => {
		let color = call.params.readParameter().toLowerCase();

		if (!call.message.member.roles.find("name", color)) {
			if (call.message.member.roles.find("name", "Bro Time Deluxe")) {
				if (deluxecolors.includes(color)) {
					let role = call.message.guild.roles.find("name", `${color}`);
					removeColorRoles(call.message.guild.roles, call.message.member);
					call.message.member.addRole(role);
					success(call.message.channel, color);
				} else {
					error(call.message.channel);
				}
			} else if (call.message.member.roles.find("name", "Bro Time Premium")) {
				if (premiumcolors.includes(color)) {
					let role = call.message.guild.roles.find("name", `${color}`);
					removeColorRoles(call.message.guild.roles, call.message.member);
					call.message.member.addRole(role);
					success(call.message.channel, color);
				} else {
					error(call.message.channel);
				}
			} else if (call.message.member.roles.find("name", "Bro Time Plus")) {
				if (pluscolors.includes(color)) {
					let role = call.message.guild.roles.find("name", `${color}`);
					removeColorRoles(call.message.guild.roles, call.message.member);
					call.message.member.addRole(role);
					success(call.message.channel, color);
				} else {
					error(call.message.channel);
				}
			} else {
				if (freecolors.includes(color)) {
					let role = call.message.guild.roles.find("name", `${color}`);
					removeColorRoles(call.message.guild.roles, call.message.member);
					call.message.member.addRole(role);
					success(call.message.channel, color);
				} else {
					error(call.message.channel);
				}
			}
		}
	}
};
