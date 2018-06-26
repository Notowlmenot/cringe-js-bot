const Discord = require('discord.js');
const request = require('request');
const robot = new Discord.Client();
var p = "!";
robot.on('ready', () => {
    robot.user.setActivity('loading..',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 16000)
    console.log('ready launched bot...')
});

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
	if(message.content.startsWith(p + 'web')) {
		const hook = new Discord.WebhookClient('461098819585835009', 'tHAmrnW0DBLWdkpudsyV6t6ukn7mVXDXDj3Z98HuO9oSw6guD5PaHye3w1yrOvHgfXvx');
		hook.send('hello bitches')
	};
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'warn')) 
		sendMessage 'kek'
	};
});
function status1() {
    robot.user.setActivity('На говнокодера',{ type: "WATCHING" });
    robot.user.setStatus('online');
}
robot.login(process.env.SECRET);
