exports.run = (client, message, args, level) => {
    message.reply('**OH ZACC IS THE BEST CODER**').then(message.channel.send('@zxck#8233 is the best, you should buy a website or a discord bot from him at https://zackmyers.herokuapp.com !!'))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["zackcoder"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "iszackbestcoder",
    category: "System",
    description: "is zack best coder lmao what do you not know how to read or something smh",
    usage: "iszackbestcoder"
  };