<template>
  <div>
    <h2>Todo List 부모</h2>
    <input
      v-model="msg"
      @keyup.enter="addTodo"
      placeholder="할 일을 입력하세요"
    />
    <button @click="addTodo">추가</button>

    <ul>
      <todo-item
        v-for="todo in todoList"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
        @toggle="toggleTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
  data() {
    return {
      msg: "",
      todoList: [],
    };
  },
  methods: {
    addTodo() {
      if (!this.msg.trim()) return;
      const id = this.todoList.length
        ? this.todoList[this.todoList.length - 1].id + 1
        : 1;
      this.todoList.push({ id, name: this.msg.trim(), done: false });
      this.msg = "";
    },
    removeTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    toggleTodo(id) {
      const item = this.todoList.find((todo) => todo.id === id);
      if (item) item.done = !item.done;
    },
  },
};
</script>
