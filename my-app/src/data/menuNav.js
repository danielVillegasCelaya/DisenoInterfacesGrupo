import ApiOnline from '../componentes/ApiOnline';
import Login from '../componentes/Login';
import Inicio from '../componentes/Inicio';

export const MenuNav = [
  {
    id: 1,
    path: '/api',
    title: 'ApiOnline',
    component: ApiOnline,
  },  
  {
      id: 2,
      path: '/login',
      title: 'Login',
      component: Login,
    },
    {
      id: 3,
      path: '/inicio',
      title: 'Inicio',
      component: Inicio,
    }];