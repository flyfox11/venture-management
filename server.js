/**
 * Created by 胡志甫 on 2017/8/22.
 */
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
const router=require('./server/routes');
var http = require('http');
var app = express();

//body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var port = process.env.PORT || 8081;
//session设置
app.use(session({
    secret: 'vue',
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 60 * 1000  //session过期时间
    },
    name: 'vue-project'
  }
));
// 將路由套用至應用程式
app.use('/api/v1', router);
var httpServer = http.createServer(app);
httpServer.listen(port, '0.0.0.0', function () {
  console.log('Vue BackEnd Server is running on: http://%s:%s', 'localhost', port);
});
httpServer.on('error', onError);
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  //处理特殊error 的友好信息
  switch (error.code) {
    case 'EACCES':
      console.error('requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('端口被占用!');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
