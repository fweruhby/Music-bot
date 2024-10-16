module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || 'MTI5NDY3MDU3NzE3NjY3NDM4NA.G1O9SX.ZO2Bo5iB-URqQ_tZpwnCge2e5qvE-JG50AdkUs',
        playing: 'by the Community ❤️',
        global: true,
        guild: process.env.GUILD_ID || '1289604454047416404',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: false,
    },

    emojis:{
        'back': '⏪',
        'skip': '⏩',
        'ResumePause': '⏯️',
        'savetrack': '💾',
        'volumeUp': '🔊',
        'volumeDown': '🔉',
        'loop': '🔁',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
