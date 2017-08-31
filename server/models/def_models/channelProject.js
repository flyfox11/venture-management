module.exports = function (sequelize, DataTypes) {
    var t_channel_project = sequelize.define('t_channel_project', {
        id: {type: DataTypes.BIGINT(20), allowNull: false, primaryKey: true, autoIncrement: true, comment: '主键ID'},
        channel_id: {
            type: DataTypes.STRING(20),
            allowNull: true,
            references: {model: 't_channel', key: 'channel_no'}
        },
        org_cd: {
            type: DataTypes.STRING(255),
            allowNull: true,
            references: {model: 't_project', key: 'project_no'}
        },
        project_id: {type: DataTypes.STRING(20), allowNull: true}
    }, {
        associate: function (models) {
            t_channel_project.belongsTo(models.t_project, {
                as: 'project',
                foreignKey: 'project_id',
                targetKey: 'project_no',
                contarints: false
            });
            t_channel_project.belongsTo(models.t_channel, {
                as: 'channel',
                foreignKey: 'channel_id',
                targetKey: 'channel_no',
                contarints: false
            })
        }
    });
    return t_channel_project
}