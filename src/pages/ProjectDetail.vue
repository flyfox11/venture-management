<template>
  <div class="wrapper">
    <!--项目编辑页面-->
    <el-form ref="form" :model="form" :rules="rules" label-width="110px">
      <el-form-item label="合作渠道" prop="channel">
        <el-select v-model="form.channel" placeholder="请选择">
          <el-option
                  v-for="item in channel_options"
                  :key="item.channel_no"
                  :label="item.name"
                  :value="item.channel_no">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="项目名称" prop="project_name">
        <el-input v-model="form.project_name"></el-input>
      </el-form-item>
      <el-form-item label="项目上线时间" prop="project_line_time">
        <el-date-picker
                v-model="form.project_line_time"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="项目状态" prop="project_status">
        <el-select v-model="form.project_status" placeholder="请选择">
          <el-option
                  v-for="item in project_options"
                  :key="item.code_value"
                  :label="item.code_name"
                  :value="item.code_value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="项目批准额度" prop="project_approved_sum">
        <el-input v-model="form.project_approved_sum" @change="onChange"></el-input>
      </el-form-item>
      <el-form-item label="项目终止时间" prop="project_down_time">
        <el-date-picker
                v-model="form.project_down_time"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="项目可用额度" prop="project_available_credit">
        <el-input v-model="form.project_available_credit" readonly></el-input>
      </el-form-item>
      <div style="clear:both">.</div>
      <el-form-item class="form_button">
        <el-button type="primary" @click="onSave">保存</el-button>
        <el-button  class="cancel" @click="onBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
    import api from 'fetch/api';
    let self;
    let act_flag;
    export default {
      data(){
        var checkDate = (rule, value, callback) => {  //自定义日期校验规则
          if (!value) {
            return callback(new Error(rule.message));
          }else{
            callback();
          }
        };
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
          channel_options:[],
          project_options:[],
          pickerOptions0: {
            disabledDate(time) {
              if(time.getTime)
                return time.getTime() < Date.now() - 8.64e7;
            }
          },
          pickerOptions1: {
            disabledDate(time) {
              if(time.getTime){
                var start_time=self.form.project_line_time?((self.form.project_line_time).getTime()+24*60*60*1000):Date.now();
                return time.getTime() < start_time - 8.64e7;
              }
            }
          },
          rules: {     //表单验证
            channel: [
              { required: true, message: '请选择合作渠道', trigger: 'change' },
            ],
            project_name: [
              { required: true, message: '请输入项目名称', trigger: 'blur' }
            ],
            project_line_time: [
              /*{ required: true,type: 'date',  message: '请选择上线时间', trigger: 'change' }*/
              { validator: checkDate, message: '请选择上线时间', trigger: 'change' }
            ],
            project_status: [
              { required: true, message: '请选择项目状态', trigger: 'change' }
            ],
            project_approved_sum: [
              { required: true, message: '请输入项目批准额度', trigger: 'blur' }
            ],
            project_down_time: [
//              { required: true,type: '',  message: '请选择终止时间', trigger: 'change' }
              { validator: checkDate, message: '请选择终止时间', trigger: 'change' }
            ],
            project_available_credit: [
              { required: true, message: '请输入项目可用额度', trigger: 'blur' }
            ]
          }
        }
      },
      created(){
        self=this;
        act_flag=this.$route.params.flag;
        Promise.all([api.GetChannelStatus(),api.GetProjectStatus()]) //并发请求
        .then(res=>{
            this.channel_options=res[0].result;
            this.project_options=res[1].result;
        }).catch(error => {
          console.log(error)
        });
        if(act_flag=='edit'){  //如果是修改操作
          api.GetProject(this.$route.query)  //查询单个项目
          .then(res => {
            this.form=res.result.project;
            this.form.project_status=res.result.project.project_status+'';
            this.form.channel=res.result.channel_id;
            this.form.channelProjectId=res.result.id;

          })
          .catch(error => {
            console.log(error)
          });
        }
      },
      methods:{
        onChange(value){
          this.form.project_available_credit=value;
        },
        onSave(){
          this.$refs.form.validate((valid) => {
            if (valid) {
              if(act_flag=='add') {  //如果是增加操作
                api.AddProject(this.form)
                        .then(res => {
                          this.$alert(res.result, '提示', {
                            confirmButtonText: '确定'
                          });
                          this.$router.go(-1);
                        })
                        .catch(error => {
                          console.log(error)
                        });
              }else{
                api.UpdateProject(this.form)
                .then(res => {
                  this.$alert(res.result, '提示', {
                    confirmButtonText: '确定'
                  });
                  this.$router.go(-1);
                })
                .catch(error => {
                  console.log(error)
                });
              }
            } else {
              return false;
            }
          });

        },
        onBack() {
          this.$router.go(-1);
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .el-form
      margin-top: 80px
      .el-form-item
        margin-left:14%
        width: 30%
        float:left
        .el-date-editor
          width: 195px
      .form_button
        width: 100%
        text-align: center
        margin: 0
</style>
