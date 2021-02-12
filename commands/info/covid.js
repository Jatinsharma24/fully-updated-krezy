const { Message, MessageEmbed } = require("discord.js");

const Discord = require("discord.js");

const moment = require("moment");

const fetch = require("node-fetch");

const url = require("url");

const api = require("novalcovid");

module.exports = {
  name: "covid",

  category: "info",

  aliases: ["corona", "covid19"],

  description: "Covid-19",

  usage: "covid <country>",

  args: true,

  run: async (client, message, args) => {
    const a = args.join(" ");

    const data = await api.countries({ country: args.join(" ") });

    const coronaembed = new Discord.MessageEmbed()

      .setColor("RANDOM")

      .setTitle("Global Cases Covid-19")

      .setDescription(`Number of Covid-19 cases on \`${a}\``)

      .addField("Cases", data.cases, true)

      .addField("Active", data.active, true)

      .addField("Cases Today", data.todayCases, true)

      .addField("Critical Cases", data.critical, true)

      .addField("Deaths", data.deaths, true)

      .addField("Recovered", data.recovered, true);

    message.channel.send(coronaembed);
  }
};
