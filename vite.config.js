import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';  // Cambiado aquí

export default {
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        injectData: {
          title: 'Mi proyecto de React con Vite'
        }
      }
    })
  ],
  root: './src',
  base: './'
};