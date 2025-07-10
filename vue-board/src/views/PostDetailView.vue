<template>
  <PostDetail :post="post" @back="goBack" @delete-post="deleteAndBack" />
</template>

<script>
import PostDetail from "../components/PostDetail.vue";

export default {
  components: { PostDetail },
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    const postId = Number(this.$route.params.id);
    this.post = this.$root.posts.find((p) => p.id === postId);
  },
  methods: {
    goBack() {
      this.$router.push({ name: "PostList" });
    },
    deleteAndBack(id) {
      this.$root.posts = this.$root.posts.filter((post) => post.id !== id);
      this.goBack();
    },
  },
};
</script>
