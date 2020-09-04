<template>
  <div class="todos">
    <h1>TODO's of {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: "Todos",
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
