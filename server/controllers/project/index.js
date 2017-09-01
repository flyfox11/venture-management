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
  add: async function (req, res, next) {
    var body={code:'01',result:''};
    try {
      var param = {
        channel_no: req.body.channel,
        project_line_time: req.body.project_line_time.substr(0,10),
        project_approved_sum: req.body.project_approved_sum,
        project_available_credit: req.body.project_available_credit,
        project_name: req.body.project_name,
        project_status: req.body.project_status,
        project_down_time: req.body.project_down_time.substr(0,10),
        createUser: 'hxf',
        createTime: req.body.project_line_time.substr(0,10),
        project_no: Math.random()*0xffffffffffffff
      }
      var channel = await _model.findOne(channelSequelize, {where: {channel_no: param.channel_no}});
      channel=channel||{};
      var project = await _model.create(projectSequelize, param);
      var channelProject = await _model.create(channelProjectSequelize, {
        channel_id: channel.channel_no,
        org_cd: channel.org_cd,
        project_id: project.project_no
      })
      body.result=channelProject?'添加项目成功':'添加项目失败';
    } catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  },
  getProject: async function (req, res, next) {
    var body={code:'01',result:''};
    try {
      var project_no = req.body.project_no;
      var condition = {
        include: [
          {
            model: projectSequelize,
            as: 'project',
            where: {
              project_no: project_no
            }
          }
        ]
      };
      body.result= await _model.findOne(channelProjectSequelize, condition);
    } catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  },
  update: async function (req, res, next) {
    var body={code:'01',result:''};
    try {
      var param = {
        channelProjectId: req.body.channelProjectId,
        channel_no: req.body.channel,
        project_line_time: req.body.project_line_time.substr(0,10),
        project_approved_sum: req.body.project_approved_sum,
        project_available_credit: req.body.project_available_credit,
        project_name: req.body.project_name,
        project_status: req.body.project_status,
        project_down_time: req.body.project_down_time.substr(0,10)
      }
      var channelData = await _model.findOne(channelSequelize, {where: {channel_no: param.channel_no}});
      var channelProjectData = await _model.update(channelProjectSequelize, {
        channel_id: param.channel_no,
        org_cd: channelData.org_cd
      }, {where: {id: param.channelProjectId}})

      if (param.project_status * 1 == 3) {
        param.project_oper_down_time = param.project_line_time
      } else {
        param.project_update_time = param.project_line_time
      }
      var projectData = await _model.update(projectSequelize, param, {where: {project_no: req.body.project_no}});
      body.result=projectData?'项目修改成功':'项目修改失败';
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
  getChannelStatus:  async function (req, res) { //获取渠道列表
    var body={code:'01',result:''};
    try{
      var channelCondition= {
        attributes:['channel_no','name'],
      }
      var result = await _model.findAll(channelSequelize,channelCondition);
      body.result=result;
    }catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  },
}
