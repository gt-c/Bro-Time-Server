module.exports = {
	id: "ad",
	load: () => {},
	execute: (call) => {
		var choice = call.params.readRaw();
		var string1 = "__Bro Time__ \nWant to join a **fun**, **engaging** community? Do you enjoy participating in **giveaways**, posting **memes**,";
		var string2 = "creating **stories**, talking with other **developers**, Playing **games** with bots, listening to **music**, joining **game nights**,"
		var string3 = "or answering **QOTDs**?\nThen You Should **Join The Community Today!** \nhttps://discord.gg/rjM8wdZ";
		if (!choice || choice === "computer") {
			call.message.channel.send(`\`\`\`${string1} ${string2} ${string3}\`\`\``);
		} else if (choice.toLowerCase() === "mobile") {
			call.message.channel.send(`${string1} ${string2} ${string3}`);
		}
	}
};


