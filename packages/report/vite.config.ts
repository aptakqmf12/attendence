import { UserConfig, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default ({ mode }) => {
  const VITE_MODE = process.env.VITE_VERCEL_ENV || mode;
  process.env = {
    ...process.env,
    ...loadEnv(VITE_MODE, process.cwd()),
  };

  const isProduction = VITE_MODE === 'production';

  const config: UserConfig = {
    define: {
      __APP_ENV__: JSON.stringify(process.env.APP_ENV),
    },
    build: {
      sourcemap: true,
    },
    esbuild: {
      pure: isProduction ? ['console.log'] : [],
    },
    plugins: [react(), eslint({ cache: false, eslintPath: 'eslint' })],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080/',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };

  return defineConfig(config);
};
