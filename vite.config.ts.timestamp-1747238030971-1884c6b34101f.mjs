// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "ui-components": [
            "@radix-ui/react-popover",
            "react-colorful",
            "lucide-react"
          ],
          "invoice-styles": [
            "./src/components/InvoiceStyles/SmartInvoice",
            "./src/components/InvoiceStyles/ClassicInvoice",
            "./src/components/InvoiceStyles/CreativeInvoice",
            "./src/components/InvoiceStyles/CraftsmanInvoice",
            "./src/components/InvoiceStyles/ModernInvoice"
          ]
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      "@radix-ui/react-popover",
      "react-colorful",
      "lucide-react"
    ],
    exclude: ["colorthief"]
  },
  server: {
    warmup: {
      clientFiles: [
        "./src/components/**/*.tsx",
        "./src/components/InvoiceStyles/*.tsx"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxuICAgIGNzc01pbmlmeTogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgJ3JlYWN0LXZlbmRvcic6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICAgICAgJ3VpLWNvbXBvbmVudHMnOiBbXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXInLFxuICAgICAgICAgICAgJ3JlYWN0LWNvbG9yZnVsJyxcbiAgICAgICAgICAgICdsdWNpZGUtcmVhY3QnXG4gICAgICAgICAgXSxcbiAgICAgICAgICAnaW52b2ljZS1zdHlsZXMnOiBbXG4gICAgICAgICAgICAnLi9zcmMvY29tcG9uZW50cy9JbnZvaWNlU3R5bGVzL1NtYXJ0SW52b2ljZScsXG4gICAgICAgICAgICAnLi9zcmMvY29tcG9uZW50cy9JbnZvaWNlU3R5bGVzL0NsYXNzaWNJbnZvaWNlJyxcbiAgICAgICAgICAgICcuL3NyYy9jb21wb25lbnRzL0ludm9pY2VTdHlsZXMvQ3JlYXRpdmVJbnZvaWNlJyxcbiAgICAgICAgICAgICcuL3NyYy9jb21wb25lbnRzL0ludm9pY2VTdHlsZXMvQ3JhZnRzbWFuSW52b2ljZScsXG4gICAgICAgICAgICAnLi9zcmMvY29tcG9uZW50cy9JbnZvaWNlU3R5bGVzL01vZGVybkludm9pY2UnXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICAnQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXInLCBcbiAgICAgICdyZWFjdC1jb2xvcmZ1bCcsIFxuICAgICAgJ2x1Y2lkZS1yZWFjdCdcbiAgICBdLFxuICAgIGV4Y2x1ZGU6IFsnY29sb3J0aGllZiddXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHdhcm11cDoge1xuICAgICAgY2xpZW50RmlsZXM6IFtcbiAgICAgICAgJy4vc3JjL2NvbXBvbmVudHMvKiovKi50c3gnLFxuICAgICAgICAnLi9zcmMvY29tcG9uZW50cy9JbnZvaWNlU3R5bGVzLyoudHN4J1xuICAgICAgXVxuICAgIH1cbiAgfVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLGdCQUFnQixDQUFDLFNBQVMsV0FBVztBQUFBLFVBQ3JDLGlCQUFpQjtBQUFBLFlBQ2Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLGtCQUFrQjtBQUFBLFlBQ2hCO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUyxDQUFDLFlBQVk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sYUFBYTtBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
