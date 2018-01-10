exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.find("name", "Mods");

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");

  if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`${member.user.username} was succesfully kicked.`);
  });
};
//Here's the obligitory help command stuff
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Administartors"
};

exports.help = {
  name: "kick",
  category: "System",
  description: "Kicks a user.",
  usage: "kick"
};