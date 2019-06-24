# rsshub2qq

> 基于酷Q制作的 RSSHub QQ群推送机器人，用于订阅RSSHub的更新并转发到QQ群

## 使用

下载酷 Q，文中使用的是酷 Q Pro 版本。然后安装 HTTP API 插件

申请一个 [有道翻译的 API](http://ai.youdao.com/?keyfrom=fanyi-new-nav)

### credentials.js 相关配置

在根目录新建一个 credentials.js 文件，内容为

```javascript
module.exports = {
    // 酷Q授权
    accessToken: 'mikutoken',
    secret: 'mikuqwq',
    rsshub: 'http://rsshub.app',
    // 有道翻译
    youdao: {
        appid: '',
        key: ''
    }
}
```

### HTTP API 的相关配置

依次进入 `\酷Q Pro\app\io.github.richardchien.coolqhttpapi\config` 目录，编辑对应的 json 文件（bot的QQ号.json）。用以下内容覆盖，`access_token` 和 `secret` 记得自己修改

```json
{
    "host": "0.0.0.0",
    "port": 5700,
    "use_http": true,
    "ws_host": "0.0.0.0",
    "ws_port": 6700,
    "use_ws": false,
    "post_url": "http://127.0.0.1:8989",
    "access_token": "mikutoken",
    "secret": "mikuqwq",
    "post_message_format": "string",
    "serve_data_files": true,
    "update_source": "github",
    "update_channel": "stable",
    "auto_check_update": false,
    "auto_perform_update": false,
    "show_log_console": true,
    "log_level": "info"
}
```

### 添加订阅信息

打开 `db/rss.json` 文件，添加需要订阅推送的内容

```json
{
    "Twitter-Ice_Hazymoon": { // 订阅名称
        "url": "/twitter/user/Ice_Hazymoon", // rsshub 路由
        "group": [ // 要推送的群组
            117474650
        ],
        "translate": false, // 是否启用翻译
        "proxy": true // 是否启用代理（主机为国内服务器，推送地址为国外时可以用到，比如Twitter），使用 http://127.0.0.1:1080 作为代理
    }
}
```

### 运行

```bash
$ yarn install # or npm install
$ node index
```

## 其他

- 使用了 RSSHub 来实现订阅功能
- 推荐使用 supervisor 模块，炸了可以自动重启
- 虽然 酷 Q Air 也能用，但不能发图，未测试过
- 推荐使用有道或者Google翻译，百度翻译效果不是很好，可以自行修改 `src/translate.js` 文件
- 可能有很多 bug，慢慢修复
- [imiku.me/2018/10/16/1230.html](https://imiku.me/2018/10/16/1230.html)
