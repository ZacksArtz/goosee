exports.run = (client, message, args, level) => {
    message.channel.send('no ur fuckin gay')
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["dab"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "dab",
    category: "System",
    description: "dab, yuh",
    usage: "dab"
  };