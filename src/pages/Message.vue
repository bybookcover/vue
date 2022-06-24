<template>
        <div>
            <ul>
                <li v-for="m in messageList" :key="m.id">
                    <!-- 路由可以带query参数，？后面跟参数，&用于连接不同参数 -->
                    <!-- 跳转路由并携带query参数  to的字符串写法-->
                    <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
                  <!-- 跳转路由并携带query参数  to的对象写法-->
                    <router-link :to="{
                        // path:'/home/message/detail',
                          // params 参数 上面的路径不能用path ,只能用下面的name参数
                        name:'xiangqing',
                        query:{
                            id:m.id,
                            title:m.title
                        }
                    }">
                     {{m.title}}
                    </router-link>
                    <button @click="pushShow(m)">push查看</button>
                    <button @click="replaceShow(m)">replace查看</button>
                </li>
            </ul>
            <hr>
            <router-view ></router-view>
        </div>
</template>
<script>
    export default{
        name:'Message',
        methods: {
          pushShow(m){
            this.$router.push({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
            })
          },
          replaceShow(m){
            this.$router.replace({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
            })
          }
        },
        data () {
            return {
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'}
                ]
            }
        }
    }
</script>