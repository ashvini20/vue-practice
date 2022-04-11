<template>
<div>
    <h3>Login form</h3>
    <input type="text" v-model="loginForm.username" name="username"><br/><br/>
    <input type="password" v-model="loginForm.password" name="password"><br/><br/>
     <button v-on:click="submit">Submit</button>
</div>    
</template>
<script>

import axios from 'axios'
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
            var login_url = 'https://admin.creatorclasses.co/api/v1/user/login/';  
            const data = {
                email_or_username : this.loginForm.username ,
                password : this.loginForm.password ,
            }
            console.log( data )
              axios.post(login_url, data).then((res)=>{
                console.log(res)
                if(res.status == 200 && res.data){
                    if(res.data.code == 200 || res.data.code == 201){
                        alert(res.data.message);
                        this.$store.dispatch('setAuth', {isAuth:true})
                        setTimeout(() => {
                            this.$router.push('/') 
                        }, 200);
                    }else if(res.data.code == 400){
                        alert(res.data.message);
                    }
                }else{
                    if(res.code == 400){
                        alert(res.data.message);
                    }else{
                        alert('Something went wrong, Please try again later!');
                    }
                }
            })
        }
    }
}
</script>
