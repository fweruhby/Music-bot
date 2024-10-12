const { EmbedBuilder } = require('discord.js');
const { Translate } = require('../process_tools');

module.exports = async ({ inter, queue }) => {
    if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`Nessuna musica attualmente in riproduzione... riprovare? <❌>`) });
    if (!queue.tracks.toArray()[0]) return inter.editReply({ content: await Translate(`Nessuna musica in coda dopo quella corrente <${inter.member}> <❌>`) });

    await queue.tracks.shuffle();

    const embed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({ name: await Translate(`Queue shuffled <${queue.tracks.size}> song(s)! <✅>`) });

    return inter.editReply({ embeds: [embed] });
}
