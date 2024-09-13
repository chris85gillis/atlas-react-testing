import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8', // Set the provider to 'c8' explicitly
      reporter: ['text', 'html'], // Adjust based on the desired output
      reportsDirectory: './coverage', // Specify where to save coverage reports
    },
  },
});