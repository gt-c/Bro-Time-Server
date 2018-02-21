var deluxecolors = ["red", "blue", "orange", "green", "black", "purple", "pink",
	"hotpink", "indigo", "bronze", "cyan", "lightgreen", "silver", "brightred", "hotbrown",
	"darkviolet", "gold"];
var premiumcolors = ["red", "blue", "orange", "green", "black", "purple", "pink",
	"hotpink", "indigo", "bronze", "cyan", "lightgreen", "silver", "brightred", "hotbrown",
	"darkviolet"];
var pluscolors = ["red", "blue", "orange", "green", "black", "purple", "pink",
	"hotpink", "indigo", "bronze", "cyan", "lightgreen"];
var freecolors = ["red", "blue", "orange", "green", "black", "purple"];

function removeColorRoles(roles, colors, user) {
	colors.forEach((color) => {
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
		let color = call.params.readParameter();
		if (color !== null) {
			color = color.toLowerCase();

			if (call.message.member.roles.find("name", "Bro Time Deluxe")) {
				if (deluxecolors.find((value) => {return value == color;}) !== null) {
					let role = call.message.guild.roles.find("name", `${color}`);
					removeColorRoles(call.message.guild.roles, deluxecolors, call.message.member);
					call.message.member.addRole(role);
					success(call.message.channel, color);
				} else {
					error(call.message.channel);
				}
			} else if (call.message.member.roles.find("name", "Bro Time Premium")) {
				if (premiumcolors.find((value) => {return value == color;}) !== null) {
					let role = call.message.guild.roles.find("name", `${color}`);
					removeColorRoles(call.message.guild.roles, premiumcolors, call.message.member);
					call.message.member.addRole(role);
					success(call.message.channel, color);
				} else {
					error(call.message.channel);
				}
			} else if (call.message.member.roles.find("name", "Bro Time Plus")) {
				if (pluscolors.find((value) => {return value == color;}) !== null) {
					let role = call.message.guild.roles.find("name", `${color}`);
					removeColorRoles(call.message.guild.roles, pluscolors, call.message.member);
					call.message.member.addRole(role);
					success(call.message.channel, color);
				} else {
					error(call.message.channel);
				}
			} else {
				if (freecolors.find((value) => {return value == color;}) !== null) {
					let role = call.message.guild.roles.find("name", `${color}`);
					removeColorRoles(call.message.guild.roles, freecolors, call.message.member);
					call.message.member.addRole(role);
					success(call.message.channel, color);
				} else {
					error(call.message.channel);
				}
			}
		}
	}
};