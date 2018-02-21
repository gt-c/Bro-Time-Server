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
    let color = call.params.readParameter().toLowerCase();
  };
  function removecolorroles() {
    if (deluxecolors.find((value) => {return value == color}) !== null) {
      if(call.message.member.roles.find("name", `${color}`)) {

      } else {
      if (deluxecolors.find((value) => {return value == color}) !== null) {
        deluxecolors.forEach((color) => {
          call.message.member.removeRole(call.message.guild.roles.find("name", color))
        }
      }
    }
  }
  }
  function error() {
    call.message.channel.send("The color you provided was either invalid, or is not available for your current plan.")
  }
  function success() {
    call.message.channel.send(`Successfully given you the ${color} color role!`)
  }
  if(call.message.member.roles.find("name", "Bro Time Deluxe")) {
    if (deluxecolors.find((value) => {return value == color}) !== null) {
      let role = call.message.guild.roles.find("name", `${color}`);
      removecolorroles();
      call.message.member.addRole(role)
      success();
    } else {
      error();
    }
  } else
  if(call.message.member.roles.find("name", "Bro Time Premium")) {
    if (premiumcolors.find((value) => {return value == color}) !== null) {
      let role = call.message.guild.roles.find("name", `${color}`);
      removecolorroles();
      call.message.member.addRole(role)
      success();
    } else {
      error();
    }
  } else
  if(call.message.member.roles.find("name", "Bro Time Plus")) {
    if (pluscolors.find((value) => {return value == color}) !== null) {
      let role = call.message.guild.roles.find("name", `${color}`);
      removecolorroles();
      call.message.member.addRole(role)
      success();
    } else {
      error();
    }
  } else {
    if (freecolors.find((value) => {return value == color}) !== null) {
      let role = call.message.guild.roles.find("name", `${color}`);
      removecolorroles();
      call.message.member.addRole(role)
      success();
    } else {
      error()
    }
  }
}
