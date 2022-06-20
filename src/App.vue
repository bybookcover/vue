<template>
    <div class="container">
     <Category title="美食" >
      <template scope="atguigu">
            <ul >
      <li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
     </ul>
      </template>
     </Category>

    <Category title="美食" >
      <template scope="atguigu">
            <ol >
      <li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
     </ol>
      </template>
     </Category>
          
        <Category title="美食" >
                  <!-- //解构赋值方法 {games} ==atguigu.games -->
      <template scope="{games}"> 

         
      <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>

      </template>
     </Category>
    </div>
</template>

<script>
import Category from './components/Category';
export default {
    name: "App",
    components: { Category }
    
}
  
</script>

<style >
.container,.foot{
  display: flex;
  justify-content: space-around;
}
 
</style>
