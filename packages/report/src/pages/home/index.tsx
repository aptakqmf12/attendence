import Page from './page';
import AuthRouter from '../../router/authRouter';

export default {
  path: '/',
  element: (
    <AuthRouter>
      <Page />
    </AuthRouter>
  ),
};
