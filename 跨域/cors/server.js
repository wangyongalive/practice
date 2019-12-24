var http = require('http');
var server = http.createServer();

server.on('request', function (req, res) {
    // 跨域后台设置
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',    // 允许访问的域（协议+域名+端口）
    });
    let data = {
        'key': '2233'
    };
    res.end(JSON.stringify(data));
});

server.listen('8080');
console.log('Server is running at port 8080...');
