/**
 * Created by 胡志甫 on 2017/8/15.
 */
const _=require('lodash');
const _model=require('../../models/action');
const limitSequelize = require('../../models/index').t_quota;
const cstBaseSequelize = require('../../models/index').t_cst_base_info;
const cstViceSequelize = require('../../models/index').t_cst_vice_info;
const channelSequelize = require('../../models/index').t_channel;
const codeSequelize = require('../../models/index').t_code;

module.exports = {

  init:  async function (req, res) {
    var body={code:'01',result:''};
    try{
      var current = req.body.current_page || 1;
      var page_size=req.body.page_size||10;
      var con = {
        include: [{
          model: cstBaseSequelize,
          required: true,
          as: 'base',
          attributes: ['id', 'cst_full_name', 'worker_amt'],
          where: {}
        }, {
          model: cstViceSequelize,
          required: true,
          as: 'vice',
          attributes: ['id', 'cst_credit_level'],
        }],
        attributes: ['id', 'company_id', 'available_credit', 'freezen_status',],
        limit: [(current - 1) * page_size, +page_size],
        where: {}
      }
      var codeCondition= {
        attributes:['code_value','code_name'],
        where: {
          code_type_cd: 'LimitStatusCd'
        }
      }
      //查询条件赋值
      req.body.credit_code && (con.where.company_id = req.body.credit_code);
      req.body.limit_status && (con.where.freezen_status = req.body.limit_status);
      if (req.body.cst_full_name) {
        con.include[0].where.cst_full_name = {$like: '%' + req.body.cst_full_name + '%'}
      }
      var result = await _model.findAndCountAll(limitSequelize, con);
      var status = await _model.findAll(codeSequelize, codeCondition);
      result.rows=result.rows.map((item)=>{
        item.freezen_status=_.result(_.find(status, { 'code_value': item.freezen_status+''}), 'code_name');
        return item;
      })
      body.result=result;
    }catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  },
  detail: async function (req, res, next) {
    var body={code:'01',result:''};
    try {
      var id = req.body.id;
      var condition = {
        include: [{
          model: cstBaseSequelize,
          required: true,
          as: 'base',
          attributes: ['cst_full_name', 'credit_code', 'reg_person', 'reg_num', 'reg_amt', 'main_biz', 'create_date', 'worker_amt', 'industry_type', 'firms_nature', 'company_email', 'pid', 'checkin_date', 'address', 'open_blank', 'business_term_start', 'business_term_end', 'place_type'],
        }, {
          model: cstViceSequelize,
          required: true,
          as: 'vice',
          attributes: ['cst_credit_level', 'credit_evaluate_date', 'credit_evaluate_date_out', 'credit_evaluate_org_out'],
        }],
        attributes: ['quotaId', 'company_id', 'freezen_status', 'approved_sum', 'already_used_amount', 'available_credit', 'credit_apply_create_time', 'credit_apply_expire_time', 'sys_credit'],
        where: {quotaId: id}
      }
      var condition1 = {
        attributes: ['legal_person_no', 'operator', 'operator_moblie_number', 'operator_person_no', 'operator_year'],
        where: {company_id: id}
      }
      var result = await _model.findOne(limitSequelize, condition);
      body.result=result;
    } catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  },
  limit_manager: async function (req, res, next) {//额度管理查询  页面
    var body={code:'01',result:''};
    try {
      var channelCondition= {
        attributes:['channel_no','name'],
      }
      var codeCondition= {
        attributes:['code_value','code_name'],
        where: {
          code_type_cd: 'LimitStatusCd'
        }
      }
      var channelList = await _model.findAll(channelSequelize,channelCondition);
      var status = await _model.findAll(codeSequelize, codeCondition);
      body.result={channelList,status};
    } catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  }
}
