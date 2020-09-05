<template>
  <div class="userList">
    <div class="title">
      <span>Users</span>
      <img src="@/assets/img/dots.png" alt="dots" class="dots" />
    </div>

    <div class="usersTable">
      <table>
        <thead>
          <tr>
            <th v-for="item in tableHeaderData" :key="item.key">
              <span>{{ item.key }}</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in userArray" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.email }}</td>
            <td>{{ fullAddress[index] }}</td>
            <td>{{ item.company.name }}</td>
            <td>
              <router-link :to="{ name: 'Todos', params: { id: `${item.id}` } }"
                >View Todos</router-link
              >
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
  name: "UserList",
  computed: {
    ...mapGetters({
      tableHeaderData: "users/getTableHeaderData",
      userArray: "users/getUserArray"
    }),
    fullAddress() {
      return this.userArray.map((item) => {
        return `${item.address.street} ${item.address.suite}, ${item.address.city}`;
      });
    }
  },
  async mounted() {
    await this.getUsers();
  },
  methods: {
    ...mapActions({
      getUsers: "users/getUsers"
    })
  }
};
</script>

<style scoped>
.userList {
  position: absolute;
  width: 831px;
  height: 551px;
  left: 281px;
  top: 165px;
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

.usersTable {
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

tbody tr:nth-child(odd) {
  background-color: #f5f6fa;
}
</style>
