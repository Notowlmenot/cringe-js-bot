const Discord = require('discord.js');
const request = require('request');
const robot = new Discord.Client();
var p = "!";

function status1() {
    robot.user.setActivity('На говнокодера',{ type: "WATCHING" });
    robot.user.setStatus('online');
}
robot.on('message', message => {
    if(message.content.startsWith(p + 'help')) {
        const embed = new Discord.RichEmbed()
            .setTitle("Помощь")
            .setColor("#00BFFF")
            .setDescription('Мои команды:')
            .setFooter("Напиши что хочешь")
            .setTimestamp();
        message.channel.send({embed}).then(sentMessage => {   
            sendMessage.react('🇭')
                .then(() => sentMessage.react('🇪'))
                    .then(() => sentMessage.react('🇱'))
                    .then(() => sentMessage.react('🇵'))
                    .catch(() => console.error('One of the emojis failed to react.'));
        });
    }
});
robot.on('message', message => {
if(message.content.startWith(p + 'hel')) {
    const embed = nes Discord.RichEmbed()
    var a = (message.author)
    .setTitle("Аватар пользователя"+a)
    .setColor("#00BFFF")
    .setDescription('тестик')
    .setFooter("request by"+a);
});
});
robot.login(process.env.SECRET);
