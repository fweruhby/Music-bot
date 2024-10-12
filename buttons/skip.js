const { Translate } = require("../process_tools");

module.exports = async ({ inter, queue }) => {
    if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`Nessuna musica attualmente in riproduzione... riprovare? <❌>`) });

    const success = queue.node.skip();

    return inter.editReply({ content: success ? await Translate(`Current music <${queue.currentTrack.title}> skipped <✅>`) : await Translate(`Qualcosa e andato storto <${inter.member}>... try again ? <❌>`) });
}
