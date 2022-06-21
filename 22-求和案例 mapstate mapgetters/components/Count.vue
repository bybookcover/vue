<template>
  <div>
    <h1>当前求和为：{{sum}}{{school}}{{subject}}</h1>
    <h1>当前求和放大10倍为：{{bigSum}}</h1>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment"> + + </button>
    <button @click="decrement"> - -</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait"> 等一等再加</button>
  </div>
  
</template>

<script>
  import { mapState,mapGetters } from "vuex";
  export default{
    name:'Count',
    data(){
      return{
        n:1
      }
    },
    computed: {
      // sum(){
      //  return this.$store.state.sum
      // },
      // school(){
      //   return this.$store.state.school
      // },
      // subject(){
      //      return this.$store.state.subject
      // },
   
      //对象写法
      // ...mapState({sum:'sum',school:'school',subject:'subject'})
      //数组写法
      ...mapState(['sum','school','subject']),

      //    bigSum(){
      //      return this.$store.getters.bigSum
      // }
      // 数组写法
      ...mapGetters(['bigSum'])
    },
    methods: {
      increment(){
        this.$store.commit('JIA',this.n)
      },
      decrement(){
        this.$store.commit('JIAN',this.n)
       
      },
      incrementOdd(){
          this.$store.dispatch('jiaOdd',this.n)
      },
      incrementWait(){
         this.$store.dispatch('jiaWait',this.n)
      }
    },
    mounted () { 
      // console.log('Count',this)
     
    }
  }
</script>