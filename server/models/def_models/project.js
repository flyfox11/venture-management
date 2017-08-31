module.exports = function (sequelize, DataTypes) {
    var t_project = sequelize.define('t_project', {
        id: {type: DataTypes.INTEGER(20), allowNull: false, primaryKey: true, autoIncrement: true, comment: '主键ID'},
        project_no: {type: DataTypes.STRING(255), allowNull: true},
        project_name: {type: DataTypes.STRING(255), allowNull: true},
        project_status: {type: DataTypes.INTEGER(11), allowNull: true},
        project_line_time: {type: DataTypes.STRING(255), allowNull: true},
        project_down_time: {type: DataTypes.STRING(255), allowNull: true},
        project_approved_sum: {type: DataTypes.DECIMAL(16, 2), allowNull: true},
        project_available_credit: {type: DataTypes.DECIMAL(16, 2), allowNull: true},
        createUser: {type: DataTypes.STRING(20), allowNull: true},
        createTime: {type: DataTypes.STRING(50), allowNull: true},
        project_oper_down_time: {type: DataTypes.STRING(255), allowNull: true},
        project_update_time: {type: DataTypes.STRING(255), allowNull: true}
    }, {
        associate: function (models) {
            t_project.hasMany(models.t_channel_project, {
                as: 'channelProject',
                foreignKey: 'project_id',
                targetKey: 'project_no',
                contarints: false
            });
        }
    });
    return t_project;
}