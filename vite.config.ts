import { defineConfig } from 'vite'
//* SWC (Speedy WebAssembly Compiler) not supported in WebContainers.
// import react from '@vitejs/plugin-react-swc'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
