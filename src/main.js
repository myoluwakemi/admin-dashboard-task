import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { plugin } from 'vue3-timeline'
import 'vue3-timeline/dist/style.css'


const pinia = createPinia();

const app = createApp(App);

app.use(plugin)
app.use(pinia);
app.use(router);
app.mount("#app");


