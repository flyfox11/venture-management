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
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option key="l" label="所有" value="l"></el-option>
                        <el-option key="m" label="快塑" value="m"></el-option>
                        <el-option key="n" label="爱游" value="n"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="信用代码">
                    <el-input v-model="form.channel_name"></el-input>
                </el-form-item>
                <el-form-item label="企业名称">
                    <el-input v-model="form.project_name"></el-input>
                </el-form-item>
                <el-form-item label="额度状态">
                    <el-select v-model="form.region1" placeholder="请选择">
                        <el-option key="bbk" label="全部" value="全部"></el-option>
                        <el-option key="xtc" label="批准" value="批准"></el-option>
                        <el-option key="imoo" label="冻结" value="冻结"></el-option>
                        <el-option key="z" label="终止" value="终止"></el-option>
                        <el-option key="x" label="过期" value="过期"></el-option>
                        <el-option key="y" label="待授信" value="待授信"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit"><i class="iconfont icon-search"></i>查询</el-button>
                    <el-button  class="cancel"><i class="iconfont icon-reset"></i>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return{
                form: {
                    channel_name: '',
                    project_name: '',
                    region: '',
                    region1:''
                }
            }
        },
        computed:{
        },
        methods:{
            onSubmit() {
                /*this.$message.success('提交成功！');*/
              this.$router.push('/limitList');
            }
        }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

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
