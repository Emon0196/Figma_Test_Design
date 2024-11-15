import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Figma_Test_Design/', // Set your repo name here
  plugins: [react()],
});
