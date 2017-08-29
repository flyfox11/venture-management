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
                <a :href="'limitDetail/'+tableData[scope.$index].company_id">管理 </a>
              </template>
            </el-table-column>

          </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="current_page"
            :page-sizes="[6,10,15]"
            :page-size="page_size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
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
            tableData: [],
            total:0,
            page_size:10,
            current_page:1,
          }
      },
      computed:{
      },
      methods:{
        handleClick(tab, event) {
          //console.log(tab, event);
        },
        handleSizeChange(val) {
          this.page_size=val;
          this._getData(this.current_page,this.page_size);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.current_page=val;
          this._getData(this.current_page,this.page_size);
        },
        detailAction(index){
          alert(index);
        },
        _getData(current_page,page_size){
          api.GetLimits({current_page,page_size})
            .then(res => {
              if(res.code=='01'){
                this.tableData=res.result.rows;
                this.total=res.result.count;
              }else{
                this.$alert(res.result, '提示', {
                  confirmButtonText: '确定'
                });
              }
            })
            .catch(error => {
              console.log(error)
            });
        }
      },
      created(){
        this._getData(this.current_page,this.page_size)
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
