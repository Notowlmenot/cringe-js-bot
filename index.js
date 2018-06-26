const Discord = require('discord.js');
const request = require('request');
const robot = new Discord.Client();
var p = "!";

function status1() {
    robot.user.setActivity('На говнокодера',{ type: "WATCHING" });
    robot.user.setStatus('online');
}
robot.login(process.env.SECRET);
