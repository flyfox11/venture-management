<template>
    <!--项目管理查询页面-->
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 项目管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="query_container">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="合作渠道">
                    <el-input v-model="form.channel_name"></el-input>
                </el-form-item>
                <el-form-item label="项目名称">
                    <el-input v-model="form.project_name"></el-input>
                </el-form-item>
                <el-form-item label="项目状态">
                    <el-select v-model="form.project_status" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.code_value"
                          :label="item.code_name"
                          :value="item.code_value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit"><i class="iconfont icon-search"></i>查询</el-button>
                    <el-button  class="cancel" @click="onReset"><i class="iconfont icon-reset"></i>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import api from 'fetch/api';
    export default {
        data () {
            return{
                options: [
                {
                  code_value: '',
                  code_name: '全部'
                }],
                form: {
                    channel_name: '',
                    project_name: '',
                    project_status: '',
                }
            }
        },
        created(){
          api.GetProjectStatus()
            .then(res => {
              if(res.code=='01'){
                this.options=[{code_value: '', code_name: '全部'}].concat(res.result);
              }else{
                this.$alert(res.result, '提示', {
                  confirmButtonText: '确定'
                });
              }
            })
            .catch(error => {
              console.log(error)
            });
        },
        methods:{
            onSubmit() {
                this.$router.push({path:'/projectList',query:this.form});
            },
            onReset(){
              this.form={
                channel_name: '',
                project_name: '',
                project_status: ''
              };
            }
        }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

    .query_container
        padding-top: 50px
        .el-form-item
            margin: 30px auto;
            width: 400px
            .el-select
                width: 320px
            .iconfont{
                font-size 14px
                padding-right:4px
            }


</style>
