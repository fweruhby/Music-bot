const { EmbedBuilder } = require('discord.js');
const { Translate } = require('../process_tools');

module.exports = async ({ inter, queue }) => {
    if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`No music currently playing... try again ? <❌>`) });

    queue.delete();

    const embed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({ name: await Translate(`Musica tolta <✅>`) });

    return inter.editReply({ embeds: [embed] });
}
