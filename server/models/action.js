/**
 * Created by 胡志甫 on 2017/8/15.
 */
const _model = module.exports = {};

_model.findAndCountAll = async function (sequelize, condition) {
  return await sequelize.findAndCountAll(condition);
}

_model.findAll = async function (sequelize, condition) {
  return await sequelize.findAll(condition);
}

_model.findOne = async function (sequelize, condition) {
  return await sequelize.findOne(condition)
}

_model.findById = async function (sequelize, id) {
  return await sequelize.findOne({
    where: {
      id: id
    }
  });
};
_model.create = async function (sequelize, model) {
  return await sequelize.create(model);
};

// UPDATE bannars_bannar SET rank=2 WHERE id IN ('0','1')
_model.update = async function (sequelize, setStatement, condition) {
  return await sequelize.update(setStatement, condition);
}

_model.deleteAll = async function (sequelize, condition) {
  return await sequelize.destroy(condition);
}

_model.insertAll = async function (sequelize, articles) {
  return await sequelize.bulkCreate(articles);
}
_model.count= async function (sequelize, condition) {
  return await sequelize.count(condition);
}

_model.build = function (sequelize,articles) {
  return sequelize.build(articles);
}
