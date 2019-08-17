<template>
 <section class="hotCityList">
     <div class="cityList" ref="cityScroll">
         <ul >
         <li>
             <span>热门</span>
             <p @click.stop="getCity" v-for="(item,index) in cityList" :key="index">{{item.name}}</p>
            
         </li>
         <li v-for="(item,index) in hotCity" :key="index">
         <span> {{index}} </span>
         <p @click.stop="getCity" v-for="(itemCity,index) in item" :key="index">{{itemCity.regionName}}</p>
         
         </li>
     </ul>
     </div>
     
     <ul class="cityCode">
          <li>
         <span>热门</span>
         <p v-for="(item,index) in hotCity" :key="index">{{index}}</p>   
     </li>
     </ul>
 </section>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"cityList",
    //将数据展示在页面中
    data () {
        return{
            hotCity:[],
            cityList:[
               {"name":"北京"},
               {"name":"上海"},
               {"name":"广州"}
              
           ],
           cityName:"",
           cityCode:""
        //    cityBool:false
        }

    },
    methods:{
        getCity($event){
            //获取当前点击对象
            var target=$event.currentTarget;
            //得到内容
            //  console.log(target);
            this.cityName=target.innerText;
            // console.log(target.innerText);
            this.cityCode=this.match(target.innerText);
            var cityArr=[];
            cityArr.push(this.cityName,this.cityCode);
            this.$root.Bus.$emit("city",cityArr);//用city事件触发
        },
        //得到城市拼音
        match(name){
            var code=["bj","sh","gz"];
            var returnCode=code[Math.floor(Math.random()*3)];
            switch(name){
                case "北京":
                    return "bj";
                case "上海":
                    return "sh";
                case "广州":
                    return "gz";
            }
            return returnCode;
                   }    
        },
    created (){
       //获取热门城市数据 
       //定义路径
       const getUrl='/api/movie/city'
       //定义请求状态
       const ERROR_OK=0;

       //定义路径之后getUrl就相当于 http://localhost:9090/movie/city
      // this.axios.get(" http://localhost:9090/movie/city").then(function(res){
          //发送请求
          this.axios.get(getUrl).then((res)=>{//这里this的指向有问题this.hotCity不能获得数据，我们通过箭头函数改变this指向使得在该函数内部可以访问到this.hotCity如果不实用箭头函数，我们可以在函数外
          //定义var _this=this在函数内部使用_this.hotCity
              if(res.data.errno===ERROR_OK){
                  //此时拿到了数据res.data.data.data.returnValue
        //   console.log(res.data.data.data.returnValue);

            this.hotCity=res.data.data.data.returnValue;
            // console.log(this.hotCity);

          }
       });
    },
    mounted(){
        //即定时器 20ms
         this.$nextTick(() => {
         //$refs绑定元素
         //console.log(this.scroll);
         if (!this.scroll) {
         this.scroll = new BScroll(this.$refs.cityScroll, {
         //开启点击事件 默认为false
         click: true
         });
         // console.log(this.scroll)
         } else if (!this.$refs.cityScroll) {
         return;
         } else {
         this.scroll.refresh();
         }
         });

    }
  
}

</script>
<style scoped>
.hotCityList{
    display: flex;
     height: 100%; 

}
.hotCityList .cityList{
    flex: 1;
    text-align: left;
    border-right: 1px solid gray;
    padding-right: 30px;
    background-color:#fff;
    /* position: relative;
    display: fixed;
    z-index: 1000; */


}
.hotCityList .cityList li span{
    display: block;
    background-color: lightgray;
    padding-left: 20px;
    font-size: 18px;
    font-weight: bold;
}
.hotCityList .cityList li p{
     padding-left: 20px;
}

.hotCityList .cityCode{
    width: 50px;
    line-height: 20px;
    display: flex;
    flex-direction: column;justify-content: center;
}
</style>
