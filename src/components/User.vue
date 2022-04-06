<template>
<div>
    <h3>User Detail</h3>
    <h3>User ID : {{user_id}} </h3>
   
</div>    
</template>
<script>


export default {
    name:'User',
    data(){
        return{
           user_id: this.$route.params.id
        }
    },
    methods:{
       
    }
}
</script>
