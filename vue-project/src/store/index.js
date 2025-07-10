import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, name: "vue공부", chk: false },
      { id: 2, name: "잠자기", chk: false },
      { id: 3, name: "tv보기", chk: false },
    ],
    title: "hello",
  },
  getters: {
    titling(state) {
      return state.title;
    },
    todoList(state) {
      return state.todos;
    },
  },
  mutations: {
    addTodo(state, name) {
      const id = state.todos[state.todos.length - 1].id;
      const todo = {
        id: id + 1,
        name: name,
        chk: false,
      };
      state.todos.push(todo);
    },
  },
});
