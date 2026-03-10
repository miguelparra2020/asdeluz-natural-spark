# As de Luz — Tienda de Productos Naturales

Sitio web PWA de **As de Luz**, negocio de productos naturales, semillas y superalimentos en **Pereira y Dosquebradas, Colombia**. Los pedidos se realizan directamente por WhatsApp.

Desarrollado por [Comercyo.com](https://comercyo.com).

---

## Stack tecnológico

- **React 18** + **TypeScript**
- **Vite 5** (build tool)
- **Tailwind CSS 3** + shadcn/ui
- **React Router DOM v6**
- **vite-plugin-pwa** (PWA con Service Worker)
- **Vitest** (tests)

---

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build (para probar la PWA)
npm run preview

# Ejecutar tests
npm run test
```

---

## PWA

El sitio es instalable como aplicación en dispositivos móviles y escritorio. Incluye:
- Web App Manifest con íconos y colores del tema
- Service Worker con caché offline de todos los assets

> El botón de instalación aparece automáticamente en la esquina inferior izquierda cuando el navegador detecta que la app puede instalarse.
