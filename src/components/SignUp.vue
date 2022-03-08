<template>
  <img alt="resto logo" class="logo" src="../assets/resto-logo.jpg">
  <h1>SignUp</h1>
  <div v-if="error" class="error">{{error}}</div>
  <div class="register" @keyup.enter="signUp">
    <input type="text" v-model="formData.name" placeholder="Enter Name">
    <input type="email" v-model="formData.email" placeholder="Enter Email">
    <input type="password" v-model="formData.password" placeholder="Enter Password">
    <button class="btn-tab">
      <router-link :to="{name:'Login'}">Login</router-link>
    </button>
    <button @click="signUp">signup</button>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "SignUp",
  data(){
    return{
      formData:{
        "email":'',
        "name":'',
        "password":''
      },
      error:'',
    }
  },
  methods:{
     async signUp(){
       for(let data in this.formData){
        if(this.formData[data] == ''){
          this.error = `${data} is required`;
          return 0;
        }
      }
      let result = await axios.post(`${window.base_url}/register`,this.formData);
      if(result.status==201){
        localStorage.setItem('user',JSON.stringify(result.data))
        this.$router.push({name:'Home'})
      }else{
        console.log('sign up fail')
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user')
    if(user){
      this.$router.push({name:'Home'})
    }
  }
}
</script>

<style scoped>


</style>