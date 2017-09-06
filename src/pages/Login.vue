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
              <h4 class="title">风控管理系统<br/>
                <a href="#">
                  <small>@nuoyuan.com.cn</small>
                </a>
              </h4>
            </div>
            <br>
            <form id="defaultForm"  class="form-horizontal">
              <div class="form-group">
                <div class="col-lg-12">
                  <input type="text" class="form-control" id="userName" name="real_name" v-model="user.name" @keyup.enter="loginAction" placeholder="用户名"/>
                  <span class="help-block" id="userNameMessage"/>
                </div>
              </div>
              <div class="form-group">
                <div class="col-lg-12">
                  <input type="password" class="form-control" id="password" name="pwd" v-model="user.password"  @keyup.enter="loginAction" placeholder="密码"/>
                  <span class="help-block passwordMessage"/>
                </div>
              </div>
              <div class="form-group line_input_group">
                <div class="col-lg-12">
                </div>
                <div class="form-group text-center">
                  <div class="text-center">
                    <button type="button" class="btn btn-primary" @click="loginAction">登录</button>
                    <button type="button" class="btn btn-primary btn_reg" @click="registerAction">注册</button>
                  </div>
                  <br>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from 'fetch/api';
  export default {
    name: 'app',
    data () {
      return{
        user:{name:'',password:''},
        msg:''
      }
    },
    created(){
      if(this.$route.query.no_token){
        this.$alert('无令牌', '提示', {
          confirmButtonText: '确定'
        });
      }
    },
    methods:{
      loginAction:function () {
       /* this.user.router=this.$router; 测试vuex
        this.$store.dispatch('SAVE_NAME', this.user)*/
        api.Login(this.user)
          .then(res => {
            //this.msg=res.result;
            if(res.code=='01'){
              /*this.$router.replace('/readme');*/
              localStorage.setItem('ms_username',res.result.crealname);
              sessionStorage.setItem('venture-token',res.token);
              window.location='http://localhost:8080/home/';
            }else{
              this.$alert(res.result, '提示', {
                confirmButtonText: '确定'
              });
            }
          })
          .catch(error => {
            console.log(error)
          })
      },
      registerAction:function () {
        window.location='http://localhost:8080/register';
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
          .form-horizontal
            width: 400px
            margin-left: 75px
            .btn-primary
              width: 80px;
              &.btn_reg
                margin-left: 16px
</style>
