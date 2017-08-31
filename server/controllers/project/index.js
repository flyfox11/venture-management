/**
 * Created by 胡志甫 on 2017/8/29.
 */
const _model=require('../../models/action');
const codeSequelize = require('../../models/index').t_code;
const projectSequelize = require('../../models/index').t_project;
const channelSequelize = require('../../models/index').t_channel;
const channelProjectSequelize = require('../../models/index').t_channel_project;
module.exports = {
  init: async function (req, res, next) {
    var body={code:'01',result:''};
    try {
      var current = req.body.current_page || 1;
      var page_size=+req.body.page_size||10;
      var offset = (current - 1) * page_size;
      var param = {
        name: req.body.channel_name || '',
        project_name: req.body.project_name || '',
        project_status: req.body.project_status || '',
      };
      var condition = {
        include: [
          {
            model: projectSequelize,
            as: 'project',
            where: {
              project_name: {$like: `%${param.project_name}%`}
            }
          },
          {
            model: channelSequelize,
            as: 'channel',
            where: {
              name: {$like: `%${param.name}%`}
            }
          }
        ],
        limit: [offset, page_size]
      }
      if (!!param.project_status) {
        condition.include[0].where.project_status = param.project_status;
      }
      var result = await _model.findAndCountAll(channelProjectSequelize, condition);
      result.projectStatus = await _model.findAll(codeSequelize, {attributes:['code_value','code_name'],where: {code_type_cd: 'ProjectStatusCd'}})
      body.result=result;
    } catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  },
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
