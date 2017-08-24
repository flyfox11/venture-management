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
  login: async function (req, res, next) {
    var body={code:'01',result:''};
    try {
      var condition = {
        attributes:['name','password','crealname'],
        where: {
          name: req.body.name
        }
      }
      var user = await _model.findOne(userSequelize, condition);
      if (!!user) {
        if (req.body.password === user.password) {
          body.result=user;//user;
        } else {
          body.code='02';
          body.result='密码输入有误';
        }
      } else {
        body.code='02';
        body.result='用户不存在';
      }
    } catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  },
}
