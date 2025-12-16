export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  featured: boolean
  image: string
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
    image: "https://via.placeholder.com/800x500/6366f1/ffffff?text=Goikounter",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"],
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
    image: "https://via.placeholder.com/800x500/8b5cf6/ffffff?text=Portfolio+Generator",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
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
    image: "https://via.placeholder.com/800x500/ec4899/ffffff?text=E-commerce+PHP",
    tech: ["PHP", "MySQL", "PayPal API", "Bootstrap", "JavaScript"],
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
    image: "https://via.placeholder.com/800x500/06b6d4/ffffff?text=Hackaflight",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "MySQL", "Express", "Amadeus API"],
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

