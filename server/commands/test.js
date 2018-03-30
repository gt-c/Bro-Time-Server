const fs = require("fs");

module.exports = {
	id: "testyoyoyo",
	load: () => {},
	execute: (call) => {
		fs.readFile(__dirname + "/../info/commandinfo.md", (err, data) => {
			if(err) {
				throw err;
			} else {
				call.message.channel.send(data.toString("utf8")).split("\n");
			}
		});
	}
};
