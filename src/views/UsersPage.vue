<template>
  <div class="table-wrapper">
    <div class="inner-user-table">
      <loader-comp v-if="loading" />
      <user-list @goto-admin="gotoAdmin" :fields="fields" :userList="users" />

    </div>
  </div>
</template>
<script>
import UserList from "../components/UserList.vue";
import { useUserStore } from "@/stores/user";
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import LoaderComp from "@/components/LoaderComp.vue";
export default {
  name: "UsersPage",
  components: { UserList, LoaderComp },
  setup() {
    const router = useRouter();
    const gotoAdmin = (id) => {
      router.push(`/dashboard/${id}`);
    };
    const store = useUserStore();
    const getLoading = computed(() => {
      return store.getLoading;
    });
    const getUsers = computed(() => {
      return store.getUsers;
    });
    const users = computed(() => {
      return store.users;
    });
    const loading = computed(() => {
      return store.loading;
    });
    onMounted(() => {
      store.fetchUsers();
    });

    const fields = ["id", "name", "username", "email", "website"];
    return { fields, getLoading, getUsers, users, loading, gotoAdmin };
  },
};
</script>
<style scoped>
.inner-user-table {
  max-width: 1200px;
  margin: 3rem auto;

}
</style>
