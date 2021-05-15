const Discord = require ('discord.js');
const bot  =  new Discord.Client();

const token = 'ODEyMDc3OTIxODA4Mjg1NzA2.YC7ggA.DQk3mvRnDUSTihb5da81CcHlRmQ';

bot.login(token)
bot.on('ready', () => {
    console.log('Estou Pronto')
});

bot.on('message', msg =>{
    if  (msg.content === '!whitelist'){
        msg.reply('Entre na sala Aguardando para ser aprovado!')
    }
    if  (msg.content === '!regras'){
        msg.reply('Dê uma olhada nas regras e fique por dentro! https://docs.google.com/document/d/11_AKMfbCeowSCvwYU9OD1dwEH-Ty_vYdGyoIf0aImf0/edit?usp=sharing ')
    }
    if  (msg.content === '!wl'){
        msg.reply('Entre na sala Aguardando para ser aprovado!')
    }
});

