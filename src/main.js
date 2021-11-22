import { createApp } from "vue";
import Toast from "vue-toastification";
import VueLazyLoad from "vue3-lazyload";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";

createApp(App)
  .use(store)
  .use(router)
  .use(Toast, {})
  .use(VueLazyLoad, {})
  .mount("#app");
