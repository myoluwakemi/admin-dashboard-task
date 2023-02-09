<template>
  <div class="mobile-sidebarwrapper">
    <div class="sidebar">
      <div class="sidebar-header">
        <span @click="$emit('close')">&#10006;</span>
      </div>
      <div className="nav-links-container">
        <div v-for="item in menu" :key="item">
          <router-link
            @click="$emit('close')"
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
  </div>
</template>
<script >
export default {
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
  setup() {},
};
</script>
<style scoped>
.mobile-sidebarwrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(4px);
  transition: 0.4s transform ease;
}
.sidebar {
  padding: 1rem;
  position: relative;
  width: 100%;
  height: 100%;
  width: 260px;
  background: #fff;
}

</style>