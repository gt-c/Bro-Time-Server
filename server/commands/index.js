module.exports = {
	id: "namecolor",
	load: () => {},
	execute: (call) => {
    var deluxecolors = ["red", "blue", "orange", "green", "black", "purple", "pink",
    "hotpink", "indigo", "bronze", "cyan", "lightgreen", "silver", "brightred", "hotbrown",
    "darkviolet", "gold"];
    var premiumcolors = ["red", "blue", "orange", "green", "black", "purple", "pink",
    "hotpink", "indigo", "bronze", "cyan", "lightgreen", "silver", "brightred", "hotbrown",
    "darkviolet"];
    var pluscolors = ["red", "blue", "orange", "green", "black", "purple", "pink",
    "hotpink", "indigo", "bronze", "cyan", "lightgreen"];
    var freecolors = ["red", "blue", "orange", "green", "black", "purple"];
    let messageArray = call.message.content.split(" ")
    let cmd = messageArray[0];
    let args= messageArray.slice(1);
    function errorembed() {
      call.message.channel.send({embed: {
        color: 0xff0000,
        title: "Error",
        description: "Color provided was either invalid, or not available for your current plan.",
        footer: {
          icon_url: call.message.author.avatarURL,
          text: `Run by ${call.message.author.username}`
        }
      }
    })
	  }
  function successembed() {
    call.message.channel.send({embed: {
      color: 0x7CFC00,
      title: "Success",
      description: `The desired role (${color}), has been given.`,
      footer: {
        icon_url: call.message.author.avatarURL,
        text: `Run by ${call.message.author.username}`
      }
    }
  })
  };
  function removecolorroles() {
    let color = args.join(" ").slice(0).toLowerCase();
    if (deluxecolors.find((value) => {return value == color}) !== null) {
      if(call.message.member.roles.find("name", `${color}`)) {

      } else {
      if (deluxecolors.find((value) => {return value == color}) !== null) {
        call.message.member.removeRole(call.message.guild.roles.find("name", "red")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "blue")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "yellow")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "orange")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "green")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "black")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "purple")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "pink")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "indigo")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "bronze")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "hotpink")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "cyan")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "lightgreen")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "silver")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "brightred")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "darkviolet")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "hotbrown")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "darkgreen")).catch(console.error);
        call.message.member.removeRole(call.message.guild.roles.find("name", "gold")).catch(console.error);
      }
    }
  }
  }

  if(call.message.member.roles.find("name", "Bro Time Deluxe")) {
    if (deluxecolors.find((value) => {return value == color}) !== null) {
      let role = call.message.guild.roles.find("name", `${color}`);
      removecolorroles();
      call.message.member.addRole(role).catch(console.error);
      successembed();
    } else {
      errorembed();
    }
  } else
  if(call.message.member.roles.find("name", "Bro Time Premium")) {
    if (premiumcolors.find((value) => {return value == color}) !== null) {
      let role = call.message.guild.roles.find("name", `${color}`);
      removecolorroles();
      call.message.member.addRole(role).catch(console.error);
      successembed();
    } else {
      errorembed();
    }
  } else
  if(call.message.member.roles.find("name", "Bro Time Plus")) {
    if (pluscolors.find((value) => {return value == color}) !== null) {
      let role = call.message.guild.roles.find("name", `${color}`);
      removecolorroles();
      call.message.member.addRole(role).catch(console.error);
      successembed();
    } else {
      errorembed();
    }
  } else {
    if (freecolors.find((value) => {return value == color}) !== null) {
      let role = call.message.guild.roles.find("name", `${color}`);
      removecolorroles();
      call.message.member.addRole(role).catch(console.error);
      successembed();
    } else {
      errorembed()
    }
  }
}
