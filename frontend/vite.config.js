import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Enables document, window, etc.
    setupFiles: "./src/setupTests.js", // Ensures jest-dom is loaded
  },
});
