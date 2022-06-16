<template>
  <li>
    <label>
      <input type="checkbox" :checked = "todo.done" @change="handleCheck(todo.id)"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem' ,
  props:['todo','checkTodo','deleteTodo'],
  methods:{
    //勾选
    handleCheck(id){
      // 将todo对象的done值取反
      this.checkTodo(id)
    },
    // 删除
    handleDelete(id){
      if(confirm("确认删除吗")){
        this.deleteTodo(id)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    button{
      display: block;
    }
    background-color: #ddd;
  }
</style>
