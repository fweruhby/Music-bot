const { Translate } = require('../process_tools');

module.exports = async ({ inter, queue }) => {
  if (!queue?.isPlaying())
    return inter.editReply({
      content: await Translate(`Nessuna musica attualmente in riproduzione... riprova ? <❌>`),
    });
  if (!queue.history.previousTrack)
    return inter.editReply({
      content: await Translate(`Non c'era musica suonata prima <${inter.member}> <❌>`),
    });

  await queue.history.back();

  inter.editReply({
    content: await Translate(`Riproduzione della traccia <**precedente**> <✅>`),
  });
};
