const { Translate } = require('../process_tools');

module.exports = async ({ inter, queue }) => {
  if (!queue?.isPlaying())
    return inter.editReply({
      content: await Translate(`Nessuna musica si sta producendo prova dopo <❌>`),
    });
  if (!queue.history.previousTrack)
    return inter.editReply({
      content: await Translate(`E la prima volta che vedo questo canale non e stata prodotta nessuna musica prima prova dopo <${inter.member}> <❌>`),
    });

  await queue.history.back();

  inter.editReply({
    content: await Translate(`Suonando <**scorsa**> musica <✅>`),
  });
};
