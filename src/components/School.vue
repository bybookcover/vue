<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}} {{data}}</h2>
    <button>把学校名给app</button>
  </div>
</template>
<script>
export default{
  name:'School',
  data () {
    return {
      name:'尚硅谷',
      address:'北京'
    }
  },
  
  mounted () {
    this.$bus.$on('atguigu',(data)=>{
      console.log('我是school,收到了学生的数据',data)
      this.name = data
    })
  }

}
</script>
<style>
.school{
  background-color: skyblue;
  margin:5px;
  padding: 5px;
}
</style>