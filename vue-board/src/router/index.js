import { createRouter, createWebHistory } from "vue-router";
import PostListView from "../views/PostListView.vue";
import PostFormView from "../views/PostFormView.vue";
import PostDetailView from "../views/PostDetailView.vue";

const routes = [
  { path: "/", redirect: "/posts" },
  { path: "/posts", name: "PostList", component: PostListView },
  { path: "/posts/new", name: "PostForm", component: PostFormView },
  { path: "/posts/:id", name: "PostDetail", component: PostDetailView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
