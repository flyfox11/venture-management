<template>
    <div class="header">
        <div class="logo"><i class="iconfont icon-manager1"></i>风险管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../static/img/img.jpg">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    import '../../static/css/theme-green/index-purple.css';
    import "../../static/css/main.css";
    import "../../static/css/theme-green/color-purple.css";   /*紫色主题*/
    export default {
        data() {
            return {
                name: '胡志甫'
            }
        },
        created() {

        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    /*this.$router.push('/login');*/
                    window.location='http://localhost:8080/';
                }
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .header
        position: relative
        box-sizing: border-box
        width: 100%
        height: 70px
        font-size: 22px
        line-height: 70px
        color: #fff
        .logo
            float: left
            width:250px
            text-align: center
            .icon-manager1
                font-size: 22px
                margin-right: 20px
        .user-info
            float: right
            padding-right: 50px
            font-size: 16px
            color: #fff
            .el-dropdown-link
                position: relative
                display: inline-block
                padding-left: 50px
                color: #fff
                cursor: pointer
                vertical-align: middle
                .user-logo
                    position: absolute
                    left:0
                    top:15px
                    width:40px
                    height:40px
                    border-radius: 50%
            .el-dropdown-menu__item
                text-align: center
</style>
