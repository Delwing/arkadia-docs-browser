import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import parseDocs from "./src/build/parse-docs"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), parseDocs()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
})
