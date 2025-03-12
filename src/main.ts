import { createApp } from "vue";
import { createPinia } from "pinia";
import "./styles/style.css";
import App from "./App.vue";
import router from "./router";
import globalComponents from "./components/global-components";

const app = createApp(App);
const pinia = createPinia();

app.use(globalComponents);

app.use(router);
app.use(pinia);

app.mount("#app");

