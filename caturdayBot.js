const Discord = require("discord.js");
const client = new Discord.Client();
const random_imgs = [
'https://imgur.com/gallery/j8ywN',
'https://imgur.com/gallery/xGmX4h3',
'https://imgur.com/gallery/KgbPCfF',
'https://imgur.com/gallery/OZyQRz5',
'https://imgur.com/gallery/zqXA1WZ',
'https://imgur.com/gallery/4clqUdj',
'https://imgur.com/gallery/elito1b',
'https://imgur.com/gallery/U7vFDsE',
'https://imgur.com/gallery/7RhNqvY',
'https://imgur.com/gallery/XTkLM1i',
'https://imgur.com/gallery/pbZdUIX',
'https://imgur.com/gallery/1xYmW1N',
'https://imgur.com/gallery/BtKggd4',
'https://imgur.com/gallery/B0D4iRk',
'https://imgur.com/gallery/fXj5Kql',
'https://imgur.com/gallery/zBafBpU',
'https://imgur.com/gallery/vYaQ94n',
'https://imgur.com/gallery/1EmyQac',
'https://imgur.com/gallery/u0viHeR',
'https://imgur.com/gallery/KH8fCJb',
'https://imgur.com/gallery/rsUgPL0',
'https://imgur.com/gallery/tky8J2Z',
'https://imgur.com/gallery/IIctNxU',
'https://imgur.com/gallery/7XmMiF1',
'https://i.imgur.com/jApfYVP.jpg',
'https://i.imgur.com/9p1pSUw.jpg',
'https://imgur.com/gallery/ZK2nOWX',
'https://imgur.com/gallery/XiyeGgN',
'https://imgur.com/gallery/NOrOSLS',
'https://imgur.com/gallery/DYJDOjU',
'https://imgur.com/gallery/0oWQjsm'
];


client.on("ready", () => {
    console.log("ready");
});

client.on("message", (message) => {
    if (message.content.startsWith("!caturday")) {
        message.channel.send("Have a cat!:\n" + random_imgs[Math.floor(Math.random() * random_imgs.length)]
        );
    }
});

client.login("")