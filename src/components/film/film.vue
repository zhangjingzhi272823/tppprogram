<template>
<section>
    <div class="filmNav mint-1px-b">
        <v-city class="hot-city"></v-city>
        <div class="show-film">
            <p @click="filmId=0" :class="{'cred':filmId===0}">正在热映</p>
            <p @click="filmId=1" :class="{'cred':filmId===1}">即将热议</p>
            <span :class="{'active':filmId===1}"></span>
        </div>
    </div>
    <!-- 正在热映 -->
    <v-liveShow v-show="filmId===0"></v-liveShow>
    <!-- 即将热映 -->
    <v-soonShow v-show="filmId===1"></v-soonShow>
</section>
</template>

<script>
//引入热门城市组件
import city from '@/components/city/city'
//引入正在热映
import liveShow from '@/components/liveShow/liveShow'
//引入即将热映
import soonShow from '@/components/soonShow/soonShow'
export default {
  name:"film",
  data(){
      return{
         filmId : 0 
      }
  },
  components:{
      'v-city':city,
      'v-liveShow':liveShow,
      'v-soonShow':soonShow
  }
}

</script>
<style scoped>
.filmNav{
    display: flex;
    text-align: center;
    line-height: 50px;
    

}
.filmNav .hot-city{
    flex: 1;
}
.filmNav .show-film{
    flex: 2;
    display: flex;
    position: relative;

}
.filmNav .show-film span{
    width: 40%;
    height: 2px;
    background-color: red;
    position: absolute;
    left: 5%;
    bottom:0;
   

}
.filmNav .show-film p {
    flex: 1;
}
.filmNav .show-film  .active{
    left: 55%;
}
</style>
