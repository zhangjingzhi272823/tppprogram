<template>
 <section>
     <!-- 图片左右滑动使用mint-ui中的swip组件实现轮播图 -->
     <!-- 轮播图 -->
     <div class="swipe-wrapper">
     <mt-swipe :auto="2000" ref="swipeWrapper">
     <mt-swipe-item class="swip-item-1 item"><img src="https://gw.alicdn.com/tfs/tps/TB1YTkBOpXXXXbLaXXXXXXXXXXX-1280-520.jpg" alt=""></mt-swipe-item>
     <mt-swipe-item class="swip-item-2 item"><img src="https://gw.alicdn.com/tfs/tps/TB1pre1OFXXXXaGXXXXXXXXXXXX-1280-520.jpg" alt=""></mt-swipe-item>
     <mt-swipe-item class="swip-item-3 item"><img src="https://gw.alicdn.com/tfs/tfs/TB1.Zy6OFXXXXbhXpXXXXXXXXXX-1280-520.jpg" alt=""></mt-swipe-item>
     </mt-swipe>
     </div>
     <!-- 电影布局 -->
    <ul class="filmList">
        <li v-for="(itemfilm,index) in filmList" :key="index">
            <div >
                <p class="filmImg"><img :src="hostName+itemfilm.poster" :alt="hostName+itemfilm.poster"></p>
                <div class="filmD" @click="sendFilmData(index)">
                    <router-link  :to="{name:'movie',params:{hid:index}}">
                        <h3 class="towc">{{itemfilm.showName}}</h3>
                        <span class="towc">星星评级</span>
                        <p class="mt6 towc">{{itemfilm.highlight}}</p>
                         <p class="mt6 towc">{{itemfilm.leadingRole}}</p> 
                    </router-link>
                    <button>购买</button>
                </div>
            </div>
            <div class="carnival">
                <p class="towc">1212五折狂欢</p>
                <p class="towc">1212特惠抢票，名额有限抢完为止</p>
            </div>
        </li>
         <li>
            <div >
                <p class="filmImg"></p>
                <div class="filmD">
                    <router-link  to="">
                        <h3 class="towc">你的星星</h3>
                        <span class="towc">星星评级</span>
                        <p class="mt6 towc">所有的相遇都是久别的重逢</p>
                         <p class="mt6 towc">上白石萌音，佟心竹，神木隆之介</p> 
                    </router-link>
                    <button>购买</button>
                </div>
            </div>
            <div class="carnival">
                <p class="towc">1212五折狂欢</p>
                <p class="towc">1212特惠抢票，名额有限抢完为止</p>
            </div>
        </li>
    </ul>
</section>
</template>

<script>
export default {
    name:"liveShow",
  data () {
    return {
        cityCode:"bj",
        filmList:[],
        hostName:"http://img1.tbcdn.cn/tfscom/"
    }
  },
  methods:{
      getFilm(cityCode){
          const ERROR_OK=0;
          let filmUrl="/api/movie/hot/?city="+cityCode;
          this.axios.get(filmUrl).then(res=>{
              if(res.data.errno===ERROR_OK){
                  this.filmList=res.data.data.data.returnValue;
              };
          })
      },
      getCityData(){
          this.$root.Bus.$on("city",(data)=>{
           this.cityCode=data[1];
           this.cityBool=false;
           
         })

      },
 
  sendFilmData(index){
       setTimeout(() => {
           this.$root.Bus.$emit("filmIndex",this.filmList[index]);
        //    console.log(this.filmList[index]);
           
       }, 20);
    //   this.$root.Bus.$emit("filmIndex",this.filmList[index]);
  }
  },
  created(){
      this.getFilm(this.cityCode);
      this.getCityData();
  },
  watch:{
      cityCode(data){
         this.getFilm(data); 
      }
  }
 
}

</script>
<style scoped>
.swipe-wrapper{
    width: 100%;
    height: 45vmin;
}
.filmList {
    padding-left: 10px;
}
.filmList li{
    /* height: 100px; */
    border-bottom: 1px solid #d9d9d9;
    margin: 20px 0;
   
}
.filmList li div{
  
    display: flex ;
}
.filmList li>div>.filmImg{
    width: 65px;
    height: 90px;
    border: 1px solid #ccc;
      
}
.filmList li .filmD{
    flex: 1;
    margin-left: 10px;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 8px;

}
.filmList li a{
    flex: 1;
    width: 0;
}
.filmList li button{
    width: 45px;
    height: 24px;
    border: 1px solid red;
    border-radius: 3px;
    background: #fff;
    color: red;
    margin: auto 20px;

}
.filmList li .carnival{
    display:flex;
    margin-left: 90px;
    padding: 10px 0;
}
.filmList li .carnival p:first-child {
    flex: 1;
    border-right: 1px solid #b8bbbf;
    color: red;
}
.filmList li .carnival p:last-child{
    padding-left: 10px;
    
}

</style>
