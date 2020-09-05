import axios from "axios";

const todos = {
  namespaced: true,
  state: {
    tableHeaderData: [{ key: "Id" }, { key: "Title" }, { key: "Completed" }],
    todoArray: []
  },

  mutations: {
    SET_TODOS(state, data) {
      state.todoArray = data;
    }
  },

  actions: {
    async getTodos({ commit }, id) {
      await axios
        .get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then((response) => {
          console.log(response);
          commit("SET_TODOS", response.data);
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
    getTodoArray: (state) => {
      return state.todoArray;
    }
  }
};

export default todos;
