const fs = require('fs');
const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const robot = new Discord.Client();
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
	    console.log(`${message.author.displayName} прописал команду help`)
        };
});
function status1() {
    let servers = robot.guilds.size
    robot.user.setActivity('на ' + servers + ' серверах' ,{ type: "PLAYING" })
    robot.user.setStatus('DND')
}
robot.on('message', message => {
    if(message.content.startsWith(p + 'say')) {
	    message.delete()
				if(message.author.id !== '292178755760422915')
			     return message.reply("Прости, но ты не можешь использовать это!")
        let say = message.content.slice((p + 'say').length);
        message.channel.send(say);
	     console.log(`${message.author.displayName} сказал` + say)
    }
});
robot.on('message', message => {
	if(message.content === (p + 'logo')) {
try {
	const embed = new Discord.RichEmbed()
		.setTitle('Логотип сервера')
            .setColor('RANDOM')
		.setImage(message.guild.iconURL)
		 message.channel.send({embed})
		console.log(`показал логотип сервера ${message.guild.name} для ${message.author.displayName}`)
} catch (err) {
message.channel.send('Произошла ошибка, возможно, вы пытаетесь крашнуть бота :D')
		}
	}
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'avatar')) {
try {
var mentions1 = message.mentions
		const embed = new Discord.RichEmbed()
		.setTitle('Аватар пользователя:')
            .setColor('RANDOM')
		 .setImage(message.mentions.users.first().avatarURL)
		 message.channel.send({embed})
		console.log(`показал аватар ${mentions1[0]} для ${message.author.displayName} в ${message.guild.name}`)
} catch (err) {
message.channel.send('Ты уверен что это человек имеет аватарку?')
		}
	}
});
robot.on('message', message => {
  if (message.content === (p + 'ping')) {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
	var pingses = sent.createdTimestamp - message.createdTimestamp
	console.log(`${message.author.displayName} узнал пинг бота, он равен ` + pingses)
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
				console.log(`${message.author.displayName} начал голосование`);
			})
		});
		message.delete()
	}
});
robot.on("message", message => {
  if (message.content.startsWith(p + 'eval')) {
	  if(message.author.id === '292178755760422915' || message.author.id === '142832324214521857'){
			     
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
       }} else { return message.reply("Прости, но ты не можешь использовать это!") }
  }
  })
robot.on("messageDeleteBulk", (msg) => {
  if (typeof msg.content !== 'undefined'){
    var date = new Date(msg.createdTimestamp);
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
});
robot.on('message', msg => {
    if (msg.content === (p + 'монетка')) {
        var coin = Math.floor(Math.random() * 2) + 1  
	msg.delete()
    if(coin == 1){
        msg.reply('Тебе выпала ***Решка!*** <:owo:469056967755825163>')
    }
    if(coin == 2){
        msg.reply('Тебе выпал ***Орел!*** 🦅')
	    }
	
    }
});
    robot.on('message', msg => {
      var number = 0
      if(msg.content === (p + 'mafia start')){
        number++
        msg.channel.send('Вы были добавленны в очередь. ваш номер: ' + number)
      }
      if(msg.content === (p + 'mafia')) {
        msg.channel.send('В разработке')
      }
    })
	robot.on('message', msg => {
	if(msg.content = (msg)) {
	robot.fetchWebhook('618376118545809409', 'yPB0OtjwpbvbQ3Kl4cFlsWfPg_GKy2glAwBMWBRImJLoAV4wm33_fww99r2FOON8fChd').then(webhook => {
            webhook.send( 'дождался? Думал аниме? а хуй там.')  
		console.log('done')
	})
	}
	})
robot.login(process.env.SECRET)
