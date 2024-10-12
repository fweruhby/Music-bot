const { Translate } = require('../process_tools');

module.exports = async ({ inter, queue }) => {
    if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`Nessuna musica attualmente in riproduzione... riprovare? <❌>`) });

    const resumed = queue.node.resume();
    let message = await Translate(`Current music <${queue.currentTrack.title}> ripreso <✅>`);

    if (!resumed) {
        queue.node.pause();
        message = await Translate(`Current music <${queue.currentTrack.title}> messo in pausa <✅>`);
    }

    return inter.editReply({ content: message });
}
