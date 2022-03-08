<template>
<div class="nav">
  <router-link :to="{name:'Home'}">Home</router-link>
  <router-link :to="{name:'addRestaurant'}">Add Restaurant</router-link>
  <router-link to="" @click="logout">Logout</router-link>
</div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push({name:"Login"})
    }
  }
}
</script>

<style scoped>
.nav{
  background: #2c3e50;
  padding: 20px;
}
.nav a{
  margin: 0 10px;
  text-decoration: none;
  color: white;
  font-size: 18px;
}
.nav a:hover{
  color: #8b7800;
}
</style>