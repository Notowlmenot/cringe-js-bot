const Discord = require('discord.js');
const request = require('request');
const robot = new Discord.Client();
var p = ('!');
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
	    message.delete()
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
	if(message.content.startsWith(p + 'avatar')) {
		const embed = new Discord.RichEmbed()
		.setTitle('Аватар пользователя:')
            .setColor('RANDOM')
		.setImage(message.mentions.members.first().avatarURL)
		 message.channel.send({embed})
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'kick')) {
	message.mentions.members.first().kick()
		message.channel.send('Успешно кикнут!')
	}
});
robot.on('message', message => {
  if (message.content === (p + 'ping')) {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
    });
  }
});
robot.on('message', message => {
  if (message.content === (p + 'пинг')) {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Понг! пинг бота: ${sent.createdTimestamp - message.createdTimestamp}мс`);
    });
  }
});
robot.on('guildMemberAdd', (member) => {
	member.addRole('464444589005340682')
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'delmsg')) {
		message.delete()
		let delmes = message.content.slice((p + 'delmsg').length);
		message.channel.bulkDelete(delmes)
		message.channel.send('Успешно удалено' + delmes + ' сообщений')
	}
});
robot.on('message', => {
  if (message.content.toLowerCase() === prefix + "rand") {
    var sans = ["https://cdn.discordapp.com/attachments/463927761954799616/463933537763065856/tumblr_nldm38KmTx1rwbf4ro1_540.gif"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .setColor(344573)
    .setDescription(` <@${message.author.id}>`)
    .setImage(`${sonuc}`)
    return message.channel.sendEmbed(embed);
  };
});

robot.login(process.env.SECRET);
