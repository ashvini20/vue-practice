import { createApp, createSlots } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Counter from './components/TheCounter.vue'
import User from './components/User.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store.js' ;

const router = createRouter({
    history : createWebHistory(),
    routes:[
        {path:'/', component:Home},
        {path:'/login', component:Login},
        {path:'/signup', component:Signup},
        {path: '/user/:id', component:User},
        {path:'/counter', component:Counter},
    ]
})

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(store)
    .mount('#app')

