const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const AvonCommand = require("../../structures/avonCommand");

class Invite extends AvonCommand{
    get name(){
        return 'invite'
    }
    get aliases(){
        return 'inv'
    }
    get cat(){
        return 'info';
    }
    async run(client,message,args,prefix)
    {
        let e = new EmbedBuilder().setColor(client.config.color).setDescription(`Click [here](https://discord.com/api/oauth2/authorize?client_id=1081560704039010354&permissions=8&scope=bot) to [invite](https://discord.com/api/oauth2/authorize?client_id=1081560704039010354&permissions=8&scope=bot) me`);
        let r = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setStyle(ButtonStyle.Link).setURL(`https://discord.com/api/oauth2/authorize?client_id=1081560704039010354&permissions=8&scope=bot`).setLabel(`Invite`)
        )
        return message.channel.send({embeds : [e] , components : [r]});
    }
}
module.exports = Invite;