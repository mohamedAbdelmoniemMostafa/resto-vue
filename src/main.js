import { createApp } from 'vue'
import App from './App.vue'
import {router} from './routers.js'


window.base_url = 'http://localhost:3000';

const app = createApp(App);
app.use(router);
app.mount('#app');
