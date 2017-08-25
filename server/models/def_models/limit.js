/**
 * Created by 胡志甫 on 2017/8/7.
 */
module.exports = function (sequelize, DataTypes) {
    var t_quota = sequelize.define('t_quota', {
            approved_sum: {type: DataTypes.DECIMAL(16, 2), allowNull: true},
            available_credit: {type: DataTypes.DECIMAL(16, 2), allowNull: true},
            freezen_status: {type: DataTypes.INTEGER(4), allowNull: true},
            freezing_amount: {type: DataTypes.DECIMAL(16, 2), allowNull: true},
            company_id: {type: DataTypes.STRING(255), allowNull: true}
        },
        {
            associate: function (models) {
                t_quota.belongsTo(models.t_cst_base_info, {as: "base", foreignKey: "company_id", targetKey: 'id'});
                t_quota.belongsTo(models.t_cst_vice_info, {as: "vice", foreignKey: "company_id", targetKey: 'id'});
            }
        });
    return t_quota;
}