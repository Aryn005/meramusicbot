const AvonCommand = require("../../structures/avonCommand");
const { topggapi } = require(`../../../config.json`);
const badge = require(`./badges.json`);
const { EmbedBuilder } = require("discord.js");
class Badges extends AvonCommand{
    get name(){
        return 'profile';
    }
    get aliases(){
        return ['badges','badge','pr'];
    }
    get cat(){
        return 'info'
    }
    async run(client,message,args,prefix)
    {
        try{
        let user;
        
        let badges = '';
        let member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let guild = await client.guilds.fetch('1032934869677920306');
        user = await guild.members.fetch(member.id).catch((e) =>{ badges += `\`No Badges Available\` <a:badges:1083459822852259920>  \n You must be avaiable in our [support server](${client.config.server}) to get your badges\nConsider Joining Support server by clicking [here](${client.config.server})`;}) 

    
        try{
            let sys = user.roles.cache;
            if(sys.has(badge.owner)) badges += `\n ${client.emoji.owner} **Owner**`;
            if(sys.has(badge.admin)) badges += `\n ${client.emoji.admin} **Admin**`; 
            if(sys.has(badge.dev)) badges += `\n ${client.emoji.dev} **Management**`;
            if(sys.has(badge.codev)) badges += `\n ${client.emoji.codev} **Head Moderator**`;
            if(sys.has(badge.staff))badges += `\n ${client.emoji.staff} **Staff**`;
            if(sys.has(badge.supporter)) badges += `\n ${client.emoji.supporter} **Supporter**`;
            if(sys.has(badge.guild))badges += `\n ${client.emoji.guild} **Guild Member**`;
          if(sys.has(badge.vip)) badges += `\n ${client.emoji.vip} **Foreign Admin**`;
            if(sys.has(badge.friend)) badges += `\n ${client.emoji.friend} **Friends**`;
            if(sys.has(badge.bug)) badges += `\n ${client.emoji.bug} **Bug Hunter**`;
            
            if(badges === '') badges += `\n ${client.emoji.users} **User**`; }
            catch(e) { 
                badges = '`No Badges Available` <a:badges:1083459822852259920> \n You must be avaiable in our [support server](${client.config.server}) to get your badges\nConsider Joining Support server by clicking [here](${client.config.server})';
            }
        
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `Profile for ${member.tag}`}).addFields({name : `__BADGES__ <a:badges:1083459822852259920> ` , value : `${badges}`}).setThumbnail(member.displayAvatarURL({dynamic : true}))]})
    } catch(e) { 
        console.log(e)
        let badges = '';
        badges = `\`No Badges Available\` <a:badges:1083459822852259920>  \n You must be avaiable in our [support server](https://discord.gg/pronation}) to get your badges\nConsider Joining Support server by clicking [here](https://discord.gg/pronation})`;
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`__**BADGES**__ \n \No Badges Available\` <a:badges:1083459822852259920>  \n You must be avaiable in our [support server](https://discord.gg/pronation}) to get your badges\nConsider Joining Support server by clicking [here](https://discord.gg/pronation})`).setThumbnail(message.author.displayAvatarURL({dynamic : true}))]})
    }
}
}
module.exports = Badges;