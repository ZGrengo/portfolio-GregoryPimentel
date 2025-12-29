# Portfolio - Gregory Pimentel

Portafolio profesional desarrollado con Next.js (App Router), TypeScript, Tailwind CSS y shadcn/ui. Diseño dark premium estilo SaaS con gradientes azul/violeta, efectos glassmorphism y animaciones sutiles.

## 🚀 Características

-   **Diseño Moderno**: Estilo SaaS premium con gradientes, glassmorphism y efectos de glow
-   **Multilingüe**: Soporte completo para Español e Inglés con cambio de idioma persistente
-   **Responsive**: Diseño mobile-first completamente responsive
-   **Accesible**: Implementado siguiendo mejores prácticas de accesibilidad
-   **TypeScript**: Tipado completo para mayor seguridad y mantenibilidad
-   **Componentes Reutilizables**: Arquitectura modular con componentes shadcn/ui
-   **SEO Optimizado**: Metadata y estructura optimizada para motores de búsqueda
-   **CV Dinámico**: Descarga automática del CV en el idioma seleccionado

## 📋 Requisitos Previos

-   Node.js 18.x o superior
-   npm, yarn o pnpm

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
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # API route para formulario de contacto
│   ├── layout.tsx           # Layout global con providers
│   ├── page.tsx             # Página principal
│   ├── globals.css           # Estilos globales
│   └── projects/
│       └── [slug]/
│           ├── page.tsx     # Página de detalle de proyecto
│           └── not-found.tsx
├── components/
│   ├── ui/                  # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── separator.tsx
│   │   └── tabs.tsx
│   ├── gallery/             # Componentes de galería de proyectos
│   │   ├── BentoGrid.tsx
│   │   ├── LightboxDialog.tsx
│   │   ├── PhoneFrame.tsx
│   │   ├── ProjectGallery.tsx
│   │   └── SimpleImageDialog.tsx
│   ├── projects/
│   │   └── ProjectDetailContent.tsx
│   ├── timeline/
│   │   └── ExperienceTimeline.tsx
│   ├── Navbar.tsx           # Barra de navegación con selector de idioma
│   ├── Hero.tsx             # Sección hero con descarga de CV
│   ├── Highlights.tsx
│   ├── ProjectsGrid.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectViewSwitcher.tsx
│   ├── SkillsGrid.tsx
│   ├── AboutSection.tsx
│   ├── ContactForm.tsx
│   ├── SectionHeading.tsx
│   ├── LanguageUpdater.tsx  # Componente para actualizar idioma
│   ├── theme-provider.tsx   # Provider para tema claro/oscuro
│   └── ...                  # Otros componentes (TextType, ProfileCard, etc.)
├── contexts/
│   └── LanguageContext.tsx  # Context para gestión de idioma
├── hooks/
│   └── useTranslations.ts   # Hook personalizado para traducciones
├── data/
│   ├── projects.ts          # Datos de proyectos
│   ├── skills.ts            # Datos de skills
│   ├── translations.ts      # Traducciones (ES/EN)
│   └── timeline-translations.ts  # Traducciones de timeline
├── lib/
│   └── utils.ts             # Utilidades (cn function)
└── public/                  # Assets estáticos
    ├── CV Gregory Pimentel Desarrollador Web.pdf  # CV en español
    ├── CV Gregory Pimentel Web Developer.pdf      # CV en inglés
    └── ...                   # Imágenes y otros assets
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

## 🌐 Sistema de Traducciones

El portfolio incluye soporte completo para múltiples idiomas (Español e Inglés) con persistencia en localStorage.

### Arquitectura de Traducciones

El sistema de traducciones utiliza:

-   **`contexts/LanguageContext.tsx`**: Context de React que gestiona el idioma actual y lo persiste en localStorage
-   **`hooks/useTranslations.ts`**: Hook personalizado que proporciona acceso a las traducciones
-   **`data/translations.ts`**: Archivo centralizado con todas las traducciones organizadas por secciones
-   **`data/timeline-translations.ts`**: Traducciones específicas para la línea de tiempo de experiencia

### Cómo Usar Traducciones en Componentes

```typescript
import { useTranslations } from "@/hooks/useTranslations";

export function MyComponent() {
    const { t, translate, language } = useTranslations();

    // Acceso directo a traducciones
    return <h1>{t.hero.title1}</h1>;

    // Traducciones con parámetros
    return <p>{translate("hero.description", { restaurants: "10" })}</p>;

    // Acceso al idioma actual
    const isSpanish = language === "es";
}
```

### Agregar/Editar Traducciones

Edita el archivo `data/translations.ts` para agregar o modificar traducciones:

```typescript
export const translations = {
    es: {
        // Sección existente
        hero: {
            title1: "Ingeniero Informático",
            // ...
        },
        // Nueva sección
        nuevaSeccion: {
            titulo: "Título en español",
            descripcion: "Descripción en español",
        },
    },
    en: {
        // Misma estructura para inglés
        hero: {
            title1: "Computer Engineer",
            // ...
        },
        nuevaSeccion: {
            titulo: "Title in English",
            descripcion: "Description in English",
        },
    },
};
```

**Importante**: Mantén la misma estructura de objetos en ambos idiomas para evitar errores.

### Cambiar Idioma

El idioma se puede cambiar mediante:

-   **Selector en Navbar**: El componente `Navbar.tsx` incluye un selector de idioma
-   **Programáticamente**: Usa el hook `useLanguage()` para cambiar el idioma

```typescript
import { useLanguage } from "@/contexts/LanguageContext";

export function MyComponent() {
    const { language, setLanguage } = useLanguage();

    const changeToEnglish = () => setLanguage("en");
    const changeToSpanish = () => setLanguage("es");
}
```

### CV Dinámico por Idioma

El sistema descarga automáticamente el CV correcto según el idioma seleccionado:

-   **Español**: `CV Gregory Pimentel Desarrollador Web.pdf`
-   **Inglés**: `CV Gregory Pimentel Web Developer.pdf`

Esto se maneja automáticamente en el componente `Hero.tsx` cuando el usuario hace clic en el botón de descarga de CV.

### Personalizar Colores

Los colores se pueden personalizar en:

-   `tailwind.config.ts` - Configuración de Tailwind
-   `app/globals.css` - Variables CSS personalizadas

## 🚢 Build para Producción

```bash
npm run build
npm start
```

## 📝 Scripts Disponibles

-   `npm run dev` - Inicia el servidor de desarrollo
-   `npm run build` - Crea el build de producción
-   `npm start` - Inicia el servidor de producción
-   `npm run lint` - Ejecuta el linter

## 🛠️ Tecnologías Utilizadas

-   **Next.js 14** - Framework React con App Router
-   **TypeScript** - Tipado estático
-   **Tailwind CSS** - Framework de utilidades CSS
-   **shadcn/ui** - Componentes UI reutilizables
-   **lucide-react** - Iconos modernos
-   **class-variance-authority** - Gestión de variantes de componentes
-   **React Context API** - Gestión de estado global (idioma, tema)
-   **next-themes** - Gestión de temas claro/oscuro

## 📄 Licencia

Este proyecto es de uso personal.

## 👤 Autor

**Gregory Pimentel**

-   Portfolio: https://portfolio-gregory-pimentel.vercel.app/
-   GitHub: https://github.com/ZGrengo
-   LinkedIn: www.linkedin.com/in/gregory-pimentel-dev

---

Desarrollado con ❤️ usando Next.js y TypeScript
