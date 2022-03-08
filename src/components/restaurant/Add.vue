<template>
  <Header/>
  <h1>Hello User, Welcome on Add Restaurant Page</h1>
  <div v-if="error" class="error">{{error}}</div>
  <div class="add">
    <input type="text" v-model="formData.name" placeholder="Enter Name">
    <input type="tel" v-model="formData.contact" placeholder="Enter Contact" >
    <input type="text" v-model="formData.address" placeholder="Enter Address">
    <button @click="add">add</button>
  </div>
</template>

<script>
import Header from "../Header";
import axios from "axios";
export default {
  name: "Add.vue",
  components: {
    Header
  },
  data(){
    return{
      formData:{
        name:'',
        contact:'',
        address:''
      },
      error:''
    }
  },
  methods:{
   async add(){
     for(let data in this.formData){
       if(this.formData[data] == ''){
         this.error = `${data} is required`;
         return 0;
       }
     }
     let result = await axios.post(`${window.base_url}/restaurants`,this.formData);
     if(result.status==201){
       this.$router.push({name:'Home'});
     }else{
        console.log(result)
     }
    }
  },
  mounted() {
    let user = localStorage.getItem('user')
    if(!user){
      this.$router.push({name:'Login'})
    }
  }
}
</script>

<style scoped>

</style>