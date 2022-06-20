<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot>asfads fdasfadsjlkjfldsajlfas</slot>

  </div>
</template>

<script>
export default {
  name:'Catagory',
  props: ['title']
}
</script>

<style>
.category{
  background-color: skyblue;
  width:200px;
  height: 300px;
}
h3{
  text-align: center;
  background-color: orange;
}

</style>