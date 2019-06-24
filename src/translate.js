const rp = require('request-promise');
const credentials = require('../credentials');
const MD5 = require('js-md5');
const appId = credentials.youdao.appid;
const appKey = credentials.youdao.key;
const from = 'auto';
const to = 'zh-CHS';

module.exports = async (str) => {
    const salt = (new Date).getTime();
    const query = str.replace(/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/g, '');
    const str1 = appId + query + salt + appKey;
    const sign = MD5(str1);
    
    return new Promise((resolve, reject) => {
        rp.get('https://openapi.youdao.com/api', {
            qs: {
                q: query,
                from: from,
                to: to,
                appKey: appId,
                salt: salt,
                sign: sign,
            },
            json: true
        }).then(data => {
            if(data.errorCode === '0'){
                resolve(data.translation[0]);
            }else{
                reject('翻译出错');
            }
        }).catch(reject)
    })
}