<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
body{
  padding: 0;
  margin: 0;
}
.logo{
  width: 200px;
}
.error{
  color: #ffffff;
  background: lightcoral;
  padding: 10px;
  margin: 10px auto;
  width: 300px;
  border: 1px solid skyblue;
  border-radius: 25px;
}
.register input,
.login input,
.add input,
.edit input{
  width: 300px;
  height: 20px;
  padding: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
  border-radius: 25px;
}
.register button,
.login button,
.add button,
.edit button{
  width: 340px;
  height: 40px;
  border: 1px solid skyblue;
  background: deepskyblue;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;

}
.register button,
.login button{
  width: 120px;
  margin: 0 10px;
}
.register .btn-tab,
.login .btn-tab{
  background: #5a8b00;
}
.register button a,
.login button a{
  color: white;
  text-decoration: none;
}

</style>
