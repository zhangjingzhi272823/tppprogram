<template>
 <section>
  <div class="hot-city">
      <span @click="cityBool=true">{{cityName}}</span>
      <i class="iconfont icon-arrow"></i>
  </div>  
  <!-- 城市列表 -->
  <div class="citylist" v-show="cityBool">
      <div class="checkHot mint-1px-b">选择热门<i class="iconfont icon-chushaixuanxiang" @click="cityBool=false"></i></div>
      <!-- 热门城市列表 -->
      <v-citylist></v-citylist>
  </div>
 </section>
</template>

<script>
import cityList from '@/components/cityList/cityList'
export default {
 name:"city",

  components:{
     'v-citylist': cityList
 },
 data() {
     return{
         cityBool :false,
         cityName :"北京"

     }
 },
 methods:{
     getCityData(){
         this.$root.Bus.$on("city",(data)=>{
           this.cityName=data[0];
           this.cityBool=false;
        //    console.log(data);
         })

     }
 },
 created(){
    this.getCityData(); 
 }

}

</script>
<style scoped>
.citylist{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color:snow;
}
.citylist .checkHot{
    position: relative;
    font-size: 22px;
    font-weight: bold;
    z-index: 10000;   /* z-index到底什么用 */
    background-color: #fff;
}
.citylist .checkHot i{
    position: absolute;
    right: 20px;
}

</style>
