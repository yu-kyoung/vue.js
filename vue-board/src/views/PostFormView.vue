<template>
  <PostForm @add-post="addPost" />
</template>

<script>
import PostForm from "../components/PostForm.vue";

export default {
  components: { PostForm },
  methods: {
    addPost(post) {
      this.$root.posts.push(post);
      this.$router.push({ name: "PostList" });
    },
  },
};
</script>
