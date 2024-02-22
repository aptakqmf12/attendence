import { createBrowserRouter, RouteObject } from 'react-router-dom';
import mainRoute from './mainRoute';

export const routes: RouteObject[] = [mainRoute];

const rootRouter = createBrowserRouter(routes, { basename: '/' });

export default rootRouter;
