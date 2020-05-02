<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <div>
      <input type="text" v-model="inputValue">
    </div>
    <div id="nav">
      <router-link :to="'/page-square/' + inputValue">Go to ^2</router-link> |
      <router-link :to="'/page-cube/' + inputValue">Go to ^3</router-link> |
      <router-link to='/page-random/'>Go to random</router-link>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: 2,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
