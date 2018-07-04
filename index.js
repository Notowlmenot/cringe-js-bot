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
            .setFooter("Напиши что хочешь")
            .setTimestamp();
        message.channel.send({embed})
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
    if(message.content === (p + 'check')) {
	    message.channel.send(messagelol);
	    message.react('380571016994226186')
    }
});
robot.on('message', message => {
	if(message.content === (p + 'logo')) {
		const embed = new Discord.RichEmbed()
		.setTitle('Логотип сервера')
            .setColor('RANDOM')
		.setImage(message.guild.iconURL)
		 message.channel.send({embed})
	}
});
robot.on('message', message => {
	if(message.content === (p + 'avatar')) {
		const embed = new Discord.RichEmbed()
		.setTitle('Аватар пользователя:')
            .setColor('RANDOM')
		.setImage(message.author.avatarURL)
		 message.channel.send({embed})
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'kick')) {
		var ygy = "Успешно"
	var kicklul = message.mentions.members
	member.kick(kicklul)
		message.react('380571016994226186')
		message.channel.send('ygy')
	}
});
robot.on('message', message => {
('message', message => {
  if (message.content === 'ping') {
     const pingsmessage = robot.ping
    message.channel.send('pong!' + pingsmessage)
  }
})

robot.login(process.env.SECRET);
