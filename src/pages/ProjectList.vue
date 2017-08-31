<template>
  <div class="wrapper">
    <!--项目列表页面-->
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="项目查询" name="first">
          <el-table :data="tableData" border stripe style="width: 100%" empty-text="数据空空" height="400">
            <el-table-column prop="project.project_name" label="项目名称"></el-table-column>
            <el-table-column prop="channel.name" label="合作渠道"></el-table-column>
            <el-table-column  label="项目状态">
                <template scope="scope">
                    <span>{{tableData[scope.$index].project.project_status | formatStatus}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="project.project_line_time" label="项目上线时间"></el-table-column>
            <el-table-column prop="project.project_down_time" label="项目终止时间"></el-table-column>
            <el-table-column prop="project.project_approved_sum" label="项目批准额度(元)"></el-table-column>
            <el-table-column prop="project.project_available_credit" label="项目可用额度(元)"></el-table-column>
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

    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from 'fetch/api';
  import _ from 'lodash';
  let self='';
  export default {
      data () {
          return{
            activeTab: 'first',
            tableData: [],
            projectStatus:[],
            total:0,
            page_size:10,
            current_page:1,
          }
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
          this.current_page=val;
          this._getData(this.current_page,this.page_size);
        },
        detailAction(index){
          alert(index);
        },
        _getData(current_page,page_size){
          api.GetProjects({current_page,page_size,...this.$route.query})
            .then(res => {
              if(res.code=='01'){
                this.tableData=res.result.rows;
                this.total=res.result.count;
                this.projectStatus=res.result.projectStatus;
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
         self=this;
         this._getData(this.current_page,this.page_size)
      },
      filters: {
          formatStatus(value) {
              return _.result(_.find(self.projectStatus, { 'code_value': value+''}), 'code_name');
          }
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
