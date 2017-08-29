/**
 * Created by 胡志甫 on 2017/8/29.
 */
const _model=require('../../models/action');
const codeSequelize = require('../../models/index').t_code;
module.exports = {

  getProjectStatus:  async function (req, res) { //获取项目状态列表
    var body={code:'01',result:''};
    try{
      var condition={
        attributes:['code_value','code_name'],
        where: {code_type_cd: 'ProjectStatusCd'}
      };
      var result = await _model.findAll(codeSequelize, condition);
      body.result=result;
    }catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  },
}
