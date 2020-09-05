<template>
  <div class="todos">
    <TodoList :id="id" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Todos",
  components: {
    TodoList
  },
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
