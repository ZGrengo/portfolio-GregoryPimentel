# Portfolio - Gregory Pimentel

Portafolio profesional desarrollado con Next.js (App Router), TypeScript, Tailwind CSS y shadcn/ui. Diseño dark premium estilo SaaS con gradientes azul/violeta, efectos glassmorphism y animaciones sutiles.

## 🚀 Características

- **Diseño Moderno**: Estilo SaaS premium con gradientes, glassmorphism y efectos de glow
- **Responsive**: Diseño mobile-first completamente responsive
- **Accesible**: Implementado siguiendo mejores prácticas de accesibilidad
- **TypeScript**: Tipado completo para mayor seguridad y mantenibilidad
- **Componentes Reutilizables**: Arquitectura modular con componentes shadcn/ui
- **SEO Optimizado**: Metadata y estructura optimizada para motores de búsqueda

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm, yarn o pnpm

## 🛠️ Instalación

1. **Clonar el repositorio** (si aplica) o navegar al directorio del proyecto

2. **Instalar dependencias**:
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**:
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del Proyecto

```
portfolio-GregoryPimentel/
├── app/
│   ├── layout.tsx          # Layout global
│   ├── page.tsx             # Página principal
│   ├── globals.css          # Estilos globales
│   └── projects/
│       └── [slug]/
│           ├── page.tsx     # Página de detalle de proyecto
│           └── not-found.tsx
├── components/
│   ├── ui/                  # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   └── separator.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Highlights.tsx
│   ├── ProjectsGrid.tsx
│   ├── ProjectCard.tsx
│   ├── SkillsGrid.tsx
│   ├── AboutSection.tsx
│   ├── ContactForm.tsx
│   └── SectionHeading.tsx
├── data/
│   ├── projects.ts          # Datos de proyectos
│   └── skills.ts            # Datos de skills
├── lib/
│   └── utils.ts             # Utilidades (cn function)
└── public/                  # Assets estáticos
```

## 🎨 Personalización

### Agregar/Editar Proyectos

Edita el archivo `data/projects.ts` para agregar o modificar proyectos:

```typescript
{
  id: "unique-id",
  slug: "project-slug",
  title: "Project Title",
  description: "Short description",
  longDescription: "Long description for detail page",
  featured: true, // o false
  image: "image-url",
  tech: ["Next.js", "React", "TypeScript"],
  features: ["Feature 1", "Feature 2"],
  problem: "Problem description",
  solution: "Solution description",
  liveUrl: "https://...", // o "#" para deshabilitar
  codeUrl: "https://...", // o "#" para deshabilitar
}
```

### Agregar/Editar Skills

Edita el archivo `data/skills.ts` para agregar o modificar skills:

```typescript
{
  id: "skill-id",
  name: "Skill Name",
  category: "frontend" | "backend" | "database" | "other",
  isCore: true // o false
}
```

### Personalizar Colores

Los colores se pueden personalizar en:
- `tailwind.config.ts` - Configuración de Tailwind
- `app/globals.css` - Variables CSS personalizadas

## 🚢 Build para Producción

```bash
npm run build
npm start
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea el build de producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de utilidades CSS
- **shadcn/ui** - Componentes UI reutilizables
- **lucide-react** - Iconos modernos
- **class-variance-authority** - Gestión de variantes de componentes

## 📄 Licencia

Este proyecto es de uso personal.

## 👤 Autor

**Gregory Pimentel**
- Portfolio: [Tu URL]
- GitHub: [Tu GitHub]
- LinkedIn: [Tu LinkedIn]

---

Desarrollado con ❤️ usando Next.js y TypeScript

