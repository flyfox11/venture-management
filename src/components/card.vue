<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style  lang="stylus" rel="stylesheet/stylus">
  .el-carousel__item

    &:nth-of-type(1)
      background-image: url("../assets/img/1.jpg")
    &:nth-of-type(2)
      background-image: url("../assets/img/2.jpg")
    &:nth-of-type(3)
      background-image: url("../assets/img/3.jpg")
    &:nth-of-type(4)
      background-image: url("../assets/img/4.jpg")
    h3
      color: #475669
      font-size: 14px
      opacity: 0.75
      line-height: 200px
      margin: 0

</style>
