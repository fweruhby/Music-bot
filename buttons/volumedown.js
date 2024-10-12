const { Translate } = require('../process_tools');

const maxVol = client.config.opt.maxVol;

module.exports = async ({ inter, queue }) => {
    if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`Nessuna musica attualmente in riproduzione... riprovare? <❌>`) });

    const vol = Math.floor(queue.node.volume - 5);
    if (vol < 0) return inter.editReply({ content: await Translate(`La musica e al massimo bassa <${inter.member}> <❌>`) });
    if (queue.node.volume === vol) return inter.editReply({ content: await Translate(`Il volume che desideri modificare è già quello attuale <${inter.member}> <❌>`) });

    const success = queue.node.setVolume(vol);
    return inter.editReply({ content: success ? await Translate(`Il vulume è <${vol}/${maxVol}% 🔊>`) : await Translate(`Qualcosa e andato storto <${inter.member}> <❌>`) });
}
