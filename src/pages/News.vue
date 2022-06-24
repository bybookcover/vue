<template>
    <ul>
        <li :style="{opacity}">我在学校vue</li>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
    </ul>
</template>
<script>
    export default{
        name:'News',
        data() {
            return {
                opacity: 1,
            };
        },
        activated(){
            console.log('News组件被激活了')
            this.timer = setInterval(() => {
                console.log('@@@')
                this.opacity -= 0.01
                if (this.opacity<=0)this.opacity =1
            }, 16);
        },
        deactivated(){
             console.log('News组件失活了')
             clearInterval(this.timer)
             // 生命周期没有显示的三个函数， nextTick, activated, deactivated
        }
    }
</script>