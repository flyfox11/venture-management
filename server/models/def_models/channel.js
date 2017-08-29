module.exports = function (sequelize, DataTypes) {
    var t_channel = sequelize.define('t_channel', {
        id: {type: DataTypes.INTEGER(20), allowNull: false, primaryKey: true, autoIncrement: true, comment: '主键ID'},
        channel_no: {type: DataTypes.STRING(255), allowNull: true},
        name: {type: DataTypes.STRING(50), allowNull: true},
        org_cd: {type: DataTypes.STRING(255), allowNull: true},
        channel_approved_sum: {type: DataTypes.DECIMAL(16, 2), allowNull: true},
        channel_available_credit: {type: DataTypes.DECIMAL(16, 2), allowNull: true}
    },{

    });
    return t_channel;
}