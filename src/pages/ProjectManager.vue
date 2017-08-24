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
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option key="bbk" label="全部" value="a"></el-option>
                        <el-option key="xtc" label="批准" value="xtc"></el-option>
                        <el-option key="imoo" label="冻结" value="imoo"></el-option>
                        <el-option key="z" label="终止" value="b"></el-option>
                        <el-option key="x" label="过期" value="c"></el-option>
                        <el-option key="y" label="待授信" value="d"></el-option>
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
                }
            }
        },
        computed:{
        },
        methods:{
            onSubmit() {
                this.$message.success('提交成功！');
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
