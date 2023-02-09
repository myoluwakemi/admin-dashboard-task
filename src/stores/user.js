import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    loading: false,
    users: [],
    post: [],
    todo: [],
    album: [],
  }),
  getters: {
    getUsers(state) {
      return state.users;
    },
    getLoading(state) {
      return state.loading;
    },
    getPost(state) {
      return state.post;
    },
    getTodo(state) {
      return state.todo;
    },
    getAlbums(state) {
      return state.album;
    },
  },
  actions: {
    async fetchUsers() {
      try {
        this.loading = true;
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.loading = false;
        this.users = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
        this.loading = false;
      }
    },
    async fetchPost(id) {
      try {
        this.loading = true;
        const data = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}/posts`
        );
        this.loading = false;
        this.post = data.data;
      } catch (error) {
        alert(error);
        this.loading = false;
      }
    },
    async fetchTodo(id) {
      try {
        this.loading = true;
        const data = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}/todos`
        );
        this.loading = false;
        this.todo = data.data;
      } catch (error) {
        alert(error);
        this.loading = false;
      }
    },
    async fetchAlbums(id) {
      try {
        this.loading = true;
        const data = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${id}/photos`
        );
        this.loading = false;
        this.album = data.data;
      } catch (error) {
        alert(error);
        this.loading = false;
      }
    },
  },
});
