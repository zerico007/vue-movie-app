import { createApp } from "vue";
import { createPinia } from "pinia";
import RingLoader from "vue-spinner/src/RingLoader.vue";
import VueFeather from "vue-feather";
import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";

import App from "./App.vue";

import "./styles/main.css";
import router from "./router";

const app = createApp(App);

app.component("RingLoader", RingLoader);
app.component(VueFeather.name, VueFeather);
app.component("v-select", vSelect);

app.use(createPinia());
app.use(router);

app.mount("#app");
