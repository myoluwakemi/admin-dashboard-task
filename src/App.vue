<template>
  <main>
    <div class="view">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />

        </transition>

      </router-view>
   
      
    </div>
  </main>
</template>

<script>
// import LandingPageHeader from './components/LandingPageHeader.vue'

export default {
  name: "App",
  components: {
    // LandingPageHeader
  },
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap";
@import "./assets/globalsass/index.scss";
#app {
  font-family: "DM Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.exact-active-link {
  font-weight: bold;
}
</style>

