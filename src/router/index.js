import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

export default  new VueRouter({
    routes:[
        {   
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
            {
                path:'news',
                component:News,
            },
            {
                path:'message',
                component:Message,
                children:[
                    {   
                        name:'xiangqing',
                        // params 需要使用占位，/：id/:title 
                        path:'detail',
                        component:Detail, 

                        // props 的第一种写法，值为对象，该对象中的所有Key-value都会以props的形式传递给Detail组件
                        // props:{a:1,b:'hello'}

                        //第二种写法,值为布尔值，若为真，就会把该路由组件收到的所有的params参数，以props的形式传给Detail组件
                        // 只能用于params 
                        // props:true

                        //第三种写法,值为函数
                        props($route){
                            return {
                                id:$route.query.id,
                                title:$route.query.title
                            }
                        }
                    }
                ]
            }
            ]
        }
    ]
})

