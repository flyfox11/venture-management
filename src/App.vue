<template>
  <keep-alive><router-view></router-view></keep-alive>
  <!--测试用
     <card></card>

     <h2 v-text="name+'作品'"></h2>
     <el-button>默认按钮</el-button>
     <el-button type="primary">主要按钮</el-button>
     <el-button type="text">文字按钮</el-button>
     <el-date-picker
       v-model="value1"
       type="date"
       placeholder="选择日期"
       :picker-options="pickerOptions0">
     </el-date-picker>
     <el-form :inline="true"  class="demo-form-inline">
       <el-form-item label="被加数">
         <el-input v-model="initNum" placeholder="被加数"></el-input>
       </el-form-item>
       <el-form-item label="加数">
         <el-input v-model="count" placeholder="加数"></el-input>
       </el-form-item>
       <el-button type="primary" @click="sum">求和</el-button>
       <el-form-item label="">
         <el-input placeholder="结果" v-html="showCount"></el-input>
       </el-form-item>
     </el-form-item>
     </el-form>
     我的名字是{{msg}}
     -->
</template>

<script type="text/ecmascript-6">
//import card from 'components/card';
import { mapState,mapGetters,mapActions } from 'vuex';
export default {
  name: 'app',
  components:{
    //card
  },
  data () {
    return{
      //result:this.$store.state.test.count,
    }
  },
  computed:{
    /*msg:()=>'hhh',
    ...mapState({
      count:state=>state.test.count,
      initNum:state=>state.test.initNum
    }),
    ...mapGetters([
      'showCount',
    ])*/
  },
  methods:{
    /* sum(){
        this.$store.dispatch('getResult', this.count)
      }
    ...mapActions({
      sum: 'getResult' 没有payload的情况可以
    })*/
    /*
    *
    * ...mapMutations({
     add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
     })与action区别为，它是同步，action为异步

    * */
  },
  created() {
    /*this.$nextTick(() => {
    });*/
  },
  mounted(){

  }
}
</script>

