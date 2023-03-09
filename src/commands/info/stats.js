const AvonCommand = require("../../structures/avonCommand");
const moment = require(`moment`);
require(`moment-duration-format`);
const { EmbedBuilder , ButtonBuilder , ButtonStyle , ActionRowBuilder } = require(`discord.js`);
class stats extends AvonCommand{
    get name(){
        return 'stats'
    }
    get aliases(){
        return ['st','St','Stats']
    }
    get cat(){
        return 'info'
    }
    async run(client,message,args,prefix){
        try{
            const servers = await client.shard.broadcastEval(c => c.guilds.cache.size).then(r => r.reduce((a, b) => a + b, 0))
            const users = await client.shard.broadcastEval(c => c.guilds.cache.filter(x => x.available).reduce((a, g) =>a + g.memberCount, 0)).then(r => r.reduce((acc, memberCount) => acc + memberCount, 0))
        let uptime = moment.duration(message.client.uptime).format(`D[days], H[hrs], m[mins], s[secs]`);
        let embed = new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| ${client.user.username} Information` , iconURL : client.user.displayAvatarURL()}).setDescription(
            `❯ **Name :** [${client.user.username}](https://discord.com/users/${client.user.id})
            ❯ **Servers :** ${servers} 
            ❯ **Users :** ${users}
            ❯ **Discord.js :** 14.7.1
            ❯ **Uptime :** ${uptime}`
        ).addFields([
            {name : `${client.emoji.owner} __OWNER__` , value : `[PN HARSH](https://discord.com/users/657108953167036416)`},
            {name : `${client.emoji.admin} __ADMIN__` , value : `[ARYAN](https://discord.com/users/960915785738518629) | [SHIVAM](https://discord.com/users/754271448562008104)`}
        ]).setThumbnail(client.user.displayAvatarURL()).setFooter({text : `Requested By : ${message.author.tag}` , iconURL : message.author.displayAvatarURL({dynamic : true})});

        let b1 = new ButtonBuilder().setStyle(ButtonStyle.Danger).setLabel(`${Math.round(client.ws.ping)} ms`).setDisabled(true).setCustomId(`lolok`);
        let b2 = new ButtonBuilder().setStyle(ButtonStyle.Danger).setLabel(`${users} Users`).setDisabled(true).setCustomId(`lolbhai`);
        let b3 = new ButtonBuilder().setStyle(ButtonStyle.Danger).setLabel(`${servers} Servers`).setDisabled(true).setCustomId(`bc`);

        let row = new ActionRowBuilder().addComponents(b3,b2,b1);

        return message.channel.send({embeds : [embed] , components : [row]});
    } catch(e) { console.error(e) }
    }
}
module.exports = stats;