import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@fontsource/fira-code/400.css"; // Regular
import "@fontsource/fira-code/500.css"; // Medium
import "@fontsource/fira-code/600.css"; // Semi-bold
import "./styles/style.css";
import globalComponents from "./components/global-components";

const app = createApp(App);
const pinia = createPinia();

app.use(globalComponents);

app.use(router);
app.use(pinia);
app.mount("#app");
