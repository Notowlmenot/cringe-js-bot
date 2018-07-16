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
    robot.user.setActivity('На свой говнокод',{ type: "WATCHING" })
    robot.user.setStatus('IDLE')
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
		 .setImage(message.mentions.users.first().avatarURL)
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
	console.log('Кто то узнал пинг бота, он равен ' + pingses)
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
	member.addRole('467526203713126410')
	member.send('привет')
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
});
robot.on('message', message => {
	if(message.content.startsWith(p + 'ник')) {
var mentions1 = message.mentions
const vtes = message.content.slice(28);
if(message.author.id !== '292178755760422915')
			     return message.reply("Прости, но ты не можешь использовать это!")
message.delete()
message.mentions.members.first().setNickname(vtes)
console.log(vtes)
	}
})
	if(message.content.startsWith(p + 'цвет')){
 		if(message.guild == "467418241535311886"){
 			if(colors.has(message.content.slice(5))){
 				removeColors(message.member, colors.get(message.content.slice(5)));
 			} else {return message.reply("Неправильный цвет")};
 		};
 	};
  })
  
	var colors = new Map();
 colors.set("помидорка", "443838163853508608");
 colors.set("водянной", "443838488261951488");
 colors.set("виноградный", "443839613501440001");
 colors.set("серый", "444095949594296321");
 colors.set("черный", "443838296553160714");
 colors.set("морскаяволна", "443838370406465537");
 colors.set("туча", "443838748417982464");
 colors.set("тархун", "443839487768788992");
 colors.set("лиственный", "443839351529537546");
 colors.set("снег", "443838568478146560");
 сolors.set("деревянный", "443840639050842123");
 colors.set("синий", "443841323070521355");
 colors.set("темнофиолетовый", "443841554277466122");
 colors.set("розовый", "443841093365399572");
 colors.set("фуксия", "450002497063354369");
 colors.set("темнорозовый", "444096240901160961");
 colors.set("небесный", "443839230205231116");
 colors.set("золотой", "443842038484697109");
 
 function removeColors(m, add) {
 	m.removeRole(colors.get("помидорка"));
 	m.removeRole(colors.get("водянной"));	
 	m.removeRole(colors.get("виноградный"));
 	m.removeRole(colors.get("серый"));
 	m.removeRole(colors.get("черный"));
 	m.removeRole(colors.get("морская волна"));
 	m.removeRole(colors.get("туча"));
 	m.removeRole(colors.get("тархун"));
 	m.removeRole(colors.get("лиственный"));
 	m.removeRole(colors.get("снег"));
 	m.removeRole(colors.get("деревянный"));
 	m.removeRole(colors.get("синий"));
 	m.removeRole(colors.get("темнофиолетовый"));
 	m.removeRole(colors.get("розовый"));
 	m.removeRole(colors.get("фуксия"));
 	m.removeRole(colors.get("темнорозовый"));
 	m.removeRole(colors.get("небесный"));
 	m.removeRole(colors.get("золотой"));
 	m.addRole(add);
 }
robot.login(process.env.SECRET);
