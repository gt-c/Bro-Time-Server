const fs = require("fs");

module.exports = {
	id: "testyoyoyo",
	load: () => {},
	execute: (call) => {
		fs.readFile(__dirname + "/../info/commandinfo.md", (err, data) => {
			if(err) {
				throw err;
			} else {
				var eachCommand = data.toString("utf8").split("\n");
				call.message.author.send(eachCommand.join("\nNERD\n"));
			}
		});
	}
};
