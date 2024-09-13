// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enables global variables like describe, it, expect
    environment: 'jsdom', // Sets up a browser-like environment
    setupFiles: './src/setupTests.ts', // If you need a setup file for global mocks or configurations
  },
});