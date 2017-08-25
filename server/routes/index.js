const express=require('express');
// 建立 Router 物件
const router = express.Router();

// 在每一個請求被處理之前都會執行的 middleware
router.use(function(req, res, next) {

  // 輸出記錄訊息至終端機
  console.log(req.method, req.url);

  // 繼續路由處理
  next();
});

const commonRouter = require('./common')(router);
const userRouter = require('./user')(router);
const limitRouter = require('./limit')(router);
module.exports=router;
