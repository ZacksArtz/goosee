exports.run = async(client, message, [action, key, ...value], level) => {
    message.channel.send('**GUCCI GANG GUCCI GANG GUCCI GANG**')
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["lilpump"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "lilpump",
    category: "System",
    description: "LIL PUMP OU LIL PUMP YUH",
    usage: "lilpump"
  };