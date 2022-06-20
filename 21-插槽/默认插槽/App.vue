<template>
    <div class="container">
     <Category title="美食" >
     <ul>
      <li v-for="(item,index) in games" :key="index">{{item}}</li>
     </ul>
     </Category>
     <Category title="游戏" ></Category>
     <Category title="电影"></Category>
    </div>
</template>

<script>
import Category from './components/Category';
export default {
    name: "App",
    components: { Category },
    data () {
      return {
        foods:['火锅','麻辣烫','小龙虾','烧烤 '],
        games:['红警','麻辣烫','小龙虾','烧烤 '],
        films:['教父','麻辣烫','小龙虾','烧烤 ']
      }
    }
}
  
</script>

<style >
.container{
  display: flex;
  justify-content: space-around;
}
 
</style>
