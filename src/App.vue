<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <h2 v-text="'大家好，我叫：'+name"></h2>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <br><br><br><br><br>
    <card></card>
    <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script type="text/ecmascript-6">
import api from 'fetch/api';
import card from 'components/card'
export default {
  name: 'app',
  components:{
    card
  },
  data () {
    return{
      name:'',
      value1:''
    }
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
