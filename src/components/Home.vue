<template>
<div>
    
    <button v-on:click="display">Toggle</button>
    <h1 v-if="show">Hello from home </h1>

     <h1>For loop in vue js </h1>
     <ul v-for="user in  users" v-bind:key="user.id">
       <li>{{ user.id }} </li>
        <router-link  :to="'/user/' + user.id">{{user.name}}</router-link>
        <li>${{ user.fee }}</li>
        <ul v-for="sub in user.sub" v-bind:key="sub.id">
          <li>{{sub }}</li>
        </ul>
     </ul>

     <button v-on:click="updateTitle()">Update parent title from Child</button>

</div>
</template>

<script>
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
  methods:{
    display(){
      this.show = !this.show
    },
    updateTitle(){
      this.$emit('changeTitle', 'Parent title updated from child  ')
    }
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
