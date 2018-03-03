module.exports = {
	id: "help",
	load: () => {},
	execute: (call) => {
    var pfx = call.message.data.prefix
		var input = call.params.readRaw();
		var commands = ["help", "ping", "freerole", "gamerole", "namecolor", "postgamenight", "postqotd", "mt", "cc"];
    var hp = `**${pfx}help** - Returns a list of commands and information about Bro Bot.`
    var pg = `**${pfx}ping** - Replies the amount of milliseconds it took the bot to reply to you.`
    var fr = `**${pfx}freerole** - Allows the user to join or leave the ANN, GW and QOTD roles, which are each pinged for an individual purpose.`
    var gr = `**${pfx}gamerole** - Allows the user to join or leave game roles, each resembling a game. List of game roles in \`${pfx}gameroles\`.`
    var nc = `**${pfx}namecolor** - Allows the user to change the color of their name tag to the desired color. List of color roles in \`${pfx}colors\`.`
    var pn = `**${pfx}postgamenight** - Begins a prompt that allows the user to post a game night in <#330920609435353090>`
    var pq = `**${pfx}postqotd** - Posts the specified question of the day, pinging the QOTD freerole in <#330920609435353090>`
    var mt = `**${pfx}mt** - Toggles the specified role from being able to be mentioned or not`
    var cc = `**${pfx}customcolor** - Begins a prompt that allows the user to create their own custom color roles`
		var fs = require('fs')
		var files = fs.readdirSync("./commands")
			if (input == null) {
				call.message.channel.send({embed: {
						color: 1416804,
						title: "Commands",
						description: "Hello! I'm Bro Bot, Bro Time's personal Discord bot assistant. Take a look!",
	       		fields: [{
	           		name: "Information Commands",
	           		value: hp+"\n"+pg
	         		},
	         		{
	           		name: "Role Join Commands",
	           		value: fr+"\n"+gr+"\n"+nc
	         		},
	         		{
	           		name: "Post Commands",
	           		value: pn+", if the they have the Game Night Host role.\n"+pq+", if the they have the QOTD Host role."
	         		},
	         		{
	           		name: "Utility Commands",
	           		value: mt+", if they have Moderator permissions"
	        		},
	         		{
	           		name: "Donator Commands",
	           		value: cc+", if they have [donated](https://www.paypal.me/brotime)."
	         		}
	       		],
						footer: {
							icon_url: call.message.author.avatarURL,
							text: `Run by ${call.message.author.username}`
						},
					},
				});
			} else {
				var fs = require('fs');
				var files = fs.readdirSync('/server/commands');
				var descmsg;
				if (input == "ping") return descmsg == pg+`\n**Requires:** Nothing\n**Usage:** \`${pfx}ping\``;
				if (input == "help") return descmsg == hp+`\n**Requires:** Nothing\n**Usage:** \`${pfx}help [command name]\``;
				if (input == "freerole") return descmsg == fr+`\n**Requires:** Nothing\n**Usage:** \`${pfx}freerole (ANN/GW/QOTD)\``;
				if (input == "gamerole") return descmsg == gr+`\n**Requires:** Nothing\n**Usage:** \`${pfx}gamerole (game name)\``;
				if (input == "namecolor") return descmsg == nc+`\n**Requires:** Nothing/Plus/Premium/Deluxe\n**Usage:** \`${pfx}namecolor (color role)\``;
				if (input == "postgamenight") return descmsg == pn+`\n**Requires:** Game Night Host\n**Usage:** \`${pfx}postgamenight --> (name) --> (link) --> (information)\``;
				if (input == "postqotd") return descmsg == pq+`\n**Requires:** QOTD Host Role\n**Usage:** \`${pfx}postqotd (message)\``;
				if (input == "mt") return descmsg == mt+`\n**Requires:** Moderator Permissions\n**Usage:** \`${pfx}mt (role name)\``;
				if (input == "customcolor") return descmsg == cc+`\n**Requires:** Plus/Premium/Deluxe\n**Usage:** \`${pfx}customcolor --> (remove/create) ...\``;
				files.forEach(function(command) {
					if (commands.includes(input.toLowerCase())) {
						call.message.channel.send({embed: {
							color: 1416804,
								title: `${command.slice(0, -3)}`,
								description: descmsg,
								footer: {
									icon_url: call.message.author.avatarURL,
									text: `Run by ${call.message.author.username}`
								},
							},
						}),
					},
				}),
			},
  },
},
