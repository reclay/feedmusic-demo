import { createApp } from "vue";
import "./style/index.scss";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
