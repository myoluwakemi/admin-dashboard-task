<template>
 <main>
  
  <div class="view">
    <RouterView/>

  </div>
 </main>
  
</template>

<script>
// import LandingPageHeader from './components/LandingPageHeader.vue'





export default {
  name: 'App',
  components: {
    // LandingPageHeader
   
}
}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap";
@import './assets/globalsass/index.scss';
#app {
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
 
}
</style>
<style>
.active {
  color: #42b983;
}

.exact-active-link {
  color: #42b983;
  font-weight: bold;
}
</style>
