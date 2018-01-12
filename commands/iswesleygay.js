exports.run = (client, message, args, level) => {
    message.reply('**very yes**')
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["weslygay"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "iswesleygay",
    category: "System",
    description: "is wesley gay lmao what do you not know how to read or something smh",
    usage: "iswesleygay"
  };