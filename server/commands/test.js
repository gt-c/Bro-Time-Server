module.exports = {
  id: "ad",
	load: () => {},
	execute: (call) => {
  var commandDescs;
    fs.readFile(__dirname + "/../info/commandinfo.md", (err, data) => {
      if(err) {
        throw err;
      } else {
        commandDescs = data.toString("utf8");
      }
		});
    message.channel.send("1: "+commandDescs);
    message.channel.send("2: "+commandDescs.split("\n"));
	}
};
