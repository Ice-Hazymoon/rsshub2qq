const CQHttp = require('cqhttp');
const credentials = require('../credentials');

const bot = new CQHttp({
    apiRoot: 'http://127.0.0.1:5700/',
    accessToken: credentials.accessToken,
    secret: credentials.secret
});

bot.listen(8989, '127.0.0.1');

module.exports = bot;