<template>
  <li>
    <span
      @click="$emit('toggle', todo.id)"
      :style="{
        textDecoration: todo.done ? 'line-through' : 'none',
        cursor: 'pointer',
      }"
    >
      {{ todo.name }}
    </span>
    <button @click="$emit('remove', todo.id)">삭제</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
