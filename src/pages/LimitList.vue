<template>
  <div class="wrapper">
    <!--额度列表页面-->
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="额度查询" name="first">
          <el-table
            :data="tableData"
            border
            stripe
            style="width: 100%"
            height="400">
            <el-table-column
              prop="company_id"
              label="统一社会信用代码"
              width="180"
              >
            </el-table-column>
            <el-table-column
              prop="base.cst_full_name"
              label="企业名称"
              width="250"
              >
            </el-table-column>
            <el-table-column
              prop="vice.cst_credit_level"
              label="信用等级"
              >
            </el-table-column>
            <el-table-column
              prop="available_credit"
              label="可用额度(元)"
              width="120"
              >
            </el-table-column>
            <el-table-column
              prop="freezen_status"
              label="额度状态"
              >
            </el-table-column>
            <el-table-column
              prop="base.worker_amt"
              label="企业人数"
              >
            </el-table-column>
            <el-table-column
              label="额度调整"
              >
              <template scope="scope">
                <a href="#">管理</a>
              </template>
            </el-table-column>

          </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="额度台账" name="second">额度台账</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from 'fetch/api';
  export default {
      data () {
          return{
            activeTab: 'first',
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]
          }
      },
      computed:{
      },
      methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        }
      },
      created() {
        api.GetLimits({current:1})
          .then(res => {
            if(res.code=='01'){
              this.tableData=res.result.rows;
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
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .el-table
    th,td
      text-align center
      .cell
         word-break: keep-all
         white-space: nowrap
  .el-pagination
    margin: 20px 0 0
    float: right
</style>
