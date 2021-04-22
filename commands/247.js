const distube = require('../index.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "24/7",
    aliases: ["j", "247", "24/7", "24x7","aaja","aja"],
    description: "Join your VC for 27/7",
    async execute(message, args) {
        const { channel } = message.member.voice;

        const novc = new MessageEmbed()
        .setDescription(`You need to join a voice channel first!`)
        .setColor("#FF0000");

        const joinn = new MessageEmbed()
        .setDescription("<a:right:833265255886356510> 24/7 mode is now **Enabled** in this server.")
        .setColor("#FF0000");

        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) return message.channel.send(novc).catch(console.error);
        const nosamechannel = new MessageEmbed()
        .setDescription(` You must be in the same channel as ${message.client.user}`)
        .setColor("FF0000");
        message.channel.send(joinn)
        

        if (serverQueue && channel !== message.guild.me.voice.channel)
          return message.channel.send(nosamechannel).catch(console.error);          

            await message.member.voice.channel.join()
  
        }
    }


    console.log("Join working")
