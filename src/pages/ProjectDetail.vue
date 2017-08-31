<template>
  <div class="wrapper">
    <!--项目编辑页面-->
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="合作渠道">
        <el-select v-model="form.channel" placeholder="请选择">
          <el-option
                  v-for="item in channel_options"
                  :key="item.channel_no"
                  :label="item.name"
                  :value="item.channel_no">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="项目名称">
        <el-input v-model="form.project_name"></el-input>
      </el-form-item>
      <el-form-item label="项目上线时间">
        <el-date-picker
                v-model="form.project_line_time"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="项目状态">
        <el-select v-model="form.project_status" placeholder="请选择">
          <el-option
                  v-for="item in project_options"
                  :key="item.code_value"
                  :label="item.code_name"
                  :value="item.code_value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="项目批准额度">
        <el-input v-model="form.project_approved_sum"></el-input>
      </el-form-item>
      <el-form-item label="项目终止时间">
        <el-date-picker
                v-model="form.project_down_time"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="项目可用额度">
        <el-input v-model="form.project_available_credit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSave">保存</el-button>
        <el-button  class="cancel" @click="onBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
    import api from 'fetch/api';
    export default {
      data(){
        return {
          form: {
            channel: '',
            project_name:'',
            project_line_time:'',
            project_status:'',
            project_approved_sum:'',
            project_down_time:'',
            project_available_credit:''
          },
          channel_options:[{channel_no:'0',name:'快塑网'},{channel_no:'1',name:'爱游网'}],
          project_options:[{code_value:'0',code_name:'筹备'},{code_value:'1',code_name:'上线'}],
          pickerOptions0: {}
        }
      },
      created(){
        /*api.GetLimitDetail({id:this.$route.params.id})
          .then(res => {
            if(res.code=='01'){
              this.tquota=res.result;
            }else{
              this.$alert(res.result, '提示', {
                confirmButtonText: '确定'
              });
            }
          })
          .catch(error => {
            console.log(error)
          });*/
      },
      methods:{
        onSave(){

        },
        onBack() {
          this.$router.go(-1);
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
