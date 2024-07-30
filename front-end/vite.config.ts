import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, 'src')},
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
    ],
  },
  server: {
    host: '0.0.0.0', // 모든 IP 주소에서 접근 가능하게 설정
    port: 5173, // 포트를 5173으로 설정
  },
});
