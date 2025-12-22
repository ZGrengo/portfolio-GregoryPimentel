import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const values = [
  "Ownership: Me responsabilizo de los proyectos de principio a fin",
  "Comunicación: Transparencia y claridad en cada interacción",
  "Aprendizaje continuo: Siempre buscando mejorar y aprender nuevas tecnologías",
  "Enfoque en producto: Priorizo el valor real para el usuario final",
  "Performance: Optimización y buenas prácticas en cada línea de código"
]

export function AboutSection() {
  return (
    <section id="about" className="pt-8 pb-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Column 1: About Text */}
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-palette-teal to-palette-blue bg-clip-text text-transparent">
                  Sobre mí
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Soy ingeniero de sistemas y desarrollador full stack, enfocado en construir productos digitales que resuelven problemas reales.
                  </p>
                  <p>
                    Mi trayectoria es poco convencional: mientras trabajaba en cocina detecté ineficiencias en la gestión de comandas y desarrollé una aplicación que hoy está en producción en más de 10 restaurantes, con previsión de escalar al resto de la compañía. Gracias a esta herramienta, el local donde trabajo alcanzó el top 10 de restaurantes más rápidos del país durante varios meses consecutivos.
                  </p>
                  <p>
                    Esta experiencia define mi forma de trabajar: entender el problema desde dentro, diseñar una solución práctica y llevarla a producción.
                  </p>
                  <p>
                    Trabajo principalmente con Next.js, React, TypeScript y Node.js, y tengo experiencia con bases de datos relacionales y no relacionales, integraciones de pagos y sistemas CRUD completos.
                  </p>
                  <p>
                    Actualmente busco una oportunidad como desarrollador donde aportar impacto desde el primer día, seguir creciendo técnicamente y formar parte de un equipo orientado a producto.
                  </p>
                </div>
              </div>

              {/* Column 2: Values */}
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-palette-teal to-palette-blue bg-clip-text text-transparent">
                  Lo que valoro
                </h2>
                <ul className="space-y-4">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-palette-blue mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

