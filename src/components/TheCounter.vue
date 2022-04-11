<template>
    <h3>Adding 5 to counter : {{finalCounter}}</h3>

    <button v-on:click="increment({value:5})">Add to counter</button>
</template>
<script>

import { mapGetters , mapActions } from 'vuex'

export default {
    computed:{
    //   counter(){
    //     return this.$store.getters.finalCounter ; 
    //   }  
    ...mapGetters(['finalCounter'])
  },
  methods:{
    //     addCounter(){
    //   this.$store.commit({
    //     type:'increment',
    //     value:5
    //   });
    // }

     ...mapActions(['increment'])
  }
}
</script>