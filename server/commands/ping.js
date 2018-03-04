const DECIMAL_PLACES = 3;

module.exports = {
	id: "ping",
	load: () => {},
	execute: (call) => {
		var mult = Math.pow(10, DECIMAL_PLACES);
		var delay = Math.round(call.client.ping*mult)/mult;
		var diag;
		if (delay <= 0) {
			diag = "impossible";
		} else if (delay < 200) {
			diag = "great";
		} else if (delay < 350) {
			diag = "good";
		} else if (delay < 500) {
			diag = "ok";
		} else if (delay < 750) {
			diag = "bad";
		} else if (delay < 1000) {
			diag = "terrible";
		} else {
			diag = "worse than dial up";
		}
		call.message.channel.send(`pong (recieved in ${delay}ms; ${diag})`);
	}
};
