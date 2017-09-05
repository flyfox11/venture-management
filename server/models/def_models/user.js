/**
 * Created by apple on 16/4/20.
 */
var bcrypt=require("bcrypt-nodejs");
module.exports = function (sequelize, DataTypes) {
    var control_user = sequelize.define('control_user',{
        id: {type: DataTypes.INTEGER(10), allowNull: false, primaryKey: true,autoIncrement:true,comment: '主键ID'},
        name:{type:DataTypes.STRING(255),allowNull:true},
        password:{type:DataTypes.STRING(255),allowNull:true,
          set: function (val) {
              // 进行加密（加盐）

              /* 异步方式
               var self=this;
              bcrypt.genSalt(10, function(err, salt){
                if(err){
                  self.setDataValue('password', val);
                }
                bcrypt.hash(val, salt, null,function(err, hash){
                  if(err){
                    self.setDataValue('password', val);
                  }
                  self.setDataValue('password', hash);
                })
              });*/
              var salt=bcrypt.genSaltSync(10);
              var hash=bcrypt.hashSync(val,salt);
              this.setDataValue('password', hash);
          },
        },
        crealname:{type:DataTypes.STRING(255),allowNull:true},
    },{
      hooks: {
        beforeCreate: function (user, options) {
          user.crealname='客户:'+user.crealname;
        }
      }
    });
    return control_user;
}
