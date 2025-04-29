import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
    plugins: [
        react(),
        viteImagemin({
            gifsicle: { optimizationLevel: 3 },
            mozjpeg: { quality: 80 },
            pngquant: { quality: [0.8, 0.9] },
            svgo: {
                plugins: [
                    { removeViewBox: false },
                    { removeTitle: true },
                    { convertPathData: false },
                ],
            },
            webp: { quality: 80 }, // Adiciona suporte a WebP
        }),
    ],
    build: {
        chunkSizeWarningLimit: 1500, // Aumenta limite de aviso de tamanho
    },
});
