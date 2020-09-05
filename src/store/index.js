import Vue from "vue";
import Vuex from "vuex";
import users from "@/store/modules/users.js";
import todos from "@/store/modules/todos.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { users, todos }
});
