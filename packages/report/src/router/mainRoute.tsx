import { RouteObject } from 'react-router-dom';
import main from '../pages/home';
import login from '../pages/login';

const route: RouteObject = {
  children: [main, login],
};

export default route;
