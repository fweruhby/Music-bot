const { EmbedBuilder } = require('discord.js');
const { Translate } = require('../process_tools');

module.exports = async ({ inter, queue }) => {
    if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`Nessuna musica attualmente in riproduzione... riprovare?<❌>`) });

    const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle(`:arrow_forward: ${queue.currentTrack.title}`)
        .setURL(queue.currentTrack.url)
        .addFields(
            { name: await Translate('Duration <:hourglass:>'), value: `\`${queue.currentTrack.duration}\``, inline: true },
            { name: await Translate('Song by:'), value: `\`${queue.currentTrack.author}\``, inline: true },
            { name: await Translate('Views <:eyes:>'), value: `\`${Number(queue.currentTrack.views).toLocaleString()}\``, inline: true },
            { name: await Translate('Song <URL>:'), value: `\`${queue.currentTrack.url}\`` }
        )
        .setThumbnail(queue.currentTrack.thumbnail)
        .setFooter({ text: await Translate(`From the server <${inter.member.guild.name}>`), iconURL: inter.member.guild.iconURL({ dynamic: false }) });

    inter.member.send({ embeds: [embed] })
        .then(async () => {
            return inter.editReply({ content: await Translate(`Ti ho inviato il titolo della musica tramite messaggio privato <✅>`) });
        }).catch(async (error) => {
            console.error(error);
            return inter.editReply({ content: await Translate(`Impossibile inviarti un messaggio privato... riprovare? <❌>`) });
        });
}
