<template>
  <div class="dashboard">
    <Header />
    <Sidebar />
    <UserList />
    <UserButtonAdd @click="addHandler" />
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
  },
  methods: {
    addHandler(btn) {
      console.log(btn);
    }
  }
};
</script>
