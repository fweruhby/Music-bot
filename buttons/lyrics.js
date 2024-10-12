const { EmbedBuilder } = require('discord.js');
const { useMainPlayer } = require('discord-player');
const { Translate } = require('../process_tools');

module.exports = async ({ inter, queue }) => {
    const player = useMainPlayer();
    if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`Nessuna musica attualmente in riproduzione <${inter.member}> <❌>`) });

    const results = await player.lyrics
        .search({
            q: queue.currentTrack.title
        })
        .catch(async (e) => {
            console.log(e);
            return inter.editReply({ content: await Translate(`Errore! Contatta gli sviluppatori! | <❌>`) });
        });

    const lyrics = results?.[0];
    if (!lyrics?.plainLyrics) return inter.editReply({ content: await Translate(`Nessun testo trovato per <${queue.currentTrack.title}> <❌>`) });

    const trimmedLyrics = lyrics.plainLyrics.substring(0, 1997);

    const embed = new EmbedBuilder()
        .setTitle(`Lyrics for ${queue.currentTrack.title}`)
        .setAuthor({
            name: lyrics.artistName
        })
        .setDescription(trimmedLyrics.length === 1997 ? `${trimmedLyrics}...` : trimmedLyrics)
        .setFooter({ text: await Translate('La musica viene prima di tutto - Realizzata con cuore dalla Community <❤️>'), iconURL: inter.member.avatarURL({ dynamic: true }) })
        .setTimestamp()
        .setColor('#2f3136');

    return inter.editReply({ embeds: [embed] });
}
