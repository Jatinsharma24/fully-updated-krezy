const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async (client, message, args) => {
    message.delete();

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${client.user.username} Commands!`)
      .setDescription(
        `` +
          "**★Fun:**\n`Avatar, Coinflip, Howgay, Meme, Rate, 8ball, Dicksize, Ascii, Hack, Randomnumber, ytsearch, gsearch, creatememe, question, kiss, slap, waifu, relationship, sad, enemoji (enlarge emoji), td(thruth or dare), invert, thanks, welcome, love, shy, poke, care, sorry, wiki, cat, dog`" +
          "\n\n" +
          "**★Moderation:**\n`Clear, Mute, Unmute, Tempmute, Kick, Ban, Unban, Tempban, Warn, Warnings, addemoji`" +
          "\n\n" +
          "**★Information:**\n`Help, botInfo, Weather, whois, Serverinfo, Ping, poll, shout(announce)`" +
          "\n\n" +
          "**★Music Commands:** \n`M$help for Music Commands`" +
          "\n\n" +
          "**★Giveaway Commands:** \n`G$help for Giveaway Commands`" +
          "\n\n" +
          "**★Economy Commands:** \n`E$help for Economy Commands`" +
          "\n\n" +
          "**★Reaction roles:** \n`R$help for reaction roles commands`" +
          "\n\n" +
          "**★Chatbot:** \n`$helpchatbot for chatbot commands`" +
          "\n\n" +
          "**★Ticket system: ** \n`$ticket-setup #channel \nfor setting up ticket channel\n$close for closing a ticket`" +
          "\n\n" +
          "**★Others: ** \n`1. W$help for welcome setup!, Leave$help for exit setup!\nNote: welcome and leave are beta commands\n\n2. Invite\n\n3. Report(In case of any problem with bot)`" +
          "\n\n" +
          "**★Note: **\n`Moderation, Reaction role, ticket system requires higher permissions`"
      )
      .setFooter(`by Krezy`)
      .setTimestamp();

    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
