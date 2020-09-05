<template>
  <div class="dashboard">
    <Header />
    <Sidebar />
    <UserList />
    <UserButtonAdd @click="addHandler" :disabled="buttonAddDisabled" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import UserList from "@/components/UserList.vue";
import UserButtonAdd from "@/components/UserButtonAdd.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "User",
  components: {
    Header,
    Sidebar,
    UserList,
    UserButtonAdd
  },
  computed: {
    ...mapGetters({
      buttonAddDisabled: "users/getButtonAddDisabled"
    })
  },
  methods: {
    ...mapActions({
      setUsers: "users/setUsers"
    }),
    addHandler() {
      if (!this.buttonAddDisabled) {
        this.setUsers();
      }
    }
  }
};
</script>
