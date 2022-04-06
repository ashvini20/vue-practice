import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import User from './components/User.vue'

const router = createRouter({
    history : createWebHistory(),
    routes:[
        {path:'/', component:Home},
        {path:'/login', component:Login},
        {path:'/signup', component:Signup},
        {path: '/user/:id', component:User}
    ]
})

createApp(App)
    .use(router)
    .mount('#app')

