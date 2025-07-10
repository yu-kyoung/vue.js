import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js"; //저장소

createApp(App)
  .use(router)
  .use(store) // mount 전에 use 해야 함
  .mount("#app");
