const express=require('express');
// 建立 Router 物件
const router = express.Router();

// 在每一个请求被处理之前都会执行的middleware
router.use(function(req, res, next) {

  // 输出记录信息
  console.log(req.method, req.url);

  // 继续路由处理
  next();
});

const userRouter = require('./user')(router);
const limitRouter = require('./limit')(router);
module.exports=router;
