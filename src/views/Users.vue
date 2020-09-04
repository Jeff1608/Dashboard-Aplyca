<template>
  <div class="dashboard">
    <Header />
    <Sidebar />
    <UserList />
    <UserButtonAdd />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import UserList from "@/components/UserList.vue";
import UserButtonAdd from "@/components/UserButtonAdd.vue";

export default {
  name: "User",
  components: {
    Header,
    Sidebar,
    UserList,
    UserButtonAdd
  }
};
</script>
