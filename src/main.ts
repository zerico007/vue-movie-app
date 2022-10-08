import { createApp } from "vue";
import { createPinia } from "pinia";
import RingLoader from "vue-spinner/src/RingLoader.vue";

import App from "./App.vue";

import "./styles/main.css";

const app = createApp(App);

app.component("RingLoader", RingLoader);

app.use(createPinia());

app.mount("#app");
