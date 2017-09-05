<template>
  <div id="app" >
    <div>
      <div class="container">
        <div class="card card-user">

          <div class="image">
            <img src="../assets/img/background.jpg" alt="..."/>
          </div>
          <div class="content">
            <div class="author">
              <img class="avatar border-white" src="../assets/img/face.jpg" alt="..."/>
            </div>
            <el-form ref="registerForm" :model="user" :rules="rule">
              <el-form-item prop="name">
                <el-input v-model="user.name" placeholder="登陆名"></el-input>
              </el-form-item>
              <el-form-item prop="crealname">
                <el-input v-model="user.crealname" placeholder="真实姓名"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" v-model="user.password" placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item prop="repwd">
                <el-input type="password" v-model="user.repwd" placeholder="确认密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="registerAction" class="btn_reg">注册</el-button>
              </el-form-item>
            </el-form>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from 'fetch/api';
  export default {
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.user.repwd !== '') {
            this.$refs.registerForm.validateField('repwd');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.user.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return{
        user:{name:'',crealname:'',password:'',repwd:''},
        rule: {
          name: [
            { required: true, message: '请输入登陆名', trigger: 'blur' }
          ],
          crealname: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'change' }
          ],
          repwd: [
            { validator: validatePass2, trigger: 'change' }
          ]
        }
      }
    },
    computed:{
    },
    methods:{
      registerAction:function () {
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            api.Register(this.user)
              .then(res => {
                if(res.code=='01'){
                  window.location='http://localhost:8080/login';
                }else{
                  this.$alert(res.result, '提示', {
                    confirmButtonText: '确定'
                  });
                }
              })
              .catch(error => {
                console.log(error)
              })
          } else {
            return false;
          }
        });
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../static/bootstrap/css/paper-dashboard.css';
  @import '../../static/bootstrap/css/bootstrap.min.css';
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    &>div
      background-color: #707070
      .container
        width: 600px
        .card
          margin: 70px 0
          .el-form
          .el-form-item
            text-align:center
            width: 300px
            margin 20px auto
            .el-button
              background:#337ab7
              border-color: #2e6da4
              width: 80px
              &:hover
                background:#286090
                border-color: #204d74
</style>
