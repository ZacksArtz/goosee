exports.run = (client, message, args, level) => {
    message.channel.send('no i du not know de_wey')
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["du u know de way"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "de_wey",
    category: "System",
    description: "du i know de wey",
    usage: "du u know de wey"
  };