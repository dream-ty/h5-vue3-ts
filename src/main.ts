import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 移动端适配
import 'amfe-flexible'
// 引入全局样式
import '@/assets/styles/index.scss'
// import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
