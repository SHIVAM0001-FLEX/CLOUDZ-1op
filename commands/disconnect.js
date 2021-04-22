const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "disconnect",
    aliases: ["dc", "disconnect", "nikal"],
    description: "Leaves VC",
    async execute(message, args) {
        const { channel } = message.member.voice;

        const serverQueue = message.client.queue.get(message.guild.id);

        const dcneedvc = new MessageEmbed()        
        .setDescription("<a:wrong:833366149785845790> You need to join a voice channel which i'm in - to disconnect me!")
        .setColor("#FF0000");

        const dcembed = new MessageEmbed()
        .setDescription("<a:right:833265255886356510> 24/7 mode is now **Disable** in this server.")
        .setColor("#FF0000")

        
        const dccembed = new MessageEmbed()
        .setDescription(`<a:wrong:833366149785845790> You must be in the same channel as ${message.client.user}`)
        .setColor("#FFOOOO")

        if (!channel) return message.reply(dcneedvc).catch(console.error);
        if (serverQueue && channel !== message.guild.me.voice.channel)
          return message.reply(dccembed).catch(console.error);

            message.member.voice.channel.leave();
            message.channel.send(dcembed)       
              
        }
    }



    console.log("DC / Disconnect working")
