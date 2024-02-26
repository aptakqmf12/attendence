import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import 'pretendard/dist/web/variable/pretendardvariable.css';
import {
  CssBaseline,
  getTheme,
  ThemeProvider,
} from '@wooriga/common/src/providers';
import rootRouter from './router/rootRouter';
import AxiosInterceptor from './api/interceptor';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = await import('./mocks');
//   worker.start();
// }

export default function App() {
  const theme = useMemo(() => getTheme('light'), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AxiosInterceptor />
      <RouterProvider router={rootRouter} />
    </ThemeProvider>
  );
}
