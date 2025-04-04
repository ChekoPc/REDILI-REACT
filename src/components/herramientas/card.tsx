import { Card, CardHeader, CardBody, Image, Button, Link } from "@heroui/react";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

interface Herramienta {
  id: number;
  nombre: string;
  imagen: string;
  aplicacion?: string;
  pdf?: string;
  link?: string;
}

interface CardHerramientasProps {
  herramientas: Herramienta[];
}

export const CardHerramientas = ({ herramientas }: CardHerramientasProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-4">
      {herramientas.map((herramienta) => (
        <Card key={herramienta.id} className="py-4 transition-shadow h-full"
>
          <CardHeader className="flex flex-col items-center">
            <Image
              alt={herramienta.nombre}
              className="object-contain rounded-xl w-full h-64"
              src={herramienta.imagen}
              width={180} // ancho
              height={180} // altura
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex flex-col items-center">
            <h4 className="font-bold text-large text-center">{herramienta.nombre}</h4>
            {/* Enlace */}
            {herramienta.link && (
              <Link href={herramienta.link} className="mt-2 text-blue-500 underline">
                Visitar sitio
              </Link>
            )}
            <p>Descargar <DownloadRoundedIcon /></p>
            {/* Botones para descargar Aplicación y PDF */}
            <div className="flex justify-center mt-2 space-x-2">
              {herramienta.aplicacion && <Button color="primary" as="a" href={herramienta.aplicacion}>Aplicación</Button>}
              {herramienta.pdf && <Button color="primary" as="a" href={herramienta.pdf} target="_blank" rel="noopener noreferrer">PDF</Button>}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
