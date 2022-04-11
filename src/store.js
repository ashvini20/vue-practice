import { createStore } from 'vuex'

const counterModule = {
    state(){
        return {
         counter : 0,
        }
    },
    mutations:{
     increment(state, payload){
         state.counter = state.counter + payload.value;
     }
    },
    getters:{
     finalCounter(state){
         return state.counter * 2;
     }
    },
    actions:{
     increment(context, payload){
         context.commit('increment', payload)
     }
    }
};

const authModule = {
 state(){
     return {
         isLoggedIn : false, 
     } 
 },
 mutations:{
    
     setAuth(state, payload){
         state.isLoggedIn = payload.isAuth
     }
 },
 getters:{
    
     isAuth(state){
         return state.isLoggedIn ;
     }
 },
 actions:{
    
     setAuth(context, payload){
         context.commit('setAuth', payload )
     },
 }
};

const store = createStore({
 modules:{
     numbers : counterModule,
     auth : authModule, 
 }
})

export default store ;