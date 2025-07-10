import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// 전역 상태 (posts) 간단히 관리하기 위해 $root에 초기화
app.config.globalProperties.posts = [];

app.use(router).mount("#app");
