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
            <th v-for="item in dataHeader" :key="item.key">
              <span>{{ item.key }}</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in 4" :key="item.id">
            <td>id</td>
            <td>nombre</td>
            <td>apellido</td>
            <td>email</td>
            <td>direccion</td>
            <td>compañia</td>
            <td>
              <router-link :to="{ name: 'Todos', params: { id: '123' } }"
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
export default {
  name: "UserList",
  data() {
    return {
      dataHeader: [
        { key: "Id" },
        { key: "Name" },
        { key: "Username" },
        { key: "Email" },
        { key: "Address" },
        { key: "Company" },
        { key: "Options" }
      ]
    };
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
  width: 789px;
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
