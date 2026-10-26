import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // recharts is reached only through a lazy import, so prebundle it at startup
  // instead of re-optimizing mid-session and invalidating already loaded modules
  optimizeDeps: {
    include: ['recharts', 'react-is']
  },
})
