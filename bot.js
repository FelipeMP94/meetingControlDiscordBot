const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

const Fala = require("./Comands/falas");
const fala = new Fala();

client.on('message', message => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const comand = args.shift().toLowerCase();

    if(comand ==='fala'){
        if(!args.length){
            message.channel.send(`O tempo de fala não foi definido`);
            return;
        }
        else {
            let exp = /(\d)\s*min\s*(\d+)\s*s/g;
            let result = exp.exec(args[0]);
            fala.setTempo(fala._convet(result));
            message.channel.send(`O tempo de fala é de ${result[1]} minutos e ${result[2]} segundos`);
        }
    }

    if(comand ==='start'){
        fala.contreset();
        fala._interval = setInterval(()=>{
             fala.contmais();
            if(fala.cont == fala.tempoFala){
                 clearInterval(fala._interval);
                 message.channel.send("Tempo encerrado");
            }
            if((fala.tempoFala-fala.cont)==60){
                    message.channel.send("Você tem 1 minuto");

            }
        }, 1000);   
    }
    if(comand === 'pause'){
        clearInterval(fala._interval);
        message.channel.send("tempo parado");
    }
    if(comand === 'unpause'){
        fala._interval = setInterval(()=>{
            fala.contmais();
            if(fala.cont == fala.tempoFala){
                clearInterval(fala._interval);
                message.channel.send("Tempo encerrado Camarada");
           }
       }, 1000);   
    
    }
});


