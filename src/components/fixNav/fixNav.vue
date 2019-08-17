<template>
 
     <nav class="mint-1px-b">
         <ul>
             <li>
                 <!-- 实现路由切换跳转 -->
                 <router-link to="/" ><i class="iconfont icon-dianying"></i>电影</router-link>
             </li>
             <li>
                 <router-link to="/filmYard" ><i class="iconfont icon-yingyuan"></i>影院</router-link>
             </li>
             <li>
                 <router-link to="/my" ><i class="iconfont icon-wode"></i>我的</router-link>
             </li>
         </ul>
     </nav>

</template>

<script>
export default {
  
}

</script>
<style scoped>
*{
     margin: 0;
    padding: 0;
}
nav {
   
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: #fff;
    
    
    
    
}

nav ul {
display: flex;
/* list-style: none; */

}
nav ul li {
flex: 1;  
padding: 10px 0; 
/* text-decoration: none;
line-height: 60px; */
}
nav ul li i{
    display: block;
    font-size: 22px;
}
.router-link-active{
    color: red;
}


</style>
