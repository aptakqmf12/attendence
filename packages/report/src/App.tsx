import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import 'pretendard/dist/web/variable/pretendardvariable.css';
import {
  CssBaseline,
  getTheme,
  ThemeProvider,
} from '@wooriga/common/src/providers';
import rootRouter from './router/rootRouter';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = await import('./mocks');
//   worker.start();
// }

export default function App() {
  const theme = useMemo(() => getTheme('light'), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <RouterProvider router={rootRouter} />
    </ThemeProvider>
  );
}
