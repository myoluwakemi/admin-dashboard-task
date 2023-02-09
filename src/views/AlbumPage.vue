<template>
  <div class="album">
    <loader-comp v-if="loading" />
    <timeline v-for="album in getAlbum" :key="album.id">
      <div @click="toggleModal(album)">
        <timeline-title>{{ album.title }}</timeline-title>
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
        <div class="modal-body-content">
          <div class="avatar-wrapper">
            <img :src="albumDetail.url" />
          </div>
          <span>User</span>
        </div>
      </picture-modal>
    </transition>
  </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
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
    LoaderComp,
  },

  setup() {
    const route = useRoute();
    const store = useUserStore();
    const showModal = ref(false);
    const albumDetail = ref({});

    function toggleModal(album) {
      showModal.value = true;
      console.log(album);
      albumDetail.value = album;
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
      toggleModal,
    };
  },
};
</script>
<style>
.album {
  padding: 1.5rem 2rem;
}
.album img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.modal-body-content span{
  background: rgba(0, 207, 232, 0.12) !important;
  padding: 0.3rem 0.5rem;
    text-align: center;
    border-radius: 0.358rem;
    color: #00cfe8 !important;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
}
.avatar-wrapper {
  height: 110px;
  width: 110px;
  margin-bottom: 1.5rem;
  
}
.avatar-wrapper img{
  border-radius: 0.357rem !important;

}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
>
