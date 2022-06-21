<template>
  <div>
    <h3>当前求和为：{{sum}}{{school}}{{subject}}</h3>
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <h3>总人数{{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)"> + + </button>
    <button @click="decrement(n)"> - -</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)"> 等一等再加</button>
  </div>
  
</template>

<script>
  import { mapState,mapGetters, mapMutations, mapActions } from "vuex";
  export default{
    name:'Count',
    data(){
      return{
        n:1
      }
    },
    computed: {
 
      //对象写法
      // ...mapState({sum:'sum',school:'school',subject:'subject'})
      //数组写法
      ...mapState('moduleA',['sum','school','subject']),
      ...mapState('moduleB',['personList']),


      // 数组写法
      ...mapGetters('moduleA',['bigSum'])
    },
    methods: {
      //对象写法
      ...mapMutations('moduleA',{increment:'JIA',decrement:'JIAN'}),
      // 数组写法
      // ...mapMutations(['JIA','JIAN'])
      // increment(){
      //   this.$store.commit('JIA',this.n)
      // },
      // decrement(){
      //   this.$store.commit('JIAN',this.n)
      // },

      // incrementOdd(){
      //     this.$store.dispatch('jiaOdd',this.n)
      // },
      // incrementWait(){
      //    this.$store.dispatch('jiaWait',this.n)
      // }
      //对象写法
      // ...mapActions({incrementOdd:'jiaOdd',imcrementWait:'jiaWait'}) 
      //数组写法
      ...mapActions('moduleA',['jiaOdd','jiaWait'])
    },
    mounted () { 
      // console.log('Count',this)
     
    }
  }
</script>