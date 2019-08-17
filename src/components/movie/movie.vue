 <template>
  <section >
      <div class="filmDeil">
      <p class="filmImg">
          <img :src="hostName+filmData.poster"  :alt="hostName+filmData.poster">
      </p>
      <div>
          <h3 class="f16">{{filmData.showName}}</h3>
          <p>{{filmData.showNameEn}}</p>
          <p>{{filmData.type}}</p>
          <p>{{filmData.country}}|{{filmData.duration}}分钟</p>
          <p>这是评价</p>
      </div>
      </div>
      <div class="filmText">
          在远离大都会的小山村，住着巫女世家出身的高中女孩宫水三叶。校园和家庭的原因本就让她充满烦恼，
          而近一段时间发生的奇怪事件，又让三叶摸不清头脑。不知从何时起，三叶在梦中就会变成一个住在东京的高中男孩。
          那里有陌生的同学和朋友，有亲切的前辈和繁华的街道，一切都是如此诱人而真实。另一方面，
          住在东京的高中男孩立花泷则总在梦里来到陌生的小山村，以女孩子的身份过着全新的生活。
          许是受那... 
      </div>
      <div class="goNext" @click="go">返回</div>
  </section>
 </template>
 
 <script>
 export default {
     name:"movie",
     
   data () {
     return {
         filmData:{},
        hostName:"http://img1.tbcdn.cn/tfscom/"
     }
   },
   methods:{
       getFilmData(){
     this.$root.Bus.$on("filmIndex",(data)=>{
        this.filmData=data;
     })
       },
       go(){
          history.go(-1); 
       }
   },
   created(){
       this.getFilmData();
   },
    beforeDestroy(){
      this.$root.Bus.$off();
  }
 }
 
 </script>
 <style scoped>
  .filmDeil {
      display: flex;
      padding: 20px;
      background-color: #2a86ab;
      color: #fff;
  }
 .filmDeil .filmImg{
  width: 25vmin;
  height: 35vmin;
  border: 1px solid #cccccc;
  margin-right: 20px;

 }
 .filmDeil div{
     flex: 1;
     
     
 }
 .filmDeil div{
     line-height: 7.5vmin;

 }
 .filmText{
     padding: 20px;
     line-height: 7.5vmin
 }
 .goNext{
     width: 100%;
     height: 70px;
     background-color: red;
     position: fixed;
     bottom: 0;
     z-index: 10000000;
     color: #fff;
     font-size: 20px;
     line-height: 70px;
     text-align: center;
     cursor: pointer;

 }
 </style>
 