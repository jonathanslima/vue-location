import Home from './pages/home/home.vue';
import Login from './pages/login/login.vue';
import Register from './pages/cadastrar/cadastrar.vue';
import Edit from './pages/perfil/editar/editar.vue';
import Visual from './pages/perfil/visualizar/visualizar.vue';

export const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/cadastrar", component: Register },
  { path: '/visualizar', component: Visual},
  { path: '/editar', component: Edit },
  { path: "*", redirect: "/login" }
]
