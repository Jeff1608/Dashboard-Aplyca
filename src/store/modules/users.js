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
    userArray: []
  },

  mutations: {
    SET_USERS(state, data) {
      state.userArray = data;
    }
  },

  actions: {
    async getUsers({ commit }) {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log(response);
          commit("SET_USERS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  getters: {
    getTableHeaderData: (state) => {
      return state.tableHeaderData;
    },
    getUserArray: (state) => {
      return state.userArray;
    }
  }
};

export default users;
