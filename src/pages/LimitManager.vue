<template>
    <!--额度管理查询页面-->
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 额度管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="query_container">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="所属渠道">
                    <el-select v-model="form.channel" placeholder="请选择">
                        <el-option
                                v-for="item in channel_options"
                                :key="item.channel_no"
                                :label="item.name"
                                :value="item.channel_no">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="信用代码">
                    <el-input v-model="form.credit_code"></el-input>
                </el-form-item>
                <el-form-item label="企业名称">
                    <el-input v-model="form.cst_full_name"></el-input>
                </el-form-item>
                <el-form-item label="额度状态">
                    <el-select v-model="form.limit_status" placeholder="请选择">
                        <el-option
                                v-for="item in limit_options"
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
                form: {
                    credit_code: '',
                    cst_full_name: '',
                    channel:'',
                    limit_status:'',
                },
                channel_options: [
                    {
                        code_value: '',
                        code_name: '所有'
                    }],
                limit_options: [
                    {
                        code_value: '',
                        code_name: '全部'
                    }],
            }
        },
        created(){
            api.GetLimitManager()
                    .then(res => {
                        if(res.code=='01'){
                            this.channel_options=[{channel_no: '', name: '所有'}].concat(res.result.channelList);
                            this.limit_options=[{code_value: '', code_name: '全部'}].concat(res.result.status);
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
              this.$router.push({path:'/limitList',query:this.form});
            },
            onReset(){
                this.form={
                    credit_code: '',
                    cst_full_name: '',
                    channel:'',
                    limit_status:'',
                }
                //this.$refs.form.resetFields(); 这种重置方法不行，只能在表单验证中使用
            }
        }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

    .query_container
        padding-top: 50px
        .el-form-item
            margin: 30px auto
            width: 400px
            .el-select
                width: 320px
            .iconfont{
                font-size 14px
                padding-right:4px
            }



</style>
