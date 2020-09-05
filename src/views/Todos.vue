<template>
  <div class="todos">
    <TodoList :id="id" />

    <router-link :class="'btnBack'" :to="{ name: 'Users' }">
      <span class="text">Go to user dashboard</span>
    </router-link>
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

<style scoped>
.btnBack {
  position: absolute;
  left: 10px;
  top: 10px;
  background: #17a2b8;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
}

.btnBack:hover {
  background: #138496;
}

.btnBack .text {
  color: #fff;
  padding: 15px 20px;
}
</style>
