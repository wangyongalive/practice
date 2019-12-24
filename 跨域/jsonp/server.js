'use strict';
//通过require将http库包含到程序中
let http = require('http');
//引入url模块解析url字符串
let url = require('url');
//引入querystring模块处理query字符串
let querystring = require('querystring');
//创建新的HTTP服务器
let server = http.createServer();
// 通过request事件来响应request请求
server.on('request', function (req, res) {
    let urlPath = url.parse(req.url).pathname; // /jsonp
    let qs = querystring.parse(req.url.split('?')[1]); // {callback: 'monkey' }
    let fn = Object.values(qs)[0]; // 回调函数名money
    if (urlPath === '/jsonp' && fn) {
        res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
        let data = {
            "name": "Monkey"
        };
        data = JSON.stringify(data);
        let callback = fn + '(' + data + ');';
        // let callback111 = 'monkey' + '(' + data + ');'; //
        res.end(callback);
    } else {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        res.end('Hell World\n');
    }
});
//监听8080端口
server.listen('8080');
//用于提示我们服务器启动成功
console.log('Server running!');
