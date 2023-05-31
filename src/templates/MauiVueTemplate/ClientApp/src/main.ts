import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { provideCrossPlatformService } from './services/CrossPlatform'

const app = createApp(App);
provideCrossPlatformService(app);
app.mount('#app');
