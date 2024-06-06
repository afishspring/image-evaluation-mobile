import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from "@/router/index.js"
import waterfall from 'vue-waterfall2'

const app = createApp(App)

app.use(router)
app.use(waterfall)

app.mount('#app')