<template>
  <div class="app">
    <h1 >{{msg}}</h1>
    <School></School>
    <Student></Student>
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
      msg:'你好呀'
    }
  }
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
