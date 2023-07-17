import { defineConfig } from 'vite';
import { createProxyMiddleware } from 'http-proxy-middleware';
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [createProxyMiddleware('/api', { target: 'http://localhost:3000', changeOrigin: true })],
  },
});