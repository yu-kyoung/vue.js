<template>
  <div>
    <h2>게시글 등록</h2>
    <form @submit.prevent="submitPost">
      <input v-model="title" placeholder="제목" required />
      <input v-model="author" placeholder="작성자" required />
      <textarea v-model="content" placeholder="내용" required></textarea>
      <button type="submit">등록</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      author: "",
    };
  },
  methods: {
    submitPost() {
      if (!this.title || !this.content || !this.author) return;

      // 부모에게 새 게시글 데이터 전달
      this.$emit("add-post", {
        id: Date.now(),
        title: this.title,
        content: this.content,
        author: this.author,
      });

      // 입력 초기화
      this.title = "";
      this.content = "";
      this.author = "";
    },
  },
};
</script>
<style scoped>
div {
  max-width: 600px;
  margin: 2rem auto;
  background-color: #f3f0ff; /* 은은한 연보라 배경 */
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(108, 92, 231, 0.15);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #4b3ca7; /* 진한 연보라 텍스트 */
}

h2 {
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  font-size: 1rem;
  padding: 0.7rem 1rem;
  margin-bottom: 1.2rem;
  border: 1.5px solid #b8a9f3;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: #6c5ce7;
  outline: none;
  box-shadow: 0 0 6px #6c5ce7aa;
}

textarea {
  min-height: 100px;
}

button {
  background-color: #6c5ce7;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.8rem 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #5548c8;
}
</style>
