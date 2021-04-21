
const { EMOJI_DONE } = require('../config.json');

module.exports = {
    name: "disconnect",
    aliases: ["dc", "disconnect", "nikal"],
    description: "Leaves VC",
    async execute(message, args) {
        const { channel } = message.member.voice;
    
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) return message.reply("You need to join a voice channel which i'm in - to disconnect me!").catch(console.error);
        if (serverQueue && channel !== message.guild.me.voice.channel)
          return message.reply(`You must be in the same channel as ${message.client.user}`).catch(console.error);

            message.member.voice.channel.leave();
            
           
            message.react(EMOJI_DONE);
        }
    }



    console.log("DC / Disconnect working")const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "disconnect",
    aliases: ["dc", "disconnect", "nikal"],
    description: "Leaves VC",
    async execute(message, args) {
        const { channel } = message.member.voice;

        const serverQueue = message.client.queue.get(message.guild.id);

        const dcneedvc = new MessageEmbed()        
        .setDescription(":astroz_wrong: You need to join a voice channel which i'm in - to disconnect me!")
        .setColor("YELLOW");

        const dcembed = new MessageEmbed()
        .setDescription(":astroz_correct: 24/7 mode is now **Disable** in this server.")
        .setColor("YELLOW")

        
        const dccembed = new MessageEmbed()
        .setDescription(`You must be in the same channel as ${message.client.user}`)
        .setColor("YELLOW")

        if (!channel) return message.reply(dcneedvc).catch(console.error);
        if (serverQueue && channel !== message.guild.me.voice.channel)
          return message.reply(dccembed).catch(console.error);

            message.member.voice.channel.leave();
            message.channel.send(dcembed)       
              
        }
    }



    console.log("DC / Disconnect working")
