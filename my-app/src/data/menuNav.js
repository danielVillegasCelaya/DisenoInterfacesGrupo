import ApiOnline from "../componentes/ApiOnline";
import Login from "../componentes/Login";
import Perfil from "../componentes/Perfil";

export const MenuNav = [
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
      path: '/Perfil',
      title: 'Perfil',
      component: Perfil,
    }
   ];