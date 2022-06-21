import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum:0,
    school:'尚硅谷',
    subject:'前端'
  },
  getters: {
    bigSum(state){
      return state.sum*10
    }
  },
  mutations: {
    JIA(state,value){
      state.sum += value
      console.log('mutation+jia被调用了')
    },
    JIAN(state,value){
      state.sum -= value
      console.log('mutation-jian被调用了')
    }
  },
  actions: {
    // jia(context,value){
    //   console.log('jia被调用了')
    //   context.commit('JIA',value)
    // },
    // jian(context,value){
    //   console.log('jian被调用了')
    //   context.commit('JIAN',value)
    // },
    jiaOdd(context,value){
      console.log('奇数被调用了')
      if(context.state.sum%2)
      context.commit('JIA',value)
    },
    jiaWait(context,value){
      console.log('wait被调用了')
      setTimeout(() => {
      context.commit('JIA',value)
      }, 500);
    }
  },
  modules: {
  }
})
