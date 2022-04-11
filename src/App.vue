<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <h1>{{title}}</h1>
    <!-- <Home v-on:changeTitle="updateTitle($event)"/>
    <Login/>
    <Signup/> -->
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/signup">Signup</router-link></li>
      <li><router-link to="/counter">Counter</router-link></li>
    </ul>

    <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import TheCounter from './components/TheCounter.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
     Home,
    Login,
    Signup,
    TheCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
