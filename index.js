const fs = require('fs');
const Discord = require('discord.js');
const request = require('request');
const robot = new Discord.Client();
const client = new Discord.Client();
const bot = new Discord.Client();
var p = ('.');
robot.on('ready', () => {
    robot.user.setActivity('loading..',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 16000)
    console.log('ready launched bot...')
});
	
robot.on('message', message => {
    if(message.content.startsWith(p + 'help')) {
	message.channel.send('А ты что ожидал увидеть?')
	    console.log('${member.displayName} прописал команду help')
        };
});
function status1() {
    robot.user.setActivity('На свой говнокод',{ type: "WATCHING" })
    robot.user.setStatus('DND')
}
robot.on('message', message => {
    if(message.content.startsWith(p + 'say')) {
	    message.delete()
	    		if(!message.member.roles.some(r=>["Админы", "Доверенные"].includes(r.name)) )
				if(message.author.id !== '292178755760422915')
      return message.reply("Прости, но ты не можешь использовать это!")
        let say = message.content.slice((p + 'say').length);
        message.channel.send(say);
	     console.log('${member.displayName} сказал' + say)
    }
});
var messagelol = 'Я работаю!'
robot.on('message', message => {
    if(message.content === (p + 'check')) {
	    message.channel.send(messagelol);
	    message.react('380571016994226186')
	     console.log('${member.displayName} чекнул бота на роботоспособность')
    }
});
robot.on('message', message => {
	if(message.content === (p + 'logo')) {
		const embed = new Discord.RichEmbed()
		.setTitle('Логотип сервера')
            .setColor('RANDOM')
		.setImage(message.guild.iconURL)
		 message.channel.send({embed})
		console.log('показал логотип сервера ${member.guild.name} для ${member.displayName}')
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'avatar')) {
		var mentions1 = message.mentions
		const embed = new Discord.RichEmbed()
		.setTitle('Аватар пользователя:')
            .setColor('RANDOM')
		 .setImage(message.mentions.users.first().avatarURL)
		 message.channel.send({embed})
		console.log('показал аватар ${mentions1[0]} для ${member.displayName} в ${member.guild.name}')
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'kick')) {
		if(message.author.id !== '292178755760422915')
		if(!message.member.roles.some(r=>["Админы"].includes(r.name)) )
			     return message.reply("Прости, но ты не можешь использовать это!")
	message.mentions.members.first().kick()
var mentions1 = message.mentions
		message.channel.send('Успешно кикнут!')
		console.log('${member.displayName} кикнул ${mentions1[0]} в ${member.guild.name}')
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'ha gey')) {
		if(message.author.id !== '292178755760422915')
			     return message.reply("Лул, команда только для Дора, смирись братан!")
	message.mentions.members.first().addRole('371445035251662869')
	message.delete()
	}
});
robot.on('message', message => {
  if (message.content === (p + 'ping')) {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
	var pingses = sent.createdTimestamp - message.createdTimestamp
	console.log('${member.displayName} узнал пинг бота, он равен ' + pingses)
    });
  }
});
robot.on('message', message => {
  if (message.content === (p + 'пинг')) {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Понг! пинг бота: ${sent.createdTimestamp - message.createdTimestamp}мс`);
var pingses = sent.createdTimestamp - message.createdTimestamp
	console.log('${member.displayName} узнал пинг бота! Он раверн ' + pingses)
    });
  }
});
robot.on('guildMemberAdd', (member) => {
    console.log(`${member.displayName} вступил в ${member.guild.name}.`)
if(member.guild.id === "371444757102329857"){
robot.channels.get('371448746304864256').send(`Поприведствуем нового члена семьи Просто Сервера! - ${member.displayName}`);
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'vote')) {
		let votes = message.content.slice((p + 'test').length);
		robot.fetchWebhook('465734434537078784', 'veGoe0LieTHK_h-zCU5WK1MWXswaY3bdYst5e1qeLkSIZT6bc-eesuSPjSVHpRFtSyIu').then(webhook => {
			webhook.send(votes, {username: message.member.displayName, avatarURL: message.author.avatarURL}).then(async (vot) => {
				await vot.react('➕') ///Плюс
				await vot.react('380570863873032192') ///Тхонк
				await vot.react('➖');     ///минус
			})
		});
		message.delete()
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'mute')) {
				message.delete()
		if(!message.member.roles.some(r=>["Админы"].includes(r.name)) )
		return message.reply("Прости, но ты не можешь использовать это!")
		var keke = message.mentions.members.first()
message.mentions.members.first().removeRole('425149859712991262')
		message.mentions.members.first().addRole('424399811379200002')
		let mutes = message.content.slice((p + 'mute' + keke).length);
		var kekmute = mutes * 1000
		var lulmute = kekmute * 60
		var result = 'замучен до того момента, как его величеству заблагорассудится размутить'
		setTimeout(()=>{message.mentions.members.first().addRole('425149859712991262')
			       message.mentions.members.first().removeRole('424399811379200002')
			       console.log('Пользователь должен быть размучен')},lulmute)
									  message.reply(result).then((res) => {	
			setTimeout(()=>{res.delete()},5000)
        })
    }
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'unmute')) {
		message.delete()
		var result = 'Пользователь размучен!'
		if(!message.member.roles.some(r=>["Админы"].includes(r.name)) )
			     return message.reply("Прости, но ты не можешь использовать это!")
		message.mentions.members.first().addRole('425149859712991262')
		message.mentions.members.first().removeRole('424399811379200002')
				message.reply(result).then((res) => {
        setTimeout(()=>{res.delete()},5000)
        })
    }
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'karta')) {
		let votes = message.content.slice((p + 'test').length);
		robot.fetchWebhook('466184206842855424', 'VXfIvJHBVLM2Ay7CGbVi60gguaECK-KjRC9GPee4vmVc0SCguidBuQB2AO7lknfx9YGZ').then(webhook => {
			webhook.send(votes, {username: message.member.displayName, avatarURL: message.author.avatarURL}).then(async (vot) => {
				await vot.react('➕') ///Плюс
				await vot.react('380570863873032192') ///Тхонк
				await vot.react('➖');     ///минус
			})
		});
		message.delete() 
	}
console.log('${member.displayName} начал голосование за карту')
});
robot.on("message", message => {
  if (message.content.startsWith(p + 'eval')) {
	  if(message.author.id !== '292178755760422915')
			     return message.reply("Прости, но ты не можешь использовать это!")
const code = message.content.split(" ").slice(1).join(" ");
        try {
         let evaled = eval(code);
         if (!code) {
             return message.channel.send("нужна больше кода!");
         }
    
         if (typeof evaled !== 'string')
           evaled = require('util').inspect(evaled);
        
           const embed = new Discord.RichEmbed()
           .setTitle(`EVAL ✅`)
       
           .setColor("0x4f351")
           .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(evaled)}\`\`\``)
       
         message.channel.send({embed});
       } catch (err) {
         const embed = new Discord.RichEmbed()
         .setTitle(`EVAL ❌`)
  
         .setColor("0xff0202")
         .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(err)}\`\`\``)
    
         message.channel.send({embed});
       }
  }
  })
