<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p>{{ post.author }}</p>
    <button @click="$emit('back')">목록으로 돌아가기</button>
    <button @click="deletePost" style="color: red; margin-left: 1rem">
      삭제
    </button>
  </div>
  <div v-else>
    <p>게시글이 없습니다.</p>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  methods: {
    deletePost() {
      const confirmed = confirm("정말 삭제하시겠습니까?");
      if (confirmed) {
        this.$emit("delete-post", this.post.id);
      }
    },
  },
};
</script>
<style scoped>
div {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem 2.5rem;
  background-color: #f3f0ff; /* 은은한 연보라 배경 */
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(108, 92, 231, 0.15);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #4b3ca7; /* 진한 연보라 텍스트 */
}

h2 {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.2rem;
  border-bottom: 2px solid #6c5ce7;
  padding-bottom: 0.5rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  white-space: pre-wrap; /* 줄바꿈 유지 */
}

button {
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;
}

button:hover {
  background-color: #5548c8;
}

button + button {
  margin-left: 1rem;
  background-color: #ff6b6b;
}

button + button:hover {
  background-color: #e65555;
}
</style>
