const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "bugreport",
    aliases: ["br"],
    cooldown: 3,
    description: "submit a bug",
    async execute(message, args) {

        const fbChannel = "834324983135469636";

        const fb = args.join(" ");
        if(!fb){
            return message.channel.send(":wrong: Please enter a bug!");
        }

        const embed = new MessageEmbed()
            .setTitle("Cloudz Music Bug Report <a:right:833265255886356510>")
            .addField(`Author`, `\`${message.author.tag}\``)
            .addField(`Bug`, "\`"+fb+"\`")
            .addField(`Member Id`, `\`${message.author.id}\``)
            .addField(`On the Server`, `\`${message.guild.name}\``)
            .addField("Server ID:", `\`${message.guild.id}\``)
            .setColor("#FF0000")
            .setTimestamp()
                    
        message.client.channels.cache.get(fbChannel).send(embed).then((msg) =>{
        }).catch((err)=>{
            throw err;
        });

