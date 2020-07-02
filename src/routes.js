import Home from './pages/home/home.vue';
import Login from './pages/login/login.vue';
import Register from './pages/cadastrar/cadastrar.vue';

export const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/cadastrar", component: Register },
  { path: "*", redirect: "/login" }
]
