<template>
  <div class="student">
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="unbind">解绑atguigu</button>
  </div>
</template>

<script>
export default{
  name:'Student',
  data () {
    return {
      name:'张三',
      sex:'男'
    }
  },
  methods:{
    sendStudentName(){
      this.$emit('atguigu',this.name)
      this.$emit('m1bind')
    },
    unbind(){
      // this.$off('atguigu') //解绑一个
      // this.$off(['atguigu','m1bind']) // 解绑多个
      this.$off() //解绑全部
    }
  }
}
</script>
<style>
.student{
  background-color: pink;
  margin:5px;
  padding: 5px;
  margin-top: 20px;
}
</style>