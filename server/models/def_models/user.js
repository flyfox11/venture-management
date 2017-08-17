/**
 * Created by apple on 16/4/20.
 */

module.exports = function (sequelize, DataTypes) {
    var control_user = sequelize.define('control_user',{
        id: {type: DataTypes.INTEGER(10), allowNull: false, primaryKey: true,autoIncrement:true,comment: '主键ID'},
        name:{type:DataTypes.STRING(255),allowNull:true},
        password:{type:DataTypes.STRING(255),allowNull:true},
        crealname:{type:DataTypes.STRING(255),allowNull:true},
    });
    return control_user;
}
