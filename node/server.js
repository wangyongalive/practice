// node常用的内置模块
var http = require("http"),
    fs = require("fs"),
    url = require("url"); // 解析url地址

// HTTP
var server = http.createServer(function (request, res) {
    // 当客服端向当前服务器发送请求时候执行
    // request 请求信息
    // response 响应信息
    var urlObj = url.parse(request.url, true),
        pathName = urlObj.pathname,
        query = urlObj.query;

    // 前端路由
    var reg = /\.(HTML|JS|CSS|JSON|TXT|ICO)/i;
    if (reg.test(pathName)) {
        // 获取后缀名
        var suffix = reg.exec(pathName)[1].toUpperCase();
        // 根据请求文件的后缀名获取对应文件的MIME
        var suffixMIME = "text/plain";
        switch (suffix) {
            case "HTML":
                suffixMIME = "text/html";
                break;
            case "CSS":
                suffixMIME = "text/css";
                break;
            case "JS":
                suffixMIME = "text/javascript";
                break;
            case "JSON":
                suffixMIME = "application/json";
                break;
            case "ICO":
                suffixMIME = "image/x-icon";
                break;
        }
        try {
            var con = fs.readFileSync("." + pathName, "utf-8");
            // 重写响应头信息
            res.writeHead(200, {'content-type': suffixMIME + ";charset=utf-8;"});
            res.end(con);
        } catch (e) {
            res.writeHead(404, {'content-type': "text/plain;charset=utf-8;"});
            res.end("request file in not find");
        }
    }


});
server.listen(80, function () {
    // 当端口号监听成功后执行
    console.log("server is create success, listening 80");
}); // 监听端口80


