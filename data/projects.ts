export type GalleryImage = {
  src: string
  alt: string
  kind?: "desktop" | "mobile"
  featured?: boolean
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  featured: boolean
  image: string
  mobileImage?: string
  gallery: GalleryImage[]
  tech: string[]
  features: string[]
  problem?: string
  solution?: string
  liveUrl?: string
  codeUrl?: string
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "goikounter",
    title: "Goikounter",
    description: "Optimización de comandas en cocina. Desplegado en +10 restaurantes, con visión de escalar a toda la compañía.",
    longDescription: "Sistema completo de gestión de comandas diseñado específicamente para optimizar el flujo de trabajo en cocinas de restaurantes. Desplegado en producción en más de 10 locales, este proyecto ha demostrado impacto real en la eficiencia operativa. Gracias a esta herramienta, el local donde trabajo alcanzó el top 10 de restaurantes más rápidos del país durante varios meses consecutivos.",
    featured: true,
    image: "/Goikounter/Desktop/Parrilla.png",
    gallery: [
      { src: "/Goikounter/Desktop/Parrilla.png", alt: "Goikounter - Parrilla principal", kind: "desktop", featured: true },
      { src: "/Goikounter/Desktop/parrilla2.png", alt: "Goikounter - Vista de parrilla", kind: "desktop" },
      { src: "/Goikounter/Desktop/pase.png", alt: "Goikounter - Sistema de pase", kind: "desktop" },
      { src: "/Goikounter/Desktop/Patatas1.png", alt: "Goikounter - Gestión de patatas", kind: "desktop" },
      { src: "/Goikounter/Desktop/alergia2.PNG", alt: "Goikounter - Gestión de alergias", kind: "desktop" },
    ],
    tech: ["Javascript", "CSS", "HTML"],
    features: [
      "CRUD completo de productos y comandas",
      "Mejoras significativas en el flujo de trabajo",
      "Panel de administración intuitivo",
      "Sistema de notificaciones en tiempo real",
      "Reportes y analytics integrados"
    ],
    problem: "Los restaurantes necesitaban un sistema más eficiente para gestionar comandas en cocina, reduciendo errores y tiempos de espera.",
    solution: "Desarrollé una solución completa que digitaliza el proceso de comandas, permitiendo a los cocineros gestionar pedidos de manera más eficiente y a los administradores tener visibilidad completa del flujo.",
    liveUrl: undefined,
    codeUrl: undefined
  },
  {
    id: "2",
    slug: "portfolio-generator",
    title: "Portfolio Generator",
    description: "Generador de portafolios con 2 plantillas y editor de contenido.",
    longDescription: "Aplicación web que permite a desarrolladores crear portafolios profesionales de forma rápida y sencilla. Incluye múltiples plantillas personalizables y un editor visual intuitivo.",
    featured: false,
    image: "/Portfolio-Generator/Desktop/Portada con plantillas.PNG",
    mobileImage: "/Portfolio-Generator/Mobile/PortadaMovil.PNG",
    gallery: [
      { src: "/Portfolio-Generator/Desktop/Portada con plantillas.PNG", alt: "Portfolio Generator - Portada con plantillas", kind: "desktop", featured: true },
      { src: "/Portfolio-Generator/Desktop/DashboardDesktop.PNG", alt: "Portfolio Generator - Dashboard", kind: "desktop" },
      { src: "/Portfolio-Generator/Desktop/DashboardDesktop2.PNG", alt: "Portfolio Generator - Dashboard vista 2", kind: "desktop" },
      { src: "/Portfolio-Generator/Desktop/ModernDesktop1.PNG", alt: "Portfolio Generator - Plantilla Moderna", kind: "desktop" },
      { src: "/Portfolio-Generator/Desktop/ModernDesktop2.PNG", alt: "Portfolio Generator - Plantilla Moderna vista 2", kind: "desktop" },
      { src: "/Portfolio-Generator/Desktop/MinimalistaDesktop1.PNG", alt: "Portfolio Generator - Plantilla Minimalista", kind: "desktop" },
      { src: "/Portfolio-Generator/Desktop/MinimalistaDesktop2.PNG", alt: "Portfolio Generator - Plantilla Minimalista vista 2", kind: "desktop" },
      { src: "/Portfolio-Generator/Desktop/MinimalistaDesktop3.PNG", alt: "Portfolio Generator - Plantilla Minimalista vista 3", kind: "desktop" },
      { src: "/Portfolio-Generator/Mobile/PortadaMovil.PNG", alt: "Portfolio Generator - Portada móvil", kind: "mobile", featured: true },
      { src: "/Portfolio-Generator/Mobile/DashboardMovil1.PNG", alt: "Portfolio Generator - Dashboard móvil", kind: "mobile" },
      { src: "/Portfolio-Generator/Mobile/DashboardMovil2.PNG", alt: "Portfolio Generator - Dashboard móvil vista 2", kind: "mobile" },
      { src: "/Portfolio-Generator/Mobile/DashboardMovil3.PNG", alt: "Portfolio Generator - Dashboard móvil vista 3", kind: "mobile" },
      { src: "/Portfolio-Generator/Mobile/ModernMovil1.PNG", alt: "Portfolio Generator - Plantilla Moderna móvil", kind: "mobile" },
      { src: "/Portfolio-Generator/Mobile/ModernMovil2.PNG", alt: "Portfolio Generator - Plantilla Moderna móvil vista 2", kind: "mobile" },
      { src: "/Portfolio-Generator/Mobile/ModernMovil3.PNG", alt: "Portfolio Generator - Plantilla Moderna móvil vista 3", kind: "mobile" },
      { src: "/Portfolio-Generator/Mobile/MinimalistaMovil1.PNG", alt: "Portfolio Generator - Plantilla Minimalista móvil", kind: "mobile" },
      { src: "/Portfolio-Generator/Mobile/MinimalistaMovil2.PNG", alt: "Portfolio Generator - Plantilla Minimalista móvil vista 2", kind: "mobile" },
      { src: "/Portfolio-Generator/Mobile/MinimalistaMovil3.PNG", alt: "Portfolio Generator - Plantilla Minimalista móvil vista 3", kind: "mobile" },
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Auth0"],
    features: [
      "CRUD de proyectos, skills y experiencia",
      "Sistema de personalización avanzado",
      "Preview en tiempo real",
      "Exportación de portafolio",
      "2 plantillas profesionales incluidas"
    ],
    problem: "Los desarrolladores necesitan una forma rápida y profesional de crear portafolios sin tener que diseñar desde cero.",
    solution: "Creé un generador que combina facilidad de uso con flexibilidad, permitiendo personalizar cada aspecto del portafolio mientras se mantiene un diseño profesional.",
    liveUrl: "https://portfolio-generator-gp.vercel.app/",
    codeUrl: "https://github.com/ZGrengo/portfolio-generator"
  },
  {
    id: "3",
    slug: "ecommerce-php",
    title: "E-commerce PHP",
    description: "Tienda e-commerce con base de datos y pagos PayPal.",
    longDescription: "Sistema completo de e-commerce desarrollado con PHP y MySQL, integrando pagos a través de PayPal. Incluye gestión de productos, carrito de compras y proceso de checkout completo.",
    featured: false,
    image: "/Ecommerce-php/Desktop/HomeDestkop.PNG",
    mobileImage: "/Ecommerce-php/Mobile/HomeMovil1.PNG",
    gallery: [
      { src: "/Ecommerce-php/Desktop/HomeDestkop.PNG", alt: "E-commerce PHP - Página principal", kind: "desktop", featured: true },
      { src: "/Ecommerce-php/Desktop/HomeDesktop2.PNG", alt: "E-commerce PHP - Página principal vista 2", kind: "desktop" },
      { src: "/Ecommerce-php/Desktop/TiendaDesktop1.PNG", alt: "E-commerce PHP - Tienda", kind: "desktop" },
      { src: "/Ecommerce-php/Desktop/TiendaDesktop2.PNG", alt: "E-commerce PHP - Tienda vista 2", kind: "desktop" },
      { src: "/Ecommerce-php/Desktop/CarritoDesktop1.PNG", alt: "E-commerce PHP - Carrito de compras", kind: "desktop" },
      { src: "/Ecommerce-php/Desktop/PagarDesktop.PNG", alt: "E-commerce PHP - Proceso de pago", kind: "desktop" },
      { src: "/Ecommerce-php/Desktop/PagarDesktop2.PNG", alt: "E-commerce PHP - Proceso de pago vista 2", kind: "desktop" },
      { src: "/Ecommerce-php/Desktop/PagoFinalDesktop.PNG", alt: "E-commerce PHP - Pago finalizado", kind: "desktop" },
      { src: "/Ecommerce-php/Desktop/Comprobante compras.PNG", alt: "E-commerce PHP - Comprobante de compra", kind: "desktop" },
      { src: "/Ecommerce-php/Desktop/AdminPageDesktop1.PNG", alt: "E-commerce PHP - Panel de administración", kind: "desktop" },
      { src: "/Ecommerce-php/Desktop/AdminPageDesktop2.PNG", alt: "E-commerce PHP - Panel de administración vista 2", kind: "desktop" },
      { src: "/Ecommerce-php/Mobile/HomeMovil1.PNG", alt: "E-commerce PHP - Página principal móvil", kind: "mobile", featured: true },
      { src: "/Ecommerce-php/Mobile/HomeMovil2.PNG", alt: "E-commerce PHP - Página principal móvil vista 2", kind: "mobile" },
      { src: "/Ecommerce-php/Mobile/CarritoMovil1.PNG", alt: "E-commerce PHP - Carrito móvil", kind: "mobile" },
      { src: "/Ecommerce-php/Mobile/PagarMovil.PNG", alt: "E-commerce PHP - Proceso de pago móvil", kind: "mobile" },
      { src: "/Ecommerce-php/Mobile/PagarMovil2.PNG", alt: "E-commerce PHP - Proceso de pago móvil vista 2", kind: "mobile" },
      { src: "/Ecommerce-php/Mobile/PagarMovil3.PNG", alt: "E-commerce PHP - Proceso de pago móvil vista 3", kind: "mobile" },
      { src: "/Ecommerce-php/Mobile/PagoFinalMovil.PNG", alt: "E-commerce PHP - Pago finalizado móvil", kind: "mobile" },
      { src: "/Ecommerce-php/Mobile/Comprobante compras.PNG", alt: "E-commerce PHP - Comprobante móvil", kind: "mobile" },
      { src: "/Ecommerce-php/Mobile/AdminPageMovil1.PNG", alt: "E-commerce PHP - Panel administración móvil", kind: "mobile" },
      { src: "/Ecommerce-php/Mobile/AdminPageMovil2.PNG", alt: "E-commerce PHP - Panel administración móvil vista 2", kind: "mobile" },
      { src: "/Ecommerce-php/Mobile/ContactoMovil.PNG", alt: "E-commerce PHP - Contacto móvil", kind: "mobile" },
    ],
    tech: ["PHP", "MySQL", "PayPal API", "Bootstrap", "JavaScript", "HTML", "CSS"],
    features: [
      "CRUD completo de productos",
      "Sistema de carrito de compras",
      "Checkout integrado con PayPal",
      "Panel de administración",
      "Gestión de usuarios y pedidos"
    ],
    problem: "Necesidad de una solución de e-commerce robusta y escalable con integración de pagos confiable.",
    solution: "Desarrollé una plataforma completa desde cero, implementando mejores prácticas de seguridad y una experiencia de usuario fluida.",
    liveUrl: undefined,
    codeUrl: "https://github.com/ZGrengo/Ciclomotoscars-shop"
  },
  {
    id: "4",
    slug: "flight-search",
    title: "Hackaflight",
    description: "Buscador de vuelos con filtros y CRUD.",
    longDescription: "Aplicación web full stack desarrollada como proyecto final del Bootcamp de Hack A Boss, diseñada para facilitar la búsqueda y reserva de vuelos en tiempo real. La plataforma permite a los usuarios consultar rutas aéreas, comparar precios y gestionar reservas de manera intuitiva y eficiente.",
    featured: false,
    image: "/HackaFlight/Desktop/DestkopHome1.PNG",
    mobileImage: "/HackaFlight/Mobile/HomePageMovil.PNG",
    gallery: [
      { src: "/HackaFlight/Desktop/DestkopHome1.PNG", alt: "Hackaflight - Página principal", kind: "desktop", featured: true },
      { src: "/HackaFlight/Desktop/BusquedaDesktop1.PNG", alt: "Hackaflight - Búsqueda de vuelos", kind: "desktop" },
      { src: "/HackaFlight/Desktop/BusquedasFavoritasDesktop1.PNG", alt: "Hackaflight - Búsquedas favoritas", kind: "desktop" },
      { src: "/HackaFlight/Desktop/EdicionFavoritoDesktop.PNG", alt: "Hackaflight - Edición de favoritos", kind: "desktop" },
      { src: "/HackaFlight/Mobile/HomePageMovil.PNG", alt: "Hackaflight - Página principal móvil", kind: "mobile", featured: true },
      { src: "/HackaFlight/Mobile/BusquedaMovil1.PNG", alt: "Hackaflight - Búsqueda móvil", kind: "mobile" },
      { src: "/HackaFlight/Mobile/Busquedamovil2.PNG", alt: "Hackaflight - Búsqueda móvil vista 2", kind: "mobile" },
      { src: "/HackaFlight/Mobile/FavoritosMovil.PNG", alt: "Hackaflight - Favoritos móvil", kind: "mobile" },
      { src: "/HackaFlight/Mobile/EdicionFavoritoMovil.PNG", alt: "Hackaflight - Edición favoritos móvil", kind: "mobile" },
      { src: "/HackaFlight/Mobile/ValoracionesMovil.PNG", alt: "Hackaflight - Valoraciones móvil", kind: "mobile" },
    ],
    tech: ["React", "Node.js", "MySQL", "Express", "Amadeus API","Tailwind CSS", "HTML", "CSS"],
    features: [
      "Búsqueda avanzada con múltiples filtros",
      "Consumo de APIs de vuelos (Amadeus)",
      "Sistema de favoritos",
      "Gestión de reservas",
      "Comparación de precios",
      "Sistema de autenticación JWT"
    ],
    problem: "Los usuarios necesitan una herramienta eficiente para comparar y encontrar vuelos con múltiples criterios de búsqueda.",
    solution: "Creé una interfaz intuitiva que combina búsqueda poderosa con una experiencia visual clara, facilitando la toma de decisiones.",
    liveUrl: undefined,
    codeUrl: "https://github.com/ZGrengo/Hackaflight"
  }
]

