module.exports = function(serverConfig) {

  // var fs = require('fs');
  var path = require('path');
  var http = require('http');
  // var https = require('https');
  var chalk = require('chalk');
  var portFinder = require('portfinder');
  var compression = require('compression')

  var express = require('express');
  var app = express();

  // 是否启用 gzip
  serverConfig.useGzip && app.use(compression())

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

  portFinder.basePort = serverConfig.port;
  portFinder.getPort(function(err, port){
    if(err){
      console.log('查找空闲端口失败：', err);
    }else{
      // 使用server监听端口
      server.listen(port, function () {
        console.log(chalk.cyan('服务器静态资源路径为:'));

        serverConfig.staticDirs.forEach(function (dir) {
          console.log('  ' + path.resolve(dir) + '/');
        })
        serverConfig.useGzip && console.log('\n' + chalk.yellow(`已开启 Gzip`))
        console.log('\n' + chalk.green(protocol + '-server lauched at ' + protocol + '://localhost:%s'), port);
      })
    }
  })
}
