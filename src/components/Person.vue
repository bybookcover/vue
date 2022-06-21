<template>
  <div>
    <h3>人员列表</h3>
    <h3>总和为{{sum}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="item in personList" :key="item.id">{{item.name}}</li>

    </ul> 
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  name:'Person',
  data () {
    return {
      name:''
    }
  },
  computed: {
    // personList(){
    //   return this.$store.state.personList
    // }
    ...mapState(['sum','subject','school']),
    ...mapState(['personList']),
    
  },
  methods: {
    add(){
      const personObj = {id:nanoid(),name:this.name,}
      this.$store.commit('ADD_PERSON',personObj)
      this.name = ''
    },
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    ...mapActions(['jiaOdd','jiaWait'])
  }

}
</script>

<style>

</style>