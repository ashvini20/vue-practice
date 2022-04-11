<template>
<div>
    <h3>Signup form</h3>
    <form @submit="signup">
    <label>Username: </label><input class="form-control" type="text" v-model="username" name="username">
    <br/>
    <p v-if="usernameErr !== ''">{{usernameErr}}</p>
    <br/>
     <label>Email: </label><input type="email" v-model="email" name="email"><br/>
     <p v-if="emailErr !== ''">{{emailErr}}</p>
    <br/>
      <label>Password: </label><input type="password" v-model="password" name="password"><br/>
     <p v-if="passwordErr !== ''">{{passwordErr}}</p>
     <br/>
     <button type="submit" v-bind:disabled="disabled" >Submit</button>
     </form>
</div>    
</template>
<script>
import axios from 'axios'
export default {
    name:'Signup',
    data(){
        return{
            username:null,
            password:null,
            email:'test@gmail.com', 
            usernameErr:'', 
            emailErr:'',
            passwordErr:'', 
            disabled: false 
        }
    },
    methods:{
        signup(e){
            if(!this.username){
                this.usernameErr = 'User name is required';
            }
            if(!this.email){
                this.emailErr = 'Email is required';
            }
            if(!this.password){
                this.passwordErr = 'Password is required';
            }
            if(this.password.length < 6){
                this.passwordErr = 'Password must be atleast 6 charachters long';
            }
            e.preventDefault();
            console.log("get signup form data =>", this.username, this.password)
            var signup_url = 'https://admin.creatorclasses.co/api/v1/user/signup/';  
            const data = {
                username : this.username,
                password : this.password ,
                email : this.email,
            }
            // fetch(signup_url, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({data }),
            // });
            axios.post(signup_url, data).then((res)=>{
                console.log(res)
                if(res.status == 200 && res.data){
                    if(res.data.code == 200 || res.data.code == 201){
                        alert(res.data.message);
                        setTimeout(() => {
                            this.$router.push('login') 
                        }, 5000);
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
           
        },
        resetForm(){
            this.username = null,
            this.password = null,
            this.email = null, 
            this.usernameErr = '', 
            this.emailErr = '',
            this.passwordError = ''
        }
    }
}
</script>
