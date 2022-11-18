import { createApp } from 'vue'
// import './style.css'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(router)

app.config.globalProperties.$imgUrl = (path: string) =>
  new URL(`/src/assets/${path}`, import.meta.url).href
  
app.mount('#app')
