<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button>把学校名给app</button>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default{
  name:'School',
  data () {
    return {
      name:'尚硅谷',
      address:'北京'
    }
  },
  mounted () {
    // this.$bus.$on('atguigu',(data)=>{
    //   console.log('我是school,收到了学生的数据',data)
    //   this.name = data
    // })
    this.pubId = pubsub.subscribe('hello',function(msgName,data){
      console.log(this)
      // console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
    })
  },
  beforeDestroy () {
    pubsub.unsubscribe(this.pubId)
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