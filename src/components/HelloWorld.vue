<template>
  <div class="hello">
    <router-link to="/">
      <el-button>按钮</el-button>
    </router-link>
    <router-link to="/user">
     <el-button type="primary">主要按钮</el-button>
    </router-link>
   <el-radio v-model="radio" label="1">备选项</el-radio> 
</div>
</template>

<script>

export default {
  name: 'helloworld',
  props:{
    msg:String
  }
}
</script>

<style lang="less">
  .hello{
    margin:0 10px;
  }
</style>
