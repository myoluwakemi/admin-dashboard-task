<template>
  <div class="post-wrapper">
    <loader-comp v-if="loading"/>
    <timeline v-for="post in getPost" :key="post.id">
      <timeline-title>{{ post.title }}</timeline-title>
      <timeline-item bg-color="#000">{{ post.body }}</timeline-item>
      <timeline-item style="font-weight: bold">Feb, 2023</timeline-item>
    </timeline>
  </div>
</template>
<script>
import { onMounted, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";
import { Timeline, TimelineTitle, TimelineItem } from "vue3-timeline";
import LoaderComp from "@/components/LoaderComp.vue";
export default {
  name: "PostPage",
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle,
    LoaderComp
  },

  setup() {
    const route = useRoute();
    const store = useUserStore();

    const getPost = computed(() => {
      return store.post;
    });
    const loading = computed(() => {
      return store.loading;
    });

    onMounted(() => {
      const id = route.params.userId;
      store.fetchPost(id);
    });
    return {
      getPost,
      loading,
    };
  },
};
</script>
<style>
.post-wrapper{
  padding: 1.5rem 2rem;
}
</style>
