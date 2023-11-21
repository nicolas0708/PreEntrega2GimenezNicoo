import react from '@vitejs/plugin-react';
import html from 'vite-plugin-html';

export default {
  plugins: [
    react(),
    html({
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