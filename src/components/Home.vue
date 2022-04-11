<template>
<div>

  <button v-if="isAuth" v-on:click="setAuth({isAuth:false})">Logout</button>

    <h3>Adding 2 to counter :  {{ counter }}</h3>
    <button v-on:click="addCounter">Add to counter</button><br/><br/>
    <button v-on:click="display">Toggle</button> <br/><br/>

    

    <h1 v-if="show">Hello from home </h1>

    <div v-if="isAuth">
      <h1>Users data </h1>
      <ul v-for="user in  users" v-bind:key="user.id">
        <li>{{ user.id }} </li>
          <router-link  :to="'/user/' + user.id">{{user.name}}</router-link>
          <li>${{ user.fee }}</li>
          <ul v-for="sub in user.sub" v-bind:key="sub.id">
            <li>{{sub }}</li>
          </ul>
      </ul>
    </div>
     

     <button v-on:click="updateTitle()">Update parent title from Child</button>

</div>
</template>

<script>

import { mapGetters , mapActions } from 'vuex'

export default {
  name: 'Home',
  data(){
    return {
      show : false,
      users:[
        {id:1, name:'test', fee:750 ,sub:['english', 'maths', 'social']},
        {id:2, name:'rohan', fee:500, sub:['science', 'social']},
        {id:3, name:'ruhi', fee:550 , sub:['physics', 'biology']}
      ]
    }
  },
  computed:{
      counter(){
        return this.$store.state.counter ; 
      },
      isAuth(){
        return this.$store.getters.isAuth; 
      },

  },
  methods:{
    display(){
      this.show = !this.show
    },
    updateTitle(){
      this.$emit('changeTitle', 'Parent title updated from child  ')
    },
    
    addCounter(){
      this.$store.commit({
        type:'increment',
        value:2
      });
    },

    ...mapActions(['setAuth'])

  },
  created:function () {
      console.log('CREATED')
  },
  beforeCreate:function () {
      console.log('BEFORE CREATE')
  },
  mount:function () {
      console.log('MOUNTED')
  },
   beforeMount:function () {
      console.log('BEFORE MOUNT')
  },
    destroyed:function () {
      console.log('DESTROYED')
  }
 
}
</script>
