/**
 * Created by 胡志甫 on 2017/8/15.
 */
const _model=require('../../models/action');
const limitSequelize = require('../../models/index').t_quota;
const cstBaseSequelize = require('../../models/index').t_cst_base_info;
const cstViceSequelize = require('../../models/index').t_cst_vice_info;
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
        }, {
          model: cstViceSequelize,
          required: true,
          as: 'vice',
          attributes: ['id', 'cst_credit_level'],
        }],
        attributes: ['id', 'company_id', 'available_credit', 'freezen_status',],
        limit: [(current - 1) * page_size, +page_size],
      }
      var result = await _model.findAndCountAll(limitSequelize, con);
      body.result=result;
    }catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  }
}
