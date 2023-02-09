<template>
  <div class="wrapper">
    <div class="main-menu">
      <div className="nav-links-container">
        <div v-for="item in menu" :key="item">
          <router-link
            ro
            class="nav-link"
            :to="{
              name: `${item.name}`,
              params: { userId: $route.params.userId },
            }"
          >
            <span className="nav-icon">{{ item.icon }}</span>
            <span>{{ item.title }}</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="navbar">
        <span @click="showSideBar = true" class="header-menu-toggler"> &#8801; </span>
        <router-link class="home-route" to="/">Home</router-link>
        <router-link to="/users">User</router-link>
      </div>
      <div className="header-navbar-shadow"></div>
      <div class="routes-wrapper">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
    <mobile-component v-if="showSideBar" @close="showSideBar = false"  />

   
  </div>
  
</template>
<script>
import MobileComponent from "../components/MobileSideBar.vue"
import {ref} from "vue"


export default {
  name: "DashboardLayout",
  components: {MobileComponent},
  
  data() {
    return {
      
      menu: [
        {
          icon: "",
          title: "Post",
          name: "PostPage",
        },
        {
          icon: "",
          title: "Album",
          name: "AlbumView",
        },
        {
          icon: "",
          title: "Todo",
          name: "TodoList",
        },
      ],
    };
  },
  setup(){
    const showSideBar = ref(false)
    return {
      showSideBar
    }
  }
 
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.home-route {
  margin-right: 2rem;
}
</style>
