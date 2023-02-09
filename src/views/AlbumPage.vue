<template>
  <div class="album">
    <loader-comp v-if="loading"/>
    <timeline v-for="album in getAlbum" :key="album.id">
      <div @click="toggleModal(album.id)">
      <timeline-title >{{ album.title }}</timeline-title>
      <timeline-item>
        <template #others>
          <img :src="album.url" class="icon-heart" alt="image" />
        </template>
      </timeline-item>
      <timeline-item>Feb, 2023</timeline-item>
      </div>
    </timeline>
    
    <transition name="modal">
      <picture-modal v-if="showModal" @close="showModal = false">
        <div>
          {{ albumDetail }}
        </div>
      </picture-modal>

    </transition>
  </div>
</template>
<script>
import { ref,onMounted, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";
import { Timeline, TimelineTitle, TimelineItem } from "vue3-timeline";
import PictureModal from "@/components/PictureModal.vue";
import LoaderComp from "@/components/LoaderComp.vue";
export default {
  name: "AlbumPage",
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle,
    PictureModal,
    LoaderComp
  },

  setup() {
    const route = useRoute();
    const store = useUserStore();
    const showModal = ref(false)
    const albumDetail = ref({})

    function toggleModal(id){
      showModal.value = true
      const det = getAlbum.value.findIndex((alb)=>{ alb.id === id})
      console.log(det)
      albumDetail.value = getAlbum[det]

    }

    const getAlbum = computed(() => {
      return store.album;
    });
    const loading = computed(() => {
      return store.loading;
    });
    

    onMounted(() => {
      const id = route.params.userId;
      store.fetchAlbums(id);
    });
    return {
      getAlbum,
      loading,
      showModal,
      albumDetail,
      toggleModal
    };
  },
};
</script>
<style>
.album{
  padding: 1.5rem 2rem;
}
.album img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
>
