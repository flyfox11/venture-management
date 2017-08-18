<template>
  <div id="app">
    <img src="./assets/logo.png">
    <card></card>
    <!--<router-view></router-view>
    <h2 v-text="name+'作品'"></h2>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>-->
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
  </div>
</template>

<script type="text/ecmascript-6">
import api from 'fetch/api';
import card from 'components/card';
import { mapState,mapGetters,mapActions } from 'vuex';
export default {
  name: 'app',
  components:{
    card
  },
  data () {
    return{
      result:this.$store.state.test.count,
    }
  },
  computed:{
    msg:()=>'hhh',
    ...mapState({
      count:state=>state.test.count,
      initNum:state=>state.test.initNum
    }),
    ...mapGetters([
      'showCount',
    ])
  },
  methods:{
      sum(){
        this.$store.dispatch('getResult', this.count)
      }
    /*...mapActions({
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
    api.GetUsers({id:111})
      .then(res => {
        this.name=res.result[0].crealname;
      })
      .catch(error => {
       console.log(error)
      })
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  .el-input
      position relative
      font-size 14px
      width 100px


</style>
