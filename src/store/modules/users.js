import axios from "axios";

const users = {
  namespaced: true,

  state: {
    tableHeaderData: [
      { key: "Id" },
      { key: "Name" },
      { key: "Username" },
      { key: "Email" },
      { key: "Address" },
      { key: "Company" },
      { key: "Options" }
    ],
    userArrayBase: [],
    userArray: []
  },

  mutations: {
    SET_USERS_BASE(state, data) {
      state.userArrayBase = data;
    },
    SET_USERS(state) {
      state.userArray.push(state.userArrayBase[state.userArray.length]);
    }
  },

  actions: {
    async getUsers({ commit }) {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log(response);
          commit("SET_USERS_BASE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setUsers({ commit }) {
      commit("SET_USERS");
    }
  },

  getters: {
    getTableHeaderData: (state) => {
      return state.tableHeaderData;
    },
    getUserArray: (state) => {
      return state.userArray;
    },
    getButtonAddDisabled: (state) => {
      return state.userArrayBase.length == state.userArray.length;
    }
  }
};

export default users;
