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
  </div>
</template>
<script>
export default {
  name: "DashboardLayout",
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
          name: "AlbumPage",
        },
        {
          icon: "",
          title: "Todo",
          name: "TodoList",
        },
      ],
    };
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.home-route{
  margin-right: 2rem;
}
</style>
