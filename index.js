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
            .setColor('RANDOM')
            .setDescription('Префикс бота - !')
	.setField('help')
	.setValue('Показать этот список')
            .setFooter("Напиши что хочешь")
            .setTimestamp();
        message.channel.send({embed})
        };
});

robot.on('message', message => {
	if(message.content == (p + 'web')) {
		const hook = new Discord.WebhookClient('461098819585835009', 'tHAmrnW0DBLWdkpudsyV6t6ukn7mVXDXDj3Z98HuO9oSw6guD5PaHye3w1yrOvHgfXvx');
		hook.send('hello bitches')
	};
});
function status1() {
    robot.user.setActivity('На тебя',{ type: "WATCHING" })
    robot.user.setStatus('online')
}

robot.on('message', message => {
    if(message.content.startsWith(p + 'mute')) {
	    message.mentions.member.removeRole('462657844538376212')
    };
});

robot.on('message', message => {
    if(message.content.startsWith(p + 'unmute')) {
	    message.mentions.member.addRole('462657844538376212')
    };
});

robot.on('message', message => {
	if(message.content.startsWith(p + 'delplz')) {
		message.delete()
	};
});
	    
robot.on('message', message => {
    if(message.content.startsWith(p + 'afk')) {
        const embed = new Discord.RichEmbed()
            .setTitle("AFK")
            .setColor('RANDOM')
            .setDescription('Вошел в афк.')
            .setFooter("AFK")
	    .setImage('https://images-ext-1.discordapp.net/external/bHgCJDB7OagguZl0LsM3KG2doxboqtrGCew1Mbc-saA/%3Fwidth%3D80%26height%3D80/https/images-ext-1.discordapp.net/external/zOQcnhsC7Ud8tPF-pJQpt51YyrvvP-xwH5c9v02p4Ys/https/thumbs.gfycat.com/SinfulCompetentBeaver-max-1mb.gif')
            .setTimestamp();
	   message.channel.send({embed})
            };
           })
robot.on('message', message => {
    if(message.content.startsWith(p + 'say')) {
        let say = message.content.slice((p + 'say').length);
        message.channel.send(say);
    }
});
var messagelol = 'Я работаю!'
robot.on('message', message => {
    if(message.content.startsWith(p + 'check')) {
	    message.channel.send(messagelol);
	    message.react('380571016994226186')
    }
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'logo')) {
		const embed = new Discord.RichEmbed()
		.setTitle('Логотип сервера')
            .setColor('RANDOM')
		.setImage(message.guild.iconURL)
		 message.channel.send({embed})
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'avatar')) {
		const embed = new Discord.RichEmbed()
		.setTitle('Аватар пользователя:')
            .setColor('RANDOM')
		.setImage(message.author.avatarURL)
		 message.channel.send({embed})
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'avatar')) {
    message.delete();
    const color = parseInt(func.getRandomInt(0, 16777214));
    const apiping = Math.round(client.ping);
    const embed = new Discord.RichEmbed()
        .setTitle('ping')
        .setDescription(`\n['main_server']: **('calculation')...**\n ('api_server'): **${apiping}**['ms']`)
        .setFooter['only_bots']
        .setColor('RANDOM');
    message.channel.send({embed}).then(m => {
        const embed_req = new Discord.RichEmbed()
            .setTitle('ping')
            .setDescription(`\n('main_server'): **${m.createdTimestamp - message.createdTimestamp}**('ms')\n {'api_server'}: **${apiping}**['ms']`)
            .setFooter('only_bots')
            .setColor('RANDOM');
        m.edit({embed: embed_req});
    });

robot.login(process.env.SECRET);
