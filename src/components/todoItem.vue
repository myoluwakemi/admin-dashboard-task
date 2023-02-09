<template>
  <li class="task__item">
   <span :class="{ 'completed': isComplete }" >{{ todoTitle }}</span>
  </li>
</template>
<script>
export default {
  name: "TodoItem",
  props: {
    todoTitle: {
      type: String,
    },
    isComplete: {
        type: Boolean
    }
  },
};
</script>
<style>

</style>
