var SPACE = "\\s,";

class Paramaters {
	constructor(message) {
		this.sep = new RegExp(`[${SPACE}]+`, "y");
		this.raw = message.content;
		// Store the client for user access.
		this.client = message.client;
		// Store the guild for role access.
		this.guild = message.guild;
		this.index = 0;
	}

	offset(offset) {
		this.index += offset;
	}

	readRaw() {
		return this.raw.substring(this.index);
	}

	readSeparator() {
		this.sep.lastIndex = this.index;
		var match = this.raw.match(this.sep);
		if (match !== null) {
			this.index += match[0].length;
			return match[0];
		}
	}

	readParameter() {
		var pattern = new RegExp(`[^${SPACE}]+`, "y");
		pattern.lastIndex = this.index;
		var match = this.raw.match(pattern);
		if (match !== null) {
			this.index += match[0].length;
			return match[0];
		}
	}

	readWord(classes) {
		var pattern = new RegExp(`[${classes}a-zA-Z]+`, "y");
		pattern.lastIndex = this.index;
		var match = this.raw.match(pattern);
		if (match !== null) {
			this.index += match[0].length;
			return match[0];
		}
	}

	readNumber() {
		var param = this.readParameter();
		if (param !== null) {
			var number = parseFloat(param);
			if (!isNaN(number)) {
				return number;
			}
		}
	}

	readObject(objects, name = "name", mentions = /(.+)/, allowPartial = true, filter = () => { return true; }) {
		var param = this.readParameter().toLowerCase();
		var mention = param.match(mentions);
		if (mention !== null) {
			param = mention[1];
		}
		// Check for objects by name.
		var object = objects.find((candidate) => {
			return candidate[name].toLowerCase() == param && filter(candidate);
		});
		if (object === null) {
			// Check for objects by id.
			var id = parseFloat(param);
			if (!isNaN(id)) {
				object = objects.get(id);
				if (object !== null && !filter(object)) {
					object = null;
				}
			}
		}
		if (object === null && allowPartial) {
			// Check for objects by partial name.
			object = objects.find((candidate) => {
				return candidate[name].toLowerCase().includes(param) && filter(candidate);
			});
		}
		return object;
	}

	readUser(allowPartial = true, filter = () => { return true; }) {
		return this.readObject(this.client.users, "username", /<@!?(\d+)>/, allowPartial, filter);
	}

	readRole(allowPartial = true, filter = () => { return true; }) {
		return this.readObject(this.guild.roles, "name", /<@&(\d+)>/, allowPartial, filter);
	}

	readChannel(allowPartial = true, filter = () => { return true; }) {
		return this.readObject(this.guild.channels, "name", /<#(\d+)>/, allowPartial, filter);
	}
}

module.exports = Paramaters;
