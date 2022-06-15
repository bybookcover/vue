<template>
  <div>
    <ul class="todo-main">
      <MyItem></MyItem>
      <MyItem></MyItem>
    </ul>
  </div>
</template>

<script>
import MyItem from './MyItem.vue';

export default {
    name: "MyList",
    components: { MyItem }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
