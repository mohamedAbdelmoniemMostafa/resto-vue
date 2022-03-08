<template>
  <Header/>
  <h1>Hello User, Welcome on Edit Restaurant Page</h1>
  <div v-if="error" class="error">{{error}}</div>
  <div class="edit">
    <input type="text" v-model="formData.name" placeholder="Enter Name">
    <input type="tel" v-model="formData.contact" placeholder="Enter Contact" >
    <input type="text" v-model="formData.address" placeholder="Enter Address">
    <button @click="update">update</button>
  </div>
</template>

<script>
import Header from "../Header";
import axios from "axios";

export default {
  name: "Edit",
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
    async update(){
      // let result = await axios.put(`${window.base_url}/restaurants/${this.formData.id}`,this.formData)
      let result = await axios.put(`/restaurants/${this.formData.id}`,this.formData)
      if(result.status == 200){
        this.formData = result.data
        this.$router.push({name:"Home"})
      }
    },
    async getRestaurant(id){
      // let result = await axios.get(`${window.base_url}/restaurants/${id}`);
      let result = await axios.get(`/restaurants/${id}`);
      if(result.status == 200){
        this.formData = result.data
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user')
    if(!user){
      this.$router.push({name:'Login'})
    }
    let {id} = this.$route.params;
   this.getRestaurant(id)
  }
}
</script>

<style scoped>

</style>