/**
 * Created by 胡志甫 on 2017/8/15.
 */
const _model=require('../../models/action');
const userSequelize=require('../../models/index').control_user;
module.exports = {

  init:  async function (req, res) {
    var body={code:'01',result:''};
    try{
      var result=await _model.findAll(userSequelize);
      body.result=result;
    }catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  },
  detail:function (req,res,next) {
    res.json('这里是用户详情!');
  }
}
