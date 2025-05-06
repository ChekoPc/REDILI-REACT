import { Card, Image, Button, Link } from "@heroui/react"
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded"

interface Herramienta {
  id: number
  nombre: string
  imagen: string
  aplicacion?: string
  pdf?: string
  link?: string
}

interface CardHerramientasProps {
  herramientas: Herramienta[]
}

export const CardHerramientas = ({ herramientas }: CardHerramientasProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {herramientas.map((herramienta) => (
        <Card key={herramienta.id} className="py-4 transition-shadow h-full">
          <div className="flex flex-row p-4">
            {/* Imagen a la izquierda */}
            <div className="w-1/3 pr-4">
              <Image
                alt={herramienta.nombre}
                className="object-contain rounded-xl w-full h-auto"
                src={herramienta.imagen || "/placeholder.svg"}
                width={180}
                height={180}
              />
            </div>

            {/* Contenido a la derecha */}
            <div className="w-2/3 flex flex-col">
              <h4 className="font-bold text-large text-body">{herramienta.nombre}</h4>

              {herramienta.link && (
                <Link
                  href={herramienta.link}
                  className="mt-2 text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar sitio
                </Link>
              )}

              <div className="flex items-center mt-2 text-body">
                <p>Descargar</p>
                <DownloadRoundedIcon className="ml-1" />
              </div>

              {/* Botones para descargar Aplicación y PDF */}
              <div className="flex mt-2 space-x-2">
                {herramienta.aplicacion && (
                  <Button color="primary" as="a" href={herramienta.aplicacion}>
                    Aplicación
                  </Button>
                )}
                {herramienta.pdf && (
                  <Button color="primary" as="a" href={herramienta.pdf} target="_blank" rel="noopener noreferrer">
                    PDF
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

