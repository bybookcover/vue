import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state:{
    sum:0,
    school:'尚硅谷',
    subject:'前端',
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
      console.log('mutation-jian被调用了 ')
    }
  },
  actions:{
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
  }
}
const moduleB = {
  namespaced: true,
  state:{
    personList:[
      {id:'001',name:'张三'}
    ]
  },
  mutations:{
    ADD_PERSON(state,value){
      console.log('ADD_PERSON被调用了')
      state.personList.unshift(value)
    }
  },
  actions:{

  },
  getters:{

  }
}

export default new Vuex.Store({
  modules:{
    moduleA,moduleB
  }
})
