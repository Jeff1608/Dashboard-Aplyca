<template>
  <div class="todoList">
    <div class="title">
      <span>Todo's</span>
      <img src="@/assets/img/dots.png" alt="dots" class="dots" />
    </div>

    <div class="todosTable">
      <table>
        <thead>
          <tr>
            <th v-for="item in tableHeaderData" :key="item.key">
              <span>{{ item.key }}</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in todoArray" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td :class="item.completed ? 'done' : 'pending'">
              {{ item.completed }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoList",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      tableHeaderData: "todos/getTableHeaderData",
      todoArray: "todos/getTodoArray"
    })
  },
  async mounted() {
    await this.getTodos(this.id);
  },
  methods: {
    ...mapActions({
      getTodos: "todos/getTodos"
    })
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    async $route(to, from) {
      if (to.params.id != from.params.id) {
        await this.getTodos(to.params.id);
      }
    }
  }
};
</script>

<style scoped>
.todoList {
  position: absolute;
  width: 830px;
  height: 551px;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0;
  margin: auto;
  background: #ffffff;
  border-radius: 5px;
}

.title {
  position: absolute;
  width: 779px;
  left: 31px;
  top: 32px;
  color: #20253a;
  font-size: 15px;
}

.dots {
  position: absolute;
  width: 17px;
  right: 6px;
}

.todosTable {
  position: absolute;
  overflow-y: auto;
  width: 789px;
  height: 480px;
  left: 0;
  right: 0;
  top: 70px;
  margin: 0 auto;
}

table {
  border-collapse: collapse;
  width: 100%;
}

table thead td,
table thead th {
  color: #9b9eac;
}

td,
th {
  padding: 30px 10px;
  text-align: left;
  color: #20253a;
}

.done {
  color: #28a745;
}
.pending {
  color: #dc3545;
}

tbody tr:nth-child(odd) {
  background-color: #f5f6fa;
}
</style>
