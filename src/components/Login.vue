<template>
<div>
    <h3>Login form</h3>
    <input type="text" v-model="loginForm.username" name="username"><br/><br/>
     <input type="password" v-model="loginForm.password" name="password"><br/><br/>
     <button v-on:click="submit">Submit</button>
</div>    
</template>
<script>


export default {
    name:'Login',
    data(){
        return{
            loginForm:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        submit(){
            console.log("get login form data =>", this.loginForm.username, this.loginForm.password)
        }
    }
}
</script>