robot.on('message', message => {
	if(message.content.startsWith(p + 'ник')) {
var mentions1 = message.mentions
const vtes = message.content.slice(28);
if(message.author.id !== '292178755760422915')
			     return message.reply("Прости, но ты не можешь использовать это!")
message.delete()
message.mentions.members.first().setNickname(vtes)
console.log('${member.displayName} сменил ник ${mentions1[0]}' + vtes)
	}
});
robot.on("messageDelete", (msg) => {
  if (typeof msg.content !== 'undefined'){
    var date = new Date(msg.timestamp);
    if (typeof msg.attachments[0] !== 'undefined'){
	console.log('Кинул в лс удаленное сообщение')
      robot.users.get("292178755760422915").send(`Удалено сообщение от ${msg.author.username}, написанное ${date.toUTCString()}: "${msg.content}". К сообщению было что-то прикреплено.`);
    } else {
      robot.users.get("292178755760422915").send(`Удалено сообщение от ${msg.author.username}, написанное ${date.toUTCString()}: "${msg.content}".`);
    };
  } else {
    robot.users.get("292178755760422915").send("Удалено сообщение.");
  };
});
robot.on("guildMemberRemove", member => {
    console.log(`${member.displayName} покинул ${member.guild.name}.`)
if(member.guild.id === "371444757102329857"){
robot.channels.get('371447189815296001').send(`${member.displayName} покинул нас, скажем ему пока-пока!`);
	}
})
robot.login(process.env.SECRET);
