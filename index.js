const fs = require('fs');
const Discord = require('discord.js');
const request = require('request');
const robot = new Discord.Client();
const client = new Discord.Client();
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
	    console.log('кто то прописал команду help')
        };
});
function status1() {
    robot.user.setActivity('На тебя',{ type: "WATCHING" })
    robot.user.setStatus('online')
}
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
           });
robot.on('message', message => {
    if(message.content.startsWith(p + 'say')) {
	    message.delete()
	    		if(!message.member.roles.some(r=>["Админы", "Доверенные"].includes(r.name)) )
      return message.reply("Прости, но ты не можешь использовать это!")
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
		if(!message.member.roles.some(r=>["Админы"].includes(r.name)) )
			     return message.reply("Прости, но ты не можешь использовать это!")
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
    if(message.content.startsWith(p + 'delete')) {
                   if(!message.member.roles.some(r=>["Админы"].includes(r.name)) )
      return message.reply("Прости, но ты не можешь использовать это!")
        message.delete()
        let delmes = message.content.slice((p + 'delete').length);
        var result = 'Успешно удалено' + delmes + ' сообщений'
        message.channel.bulkDelete(delmes)
        message.channel.send(result).then((res) => {
        setTimeout(()=>{res.delete()},5000)
        console.log('Кто-то удалил сообщения!')
        })
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
		var result = 'Пользователь ' + keke + ' успешно замучен на ' + mutes + ' минут'
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
});
robot.on("message", message => {
  if (message.content.startsWith(p + 'eval2')) {
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
});
robot.on('message', message => {
if (message.content.startsWith(p + 'eval')) {
const code = args.join(" ").replace(/client\.token|client\[.token.\]/ig, 'process.env.TOKEN');
        const token = client.token.split("").join("[^]{0,2}");
        const rev = client.token.split("").reverse().join("[^]{0,2}");
        const filter = new RegExp(`${token}|${rev}`, "g");
        try {
            let output = eval(code);
            if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
            output = inspect(output, { depth: 0, maxArrayLength: null });
            output = output.replace(filter, "[TOKEN]");
            output = clean(output);
            if (output.length < 1950) {
                //Отправляет пользователю данные эмуляции.
                message.author.send(`\`\`\`js\n${output}\n\`\`\``);
                //Ставит реакцию (выполнено).
                message.react("✅")
            } else {
                message.author.send(`${output}`, {split:"\n", code:"js"});
            }
        } catch (error) {
            //Захватывает ошибку и говорит об этом.
            message.channel.send(`Произошла ошибка \`\`\`js\n${error}\`\`\``);
            //Ставит реакцию (Ошибка).
            message.react("❎")
        }

        function clean(text)  {
            return text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203));
        }
}
})
robot.login(process.env.SECRET);
