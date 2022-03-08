import { createApp } from 'vue'
import App from './App.vue'
import {router} from './routers.js'


// window.base_url = 'http://localhost:3000';
window.base_url = 'https://mo-resto.herokuapp.com/';

const app = createApp(App);
app.use(router);
app.mount('#app');
