<template>
  <div class="app">
    <h1 >{{msg}}{{name}}</h1>
    <School :getSchoolName="getSchoolName"></School>
    <Student v-on:atguigu="demo" @m1bind="m1" @click="show"></Student>  
    <!-- 组件绑定原生事件 必须加native修饰符 否则默认为自定义事件 -->
    <!-- <Student ref="student"></Student> -->
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'


export default {
  name: 'App',
  components: {
    School,
    Student
  },
  data () {
    return {
      msg:'你好呀',
      name:''
    }
  },
  methods:{
    getSchoolName(name){
      console.log('收到了school的信息',name)
    },
    demo(name){
      console.log('demo被调用了')
      this.name = name
    },
    m1(){
      console.log('m1被调用了')
    },
    show(){
      alert('原生事件')
    }
  },
  // mounted(){
  //   setTimeout(() => {
  //         this.$refs.student.$on('atguigu',this.demo)
  //   }, 3000);

  // }
}
</script>

<style lang="less">
  /*base*/
 .app{
  background-color: gray;
  margin:5px;
  padding: 5px;
 }
 
</style>
