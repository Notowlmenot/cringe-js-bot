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
	    console.log('кто то прописал команду help')
        };
});

function status1() {
    robot.user.setActivity('На тебя',{ type: "WATCHING" })
    robot.user.setStatus('online')
}

robot.on('message', message => {
	if(message.content.startsWith(p + 'delplz')) {
		message.delete()
		console.log('Кто то прописал команду "Удали это сообщение"')
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
	    console.log('Кто-то вошел в афк')
            };
           })
robot.on('message', message => {
    if(message.content.startsWith(p + 'say')) {
	    message.delete()
        let say = message.content.slice((p + 'say').length);
        message.channel.send(say);
	     console.log('Кто то сказал' + say)
    }
});
var messagelol = 'Я работаю!'
robot.on('message', message => {
    if(message.content === (p + 'check')) {
	    message.channel.send(messagelol);
	    message.react('380571016994226186')
	     console.log('Кто-то чекнул бота на роботоспособность')
    }
});
robot.on('message', message => {
	if(message.content === (p + 'logo')) {
		const embed = new Discord.RichEmbed()
		.setTitle('Логотип сервера')
            .setColor('RANDOM')
		.setImage(message.guild.iconURL)
		 message.channel.send({embed})
		console.log('Кому то понадобилось узнать логотип сервера')
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'avatar')) {
		const embed = new Discord.RichEmbed()
		.setTitle('Аватар пользователя:')
            .setColor('RANDOM')
		 .setImage(message.member.avatarURL)
		 message.channel.send({embed})
		console.log('Кому то понадобился аватар')
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'kick')) {
	message.mentions.members.first().kick()
		message.channel.send('Успешно кикнут!')
		console.log('Кто-то кого-то кикнул!')
	}
});
robot.on('message', message => {
  if (message.content === (p + 'ping')) {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
	console.log('Кто то узнал пинг бота!')
    });
  }
});
robot.on('message', message => {
  if (message.content === (p + 'пинг')) {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Понг! пинг бота: ${sent.createdTimestamp - message.createdTimestamp}мс`);
	console.log('Кто то узнал пинг бота!')
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
		console.log('Кто-то удалил сообщения!')
	}
});
  if(msg.channel.id == 371446270264606742 {
    console.log("Начал голосование на сервере");
    msg.addReaction("380570863873032192");
    msg.addReaction("➖");
	  msg.addReaction("➕");

  }
});
robot.login(process.env.SECRET);
