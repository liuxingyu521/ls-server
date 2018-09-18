module.exports = function(serverConfig) {

  // var fs = require('fs');
  var path = require('path');
  var http = require('http');
  // var https = require('https');

  var express = require('express');
  var app = express();

  // 默认处理当前指定文件夹下的静态文件
  serverConfig.staticDirs.forEach(function(dir){
    app.use(express.static(path.resolve(dir)));
  })

  var protocol = serverConfig.useHttps ? 'https' : 'http';

  var server;

  // if(serverConfig.useHttps){
  //   // 私钥 和 证书文件
  //   var privateKey = fs.readFileSync('./certificate/private.pem', 'utf8');
  //   var certificate = fs.readFileSync('./certificate/custom.crt', 'utf8');
  //   // https-server options
  //   var credentials = {
  //     key: privateKey,
  //     cert: certificate
  //   }
  //   // 创建 https-server
  //   server = https.createServer(credentials, app);
  // }else{
    server = http.createServer(app);
  // }


  // 使用express（相当于中间件）处理请求
  app.get('/', function(req, res){
      res.status(200);
      res.send('<h1>welcome to ' + protocol + ' server...');
      res.end();
  })

  // 使用server监听端口
  server.listen(serverConfig.port, function () {
    console.log(protocol + '-server lauched at ' + protocol + '://localhost:%s', serverConfig.port);
  })
}
