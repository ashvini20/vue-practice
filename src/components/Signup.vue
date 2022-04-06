<template>
<div>
    <h3>Signup form</h3>
    <p v-if="error.length">
        <b>Please correct the following errors</b>
        <ul>
            <li v-for="e in error" v-bind:key="e.id">{{e}}</li>
        </ul>
    </p>
    <form @submit="signup">
    <input type="text" v-model="username" name="username"><br/><br/>
     <input type="password" v-model="password" name="password"><br/><br/>
     <button type="submit" >Submit</button>
     </form>
</div>    
</template>
<script>


export default {
    name:'Signup',
    data(){
        return{
            error:[],
                username:null,
                password:null, 
        }
    },
    methods:{
        signup(e){
            this.error = []
            if(!this.username){
                this.error.push('User name is required')
            }
            if(!this.password){
                this.error.push('Password is required')
            }
            e.preventDefault();
            console.log("get signup form data =>", this.username, this.password)
        }
    }
}
</script>
