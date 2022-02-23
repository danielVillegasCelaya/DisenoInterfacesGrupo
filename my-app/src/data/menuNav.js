import ApiOnline from "../componentes/ApiOnline";
import Login from "../componentes/Login";
import Inicio from "../componentes/Inicio";

export const menuNav = [
    {
      id: 1,
      path: '/login',
      title: 'Login',
      component: Login,
    },
    {
      id: 2,
      path: '/api',
      title: 'Api',
      component: ApiOnline,
    },
    {
      id: 3,
      path: '/inicio',
      title: 'Inicio',
      component: Inicio,
    }];