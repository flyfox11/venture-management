<template>
  <div class="wrapper">
    <!--客户额度信息-->
    <el-button :plain="true" type="primary" icon="arrow-left" @click="back">返回</el-button>
    <table>
      <tr>
        <td>统一社会信用代码</td>
        <td>
          {{tquota.company_id}}
        </td>

        <td>客户额度</td>
        <td >
          {{tquota.approved_sum}}
        </td>
      </tr>
      <tr>
        <td>已用额度</td>
        <td>
          {{ tquota.already_used_amount }}
        </td>
        <td>可用额度</td>
        <td>
          {{ tquota.available_credit }}
        </td>
      </tr>
      <tr>
        <td>额度状态</td>
        <td>
          {{ tquota.freezen_status }}
        </td>
        <td>授信开始日期</td>
        <td>
          {{ tquota.credit_apply_create_time }}
        </td>
      </tr>
      <tr>
        <td>授信终止日期</td>
        <td>
          {{ tquota.credit_apply_expire_time }}
        </td>
        <td>系统评估额度</td>
        <td>
          {{ tquota.sys_credit }}
        </td>
      </tr>
      <tr>
        <td>额度操作</td>
        <td colspan="3">
          <el-button type="info">重新授信</el-button>
          <el-button type="info">更新额度</el-button>
          <el-button type="info">冻结额度</el-button>
          <el-button type="info">解冻额度</el-button>
          <el-button type="info">终止额度</el-button>

        </td>
      </tr>
    </table>
  </div>
</template>
<script type="text/ecmascript-6">
    import api from 'fetch/api';
    export default {
      data(){
        return {
          tquota:{}
        }
      },
      created(){
        api.GetLimitDetail({id:this.$route.params.id})
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
          });
      },
      methods:{
        back() {
          this.$router.go(-1);
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .wrapper
      table
        width: 100%
        margin-top: 40px
        tr
          td
            flex-grow:1
            width: 250px
            padding-bottom:15px
            &:nth-child(odd)
              text-align right
              padding-right: 10px
              font-size :18px
            &:nth-child(even)
              text-align left
              padding-left: 10px
</style>
