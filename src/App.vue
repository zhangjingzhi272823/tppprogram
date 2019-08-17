<template>
  <div id="app">
    <!-- 实现组件将组件添加到页面 -->
   <v-fixnav></v-fixnav>
    <router-view></router-view>
  </div>
</template>

<script>
//引入固定底部导航
import fixNav from '@/components/fixNav/fixNav'
export default {
  name: 'App',
  //注册组件
  components : {
    'v-fixnav' : fixNav
  }
}
</script>

<style>

</style>
