import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-components': [
            '@radix-ui/react-popover',
            'react-colorful',
            'lucide-react'
          ],
          'invoice-styles': [
            './src/components/InvoiceStyles/SmartInvoice',
            './src/components/InvoiceStyles/ClassicInvoice',
            './src/components/InvoiceStyles/CreativeInvoice',
            './src/components/InvoiceStyles/CraftsmanInvoice',
            './src/components/InvoiceStyles/ModernInvoice'
          ]
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      '@radix-ui/react-popover', 
      'react-colorful', 
      'lucide-react'
    ],
    exclude: ['colorthief']
  },
  server: {
    warmup: {
      clientFiles: [
        './src/components/**/*.tsx',
        './src/components/InvoiceStyles/*.tsx'
      ]
    }
  }
});