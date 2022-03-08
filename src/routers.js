import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import Add from "./components/restaurant/Add";
import Edit from "./components/restaurant/Edit";
import { createRouter ,createWebHistory } from 'vue-router'

const routes = [
    {path:'/',component:Home,name:'Home' },
    {path:'/sign-up',component:SignUp,name:'SignUp' },
    {path:'/login',component:Login,name:'Login' },
    {path:'/restaurant/add',component:Add,name:'addRestaurant' },
    {path:'/restaurant/:id/edit',component:Edit,name:'editRestaurant' },
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
});

export {router};