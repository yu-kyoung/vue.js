import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";

createApp(App) //
  .use(router) //
  .mixin(mixins) //공통함수
  .mount("#app");

window.Kakao.init("a85d0b1706f1002f95715a358f65fef4");
