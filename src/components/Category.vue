<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name:'Catagory',
  props: ['title'],
  data () {
      return {
        games:['红警','麻辣烫','小龙虾','烧烤 ']
       
      }
    }
}
</script>

<style>
.category{
  background-color: skyblue;
  width:200px;
  height: 300px;

}
h3{
  text-align: center;
  background-color: orange;
}

</style>