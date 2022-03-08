<template>
  <Header/>
  <h1 v-if="user">Hello {{user.name || ''}}, Welcome on Home Page</h1>
  <table class="tbl-rest">
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Address</th>
      <th>Actions</th>
    </tr>

    <tr v-for="(restaurant,index) in restaurants" :key="restaurant.id">
      <td>{{++index}}</td>
      <td>{{restaurant.name}}</td>
      <td>{{restaurant.contact}}</td>
      <td>{{restaurant.address}}</td>
      <td>
        <router-link :to="`/restaurant/${restaurant.id}/edit`">
          <i class="fas fa-pencil-alt"></i>
        </router-link>
        <span @click="delRestaurant(restaurant.id)">
          <i class="fas fa-trash"></i>
        </span>
      </td>
    </tr>
  </table>
</template>

<script>
import Header from './Header.vue'
import axios from "axios";
import '@fortawesome/fontawesome-free/js/brands.js'
import '@fortawesome/fontawesome-free/js/solid.js'
import '@fortawesome/fontawesome-free/js/fontawesome.js'
export default {
  name: "Home",
  data(){
    return{
      user:null,
      restaurants:[],
    }
  },
  components: {
    Header,
  },
  methods:{
     async getRestaurants(){
      //  let restaurants = await axios.get(`${window.base_url}/restaurants`);
       let restaurants = await axios.get(`/restaurants`);
       if (restaurants.status==200){
         this.restaurants = restaurants.data;
       }
    },
    async delRestaurant(id){
      //  let result = await axios.delete(`${window.base_url}/restaurants/${id}`)
       let result = await axios.delete(`/restaurants/${id}`)
       if(result.status == 200){
         this.getRestaurants();
       }
    }
  },
  created() {
    let user = localStorage.getItem('user')
    if(!user){
       this.$router.push({name:'Login'})
       return 0;
    }
    this.user = JSON.parse(user).user;
    this.getRestaurants();
  }
}
</script>

<style scoped>

.tbl-rest{
  margin: 0 auto;
}
.tbl-rest tr{
  background: #2c3e50;
}
.tbl-rest td, .tbl-rest th{
  color: #fff;
  padding: 20px;
  border: 10px solid #fff;
  border-radius: 30px;
}
.tbl-rest td a{
  color: lightblue;
  text-decoration: none;
  margin: 0 5px;

}
.tbl-rest td span{
  cursor: pointer;
  margin: 0 5px;
  color: rgba(255, 0, 0, 0.54);
}
</style>