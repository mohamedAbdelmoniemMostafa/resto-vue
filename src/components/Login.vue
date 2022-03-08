<template>
  <img alt="resto logo" class="logo" src="../assets/resto-logo.jpg">
  <h1>Login</h1>
  <div v-if="error" class="error">{{error}}</div>
  <div class="login" @keyup.enter="login">
    <input type="email" v-model="formData.email" placeholder="Enter Email">
    <input type="password" v-model="formData.password" placeholder="Enter Password">
    <button class="btn-tab">
      <router-link :to="{name:'SignUp'}">signup</router-link>
    </button>
    <button @click="login">login</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data(){
    return{
      formData:{
        email:'',
        password:''
      },
      error:''
    }
  },
  methods:{
     async login(){
      for(let data in this.formData){
        if(this.formData[data] == ''){
          this.error = `${data} is required`;
          return 0;
        }
      }
      // let result = await axios.post(`${window.base_url}/login`,this.formData);
      let result = await axios.post(`/login`,this.formData);

    if(result.status==200){
         localStorage.setItem('user',JSON.stringify(result.data))
         this.$router.push({name:'Home'})

       }else{
         console.log('login fail')
       }
     }
  },
  mounted() {
    let user = localStorage.getItem('user');
    if(user){
      this.$router.push({name:'Home'})
    }
  },
}
</script>

<style scoped>

</style>