<template>
    <h2>我是About 的内容</h2>
</template>
<script>
export default{
    name: 'About',
    //通过路由规则，进入该组件时被调用
    beforeRouteEnter(to, from, next){
       if(to.meta.isAuth){
            if(localStorage.getItem('school') === 'atguigu'){
                // document.title= to.meta.title || '彬阳纸业'
                next()
            }else{
                alert('学校名不对')
            }
        }else{
            // document.title= to.meta.title || '彬阳纸业'
            next()
        }
    },
    //通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from,next) {
        console.log('beforeRouteLeave',to,from)
        next()
    }
}
</script>