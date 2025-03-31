import { Card, CardHeader, CardBody, Image, Button } from "@heroui/react";

import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

export const CardHerramientas = () => {
  return (
    <Card className="w-[270px] h-[310px] py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270} // ancho
          height={160} // altura
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex flex-col items-center">
        <h4 className="font-bold text-large text-center">Nombre Herramienta</h4>
        <p className="">Descargar <DownloadRoundedIcon/></p>
        <div className="flex justify-center mt-2 space-x-2"> 
          <Button color="primary">Aplicación</Button>
          <Button color="primary">PDF </Button>
        </div>
      </CardBody>

    </Card>
  );
}