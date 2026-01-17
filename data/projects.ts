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
    description: "Optimización de comandas en cocina desarrollada desde operación real. En producción en +10 restaurantes, con impacto directo en velocidad y eficiencia. Con visión para escalar a toda la compañía.",
    longDescription: "Goikounter es una herramienta de optimización operativa desarrollada para cocinas de restaurantes de alto volumen que utilizan sistemas de comandas digitales. Se trata de una extensión para Google Chrome que reorganiza y procesa en tiempo real la información visible de las comandas, ofreciendo al equipo de cocina una vista clara, estructurada y accionable del servicio. La herramienta ha sido probada en múltiples locales de una cadena nacional y ha demostrado impacto directo en la velocidad de servicio, reducción de errores y disminución de mermas. En el local donde se originó el proyecto, el uso de Goikounter contribuyó a alcanzar el Top 10 nacional en rapidez operativa durante varios meses consecutivos.",
    featured: true,
    image: "/Goikounter/Desktop/Parrilla.png",
    gallery: [
      { src: "/Goikounter/Desktop/Parrilla.png", alt: "Goikounter - Parrilla principal", kind: "desktop", featured: true },
      { src: "/Goikounter/Desktop/parrilla2.png", alt: "Goikounter - Vista de parrilla", kind: "desktop" },
      { src: "/Goikounter/Desktop/pase.png", alt: "Goikounter - Sistema de pase", kind: "desktop" },
      { src: "/Goikounter/Desktop/Patatas1.png", alt: "Goikounter - Gestión de patatas", kind: "desktop" },
      { src: "/Goikounter/Desktop/alergia2.PNG", alt: "Goikounter - Gestión de alergias", kind: "desktop" },
    ],
    tech: ["JavaScript (ES6+)", "HTML5 / CSS3", "Chrome Extension API", "JSON", "Manipulación avanzada del DOM", "Control de versiones (Git)"],
    features: [
      "Contadores inteligentes de productos (panes, burgers, fritos, smash, etc.)",
      "Gestión visual de pedidos con modificaciones",
      "Alertas sonoras y visuales para pedidos con alérgenos",
      "Avisos automáticos para entrantes en picos de comandas",
      "Ayudas visuales para cocineros nuevos y parrilleros",
      "Organización de la información según el flujo real de cocina",
      "Actualización automática y despliegue vía Chrome Extension",
      "Procesamiento local en el navegador sin servidores externos"
    ],
    problem: "En cocinas con alto volumen de pedidos, la información de las comandas suele presentarse de forma desordenada o poco accionable: dificultad para calcular cantidades reales de producto a preparar, errores en pedidos modificados o con alérgenos, entrantes que pasan desapercibidos en picos de servicio, y sobrecarga cognitiva del equipo que aumenta el estrés operativo. Todo esto se traduce en mermas, retrasos y una curva de aprendizaje alta para el personal nuevo.",
    solution: "Diseñé y desarrollé Goikounter como una solución creada desde cocina y para cocina, enfocada en transformar datos ya existentes en información clara y útil. La extensión analiza las comandas en tiempo real y las traduce en contadores automáticos de productos, alertas visuales y sonoras, ayudas visuales para la preparación correcta de pedidos, y organización por secciones según el flujo real de trabajo en cocina. Todo el procesamiento se realiza localmente en el navegador, sin servidores externos ni almacenamiento de datos.",
    liveUrl: undefined,
    codeUrl: undefined
  },
  {
    id: "2",
    slug: "portfolio-generator",
    title: "Portfolio Generator",
    description: "Aplicación web para crear y gestionar portafolios profesionales con plantillas dinámicas y CRUD completo.",
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
      "Creación y edición de múltiples portafolios personalizados",
      "Dos plantillas profesionales: Modern Template y Minimalistic Template",
      "Personalización completa de colores (primarios, secundarios y de resalte)",
      "Gestión completa de contenido: proyectos con galerías, habilidades técnicas, experiencia laboral y educación",
      "Galería de imágenes con carousel interactivo y validación de URLs de dominios soportados",
      "Autenticación segura con Auth0 y protección de rutas con middleware",
      "Validación en tiempo real con feedback inmediato y tooltips informativos",
      "Diseño completamente responsive optimizado para todos los dispositivos"
    ],
    problem: "Los desarrolladores necesitan una forma rápida y profesional de crear portafolios sin tener que diseñar desde cero. Las soluciones existentes suelen ser limitadas en personalización o requieren conocimientos avanzados de diseño. Además, gestionar múltiples portafolios y mantenerlos actualizados puede ser tedioso y consumir mucho tiempo.",
    solution: "Desarrollé una aplicación web moderna con Next.js 15 y TypeScript que ofrece dos plantillas profesionales pre-diseñadas pero completamente personalizables. Integré Auth0 para autenticación segura, MongoDB para almacenamiento flexible y un sistema de validación de imágenes que acepta múltiples servicios de hosting. El dashboard intuitivo permite gestionar todo el contenido con validación en tiempo real, mientras que las plantillas se renderizan dinámicamente con Framer Motion para animaciones fluidas.",
    liveUrl: "https://portfolio-generator-gp.vercel.app/",
    codeUrl: "https://github.com/ZGrengo/portfolio-generator"
  },
  {
    id: "3",
    slug: "ecommerce-php",
    title: "E-commerce PHP",
    description: "Plataforma e-commerce desarrollada en PHP con CRUD de productos, base de datos MySQL y pasarela de pagos PayPal.",
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
      "Catálogo de productos con filtrado por categorías (Coche, Motocicleta, Bicicleta)",
      "Carrito de compras con gestión de cantidades y persistencia de sesión",
      "Integración completa con PayPal para pagos en línea (Sandbox y Live)",
      "Panel de administración con autenticación HTTP Basic para gestión de productos",
      "Sistema de notificaciones por correo electrónico con PHPMailer",
      "Diseño responsive con Bootstrap 5 y tema oscuro moderno",
      "Gestión de ventas con registro de transacciones y detalles de compra",
      "Encriptación de datos sensibles con OpenSSL y prepared statements para seguridad"
    ],
    problem: "Se necesitaba una solución de e-commerce robusta para la venta de productos de ciclomotores, motocicletas y bicicletas. La plataforma debía incluir un catálogo funcional, carrito de compras, integración de pagos confiable y un panel de administración seguro. Además, era crucial implementar notificaciones automáticas por correo para confirmar las compras a los clientes.",
    solution: "Desarrollé una plataforma completa desde cero utilizando PHP 8.2+ con arquitectura MVC, MySQL para la base de datos relacional y Bootstrap 5 para una interfaz moderna y responsive. Implementé integración con PayPal SDK para procesamiento de pagos, PHPMailer para notificaciones por correo, y autenticación HTTP Basic para el panel de administración. La solución incluye prepared statements para prevenir SQL injection, encriptación de datos sensibles y validación exhaustiva de entrada de datos.",
    liveUrl: undefined,
    codeUrl: "https://github.com/ZGrengo/Ciclomotoscars-shop"
  },
  {
    id: "4",
    slug: "flight-search",
    title: "Hackaflight",
    description: "Buscador de vuelos con filtros avanzados y operaciones CRUD, enfocado en experiencia de usuario y claridad de datos.",
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
      "Búsqueda avanzada de vuelos con filtros de origen, destino y fechas",
      "Comparación de precios y aerolíneas en tiempo real mediante Amadeus API",
      "Gestión de reservas con confirmaciones automáticas",
      "Sistema de autenticación seguro con JWT y encriptación bcrypt",
      "Funcionalidad de favoritos para guardar búsquedas recurrentes",
      "Sistema de valoraciones para evaluar la experiencia en la plataforma",
      "Diseño responsive para una experiencia fluida en todos los dispositivos",
      "Panel de administración para gestión de usuarios y datos"
    ],
    problem: "Los usuarios necesitan una herramienta eficiente para buscar vuelos en tiempo real, comparar precios entre diferentes aerolíneas y gestionar sus búsquedas favoritas de manera centralizada. La mayoría de las plataformas existentes no ofrecen una experiencia integrada que combine búsqueda, comparación y gestión de reservas en un solo lugar.",
    solution: "Desarrollé una plataforma full stack que integra la API de Amadeus para obtener información de vuelos en tiempo real. Implementé un sistema de autenticación seguro con JWT, gestión de favoritos personalizables y un sistema de valoraciones. La arquitectura backend con Express.js y MySQL permite escalabilidad, mientras que el frontend con React ofrece una experiencia de usuario fluida y responsive.",
    liveUrl: undefined,
    codeUrl: "https://github.com/ZGrengo/Hackaflight"
  },
  {
    id: "5",
    slug: "think-fast",
    title: "¡Piensa Rápido!",
    description: "Juego web multijugador en tiempo real inspirado en el \"game feel\" de Taco Gato Cabra Queso Pizza, adaptado a navegador con salas por código, turnos, claim sobre la pila, cartas especiales con gestos, animaciones y sonidos. Diseñado con una arquitectura de servidor autoritativo para evitar desincronizaciones.",
    longDescription: "Juego web multijugador en tiempo real inspirado en el \"game feel\" de Taco Gato Cabra Queso Pizza, adaptado a navegador con salas por código, turnos, claim sobre la pila, cartas especiales con gestos, animaciones y sonidos. Diseñado con una arquitectura de servidor autoritativo para evitar desincronizaciones. El juego permite crear salas con códigos de 5 caracteres, un lobby completo con host, ready/unready, start game y transferencia de host al desconectar. El servidor autoritativo valida turnos, flips, claims, penalizaciones y gestos, mientras que los clientes solo ven conteos de cartas de otros jugadores (no su mano). Sistema de palabras circular: taco → gato → capibara → churro → donut.",
    featured: true,
    image: "/Think-Fast/Desktop/JuegoDesktop1.PNG",
    mobileImage: "/Think-Fast/Mobile/JuegoMovil1.PNG",
    gallery: [
      { src: "/Think-Fast/Desktop/LobbyDesktop.PNG", alt: "Think-Fast - Lobby", kind: "desktop", featured: true },
      { src: "/Think-Fast/Desktop/JuegoDesktop1.PNG", alt: "Think-Fast - Juego vista 1", kind: "desktop" },
      { src: "/Think-Fast/Desktop/JuegoDesktop2.PNG", alt: "Think-Fast - Juego vista 2", kind: "desktop" },
      { src: "/Think-Fast/Desktop/JuegoDesktop3.PNG", alt: "Think-Fast - Juego vista 3", kind: "desktop" },
      { src: "/Think-Fast/Desktop/JuegoDesktop4.PNG", alt: "Think-Fast - Juego vista 4", kind: "desktop" },
      { src: "/Think-Fast/Desktop/VictoriaDesktop.PNG", alt: "Think-Fast - Victoria", kind: "desktop" },
      { src: "/Think-Fast/Desktop/DerrotaDesktop.PNG", alt: "Think-Fast - Derrota", kind: "desktop" },
      { src: "/Think-Fast/Mobile/LobbyMovil1.PNG", alt: "Think-Fast - Lobby móvil", kind: "mobile", featured: true },
      { src: "/Think-Fast/Mobile/JuegoMovil1.PNG", alt: "Think-Fast - Juego móvil vista 1", kind: "mobile" },
      { src: "/Think-Fast/Mobile/JuegoMovil2.PNG", alt: "Think-Fast - Juego móvil vista 2", kind: "mobile" },
      { src: "/Think-Fast/Mobile/JuegoMovil3.PNG", alt: "Think-Fast - Juego móvil vista 3", kind: "mobile" },
      { src: "/Think-Fast/Mobile/JuegoMovil4.PNG", alt: "Think-Fast - Juego móvil vista 4", kind: "mobile" },
      { src: "/Think-Fast/Mobile/VictoriaMovil.PNG", alt: "Think-Fast - Victoria móvil", kind: "mobile" },
      { src: "/Think-Fast/Mobile/DerrotaMovil.PNG", alt: "Think-Fast - Derrota móvil", kind: "mobile" },
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Node.js",
      "Express",
      "Socket.IO",
      "Zod",
      "Monorepo",
      "Real-time Multiplayer",
      "WebSockets",
      "Game Logic",
      "Vercel",
      "Render"
    ],
    features: [
      "Multijugador online en tiempo real con salas por código (5 caracteres)",
      "Lobby completo: host, ready/unready, start game, transferencia de host al desconectar",
      "Servidor autoritativo (anti-desync): el servidor valida turnos, flips, claims, penalizaciones y gestos",
      "Modelo de estado seguro: clientes solo ven counts de cartas de otros jugadores (no su mano)",
      "Sistema de palabras circular: taco → gato → capibara → churro → donut",
      "Claim sobre la pila (sin botón): falso claim = penalización inmediata",
      "Cartas especiales con gestos: Click frenzy, Bubbles, Circle (validación geométrica)",
      "Animaciones y microinteracciones: cartas volando al centro, pila con crecimiento visual + bounce",
      "Sonidos y música: SFX por evento, pitch dinámico según tamaño de pila, música opcional",
      "Optimizaciones móviles: pilas estáticas, animaciones simplificadas, GPU acceleration",
      "Deploy: Vercel (web) + Render (server), con CORS y warm-up /health"
    ],
    problem: "Quería construir un proyecto divertido y \"jugable\" que demostrara habilidades más allá de páginas estáticas: sincronización en tiempo real con varios jugadores, evitar \"desync\" (clientes con estados distintos), traducir un juego físico a web sin perder la esencia (reflejos, errores involuntarios, tensión), diseñar una UI con game feel: animaciones, micro-feedback y sonido, y hacerlo desplegable en servicios gratuitos (Vercel + Render), lidiando con spin-down y latencia inicial.",
    solution: "Construí un monorepo con un servidor Socket.IO que mantiene el estado de cada sala en memoria y actúa como fuente de verdad (arquitectura autoritativa). El cliente Next.js se encarga de la UI interactiva, animaciones y gestos, pero nunca decide el estado final: solo envía inputs (flip/claim/gestos) y renderiza el ROOM_STATE emitido por el servidor. Para mejorar la experiencia real: implementé claims tocando la pila (sin botón) para imitar el juego físico y permitir errores involuntarios, añadí cartas especiales que requieren gestos (click frenzy, burbujas, círculo) y validación robusta, optimicé la carga de assets con WebP, next/image y precarga de imágenes críticas para que el primer turno sea fluido, y en producción, añadí UI de \"preparando servidor\" para mitigar el spin-down de Render.",
    liveUrl: "https://thinkfast-web.vercel.app/",
    codeUrl: "https://github.com/ZGrengo/Taco-Gato-Capibara-Churro-Donut-Web-game"
  }
]

