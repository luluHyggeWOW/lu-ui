import { createApp } from 'vue'
import App from './App.vue'
import LuUI from '../packages'
const app = createApp(App)
app.use(LuUI)
app.mount('#app')
