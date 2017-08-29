/**
 * Created by 胡志甫 on 2017/8/7.
 */
module.exports = function (sequelize, DataTypes) {
    var t_code = sequelize.define('t_code',{
        id: {type: DataTypes.INTEGER(20), allowNull: false, primaryKey: true,comment: '主键ID'},
        code_key_cd:{type:DataTypes.STRING(40),allowNull:false},
        code_type_cd:{type:DataTypes.STRING(40),allowNull:false},
        code_value:{type:DataTypes.STRING(20),allowNull:true},
        code_name:{type:DataTypes.STRING(100),allowNull:true},
        description:{type:DataTypes.STRING(25),allowNull:true},
    });
    return t_code;
}