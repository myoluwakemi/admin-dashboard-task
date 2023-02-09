<template>
  <div>
    <loader-comp v-if="loading"/>
    <transition-group name="fade" tag="ul" class="tasks__list">
      <todo-item
        v-for="task in getTodos"
        :key="task.id"
        :todoTitle="task.title"
        :isComplete="task.completed"
      />
    </transition-group>
  </div>
</template>
<script>
import todoItem from "@/components/todoItem.vue";
import LoaderComp from "@/components/LoaderComp.vue";
import { onMounted, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";
export default {
  components: { todoItem, LoaderComp },
  name: "TodoList",
  setup() {
    const route = useRoute();
    const store = useUserStore();

    const getTodos = computed(() => {
      return store.todo;
    });
    const loading = computed(() => {
      return store.loading;
    });
    onMounted(() => {
      const id = route.params.userId;
      store.fetchTodo(id);
    });
    return { getTodos, loading };
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.tasks__list {
  padding: 0;
}
.task__item {
  margin-bottom: 0.5em;
  cursor: pointer;
  padding: 0.893rem 2rem;
  position: relative;
  transition: all 0.2s, border-color 0s;
  list-style: none;
  border-top: 1px solid #ebe9f1;
}
.completed {
  text-decoration: line-through;
  font-weight: bold;
}
</style>
>
