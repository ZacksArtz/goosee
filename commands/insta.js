exports.run = async(client, message, [action, key, ...value], level) => {
    message.channel.send('the uhh insta is uhhh gae, but if you really want it here you go https://instagram.com/rubber_goose_').then(message.channel.send('but this one is better https://instagram.com/zackattack2412'))
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "insta",
    category: "System",
    description: "Displays my trashy instagram.",
    usage: "insta"
}