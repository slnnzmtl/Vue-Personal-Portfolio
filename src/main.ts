import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fontsource/fira-code/400.css' // Regular
import '@fontsource/fira-code/500.css' // Medium
import '@fontsource/fira-code/600.css' // Semi-bold
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
