<template>
  <div>
    <h2>게시글 목록</h2>
    <ul>
      <li v-for="post in posts" :key="post.id" style="margin-bottom: 0.5rem">
        <span
          @click="$emit('select-post', post.id)"
          style="cursor: pointer; font-weight: bold"
        >
          {{ post.title }}
        </span>
        <span> 작성자 | {{ post.author }}</span>
        <button
          @click="$emit('delete-post', post.id)"
          style="margin-left: 1rem; color: red"
        >
          삭제
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
div {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  background-color: #f3f0ff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(108, 92, 231, 0.15);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #4b3ca7;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  border-bottom: 2px solid #6c5ce7;
  padding-bottom: 0.3rem;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd6ff;
}

li:last-child {
  border-bottom: none;
}

span {
  cursor: pointer;
  font-weight: 600;
  color: #4b3ca7;
  transition: color 0.3s ease;
}

span:hover {
  color: #6c5ce7;
}

button {
  background: none;
  border: none;
  color: #ff6b6b;
  font-weight: 600;
  cursor: pointer;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
  user-select: none;
}

button:hover {
  background-color: #ff6b6b;
  color: white;
}
</style>
