const { MessageEmbed } = require("discord.js");
const { EMOJI_DONE , BOT_ID } = require('../config.json');

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message, args) {
    if(!args[0]) {
      let commands = message.client.commands.map((x) => '`' + x.name + '`').join(', ');

      let helpEmbed = new MessageEmbed()
      .setAuthor(`Command List`, `${message.client.user.avatarURL()}`)
      .setColor("FF0000")
      .setDescription(`\`All Commands Of\` **${message.client.user.username}**\n\n${commands}`)
      .addField(`**Links**`, `**[Support Server](https://discord.gg/RbTQ2Z5hkR)** • **[Invite Me](https://discord.com/api/oauth2/authorize?client_id=822294569223454740&permissions=8&scope=bot)** `)

      message.channel.send(helpEmbed)
    } else {
      const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

      if (!command) return message.channel.send(`I did not find this command !`);

      const advhelp = new MessageEmbed()
      .setAuthor(`Help Panel`, `${message.client.user.avatarURL()}`)
      .setColor("#FF0000")
      .setDescription(`Name: ${command.name}\nDescription: ${command.description}\nAliases: ${command.aliases.length < 1 ? 'None' : command.aliases.join(', ')}`)

      message.channel.send(advhelp)
    }
  }
}
