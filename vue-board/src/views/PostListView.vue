<template>
  <PostList :posts="posts" @select-post="goDetail" @delete-post="deletePost" />
</template>

<script>
import PostList from "../components/PostList.vue";

export default {
  components: { PostList },
  data() {
    return {
      posts: this.$root.posts || [],
    };
  },
  methods: {
    goDetail(id) {
      this.$router.push({ name: "PostDetail", params: { id } });
    },
    deletePost(id) {
      const confirmed = confirm("정말 삭제하시겠습니까?");
      if (!confirmed) return;

      this.$root.posts = this.$root.posts.filter((post) => post.id !== id);
      this.posts = this.$root.posts; // 상태 동기화
    },
  },
};
</script>
