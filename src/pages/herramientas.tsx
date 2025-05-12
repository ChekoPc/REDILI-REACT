import DefaultLayout from "@/layouts/default";
import { CardHerramientas } from "@/components/herramientas/card";

import { mazatecoData } from "@/Data/herramientas/mazatecoData";
import { ixcatecoData } from "@/Data/herramientas/ixcatecoData";

export default function HerramientasPage() {
  return (
    <DefaultLayout>
      <div className="contenedor-principal mt-12">
        <span className="text-2xl font-bold mb-4 text-title">
          Aplicaciones para la lengua Mazateca
        </span>
        <CardHerramientas herramientas={mazatecoData} />
        <span className="text-2xl font-bold mb-4 text-title">
          Aplicaciones en la lengua Ixcateca
        </span>
        <CardHerramientas herramientas={ixcatecoData} />
        <br />
      </div>
    </DefaultLayout>
  );
}
