import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { CardHerramientas } from "@/components/herramientas/card";

import { mazatecoData } from "@/Data/herramientas/mazatecoData";
import { ixcatecoData } from "@/Data/herramientas/ixcatecoData";

export default function HerramientasPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-2">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Herramientas</h1>
        </div>
      </section>
      <br />
      <h1 className={subtitle()}>Aplicaciones para la lengua Mazateca</h1>
      <CardHerramientas herramientas={mazatecoData} />
      <br />
      <h1 className={subtitle()}>Aplicaciones en la lengua Ixcateca</h1>
      <CardHerramientas herramientas={ixcatecoData} />
      <br />
    </DefaultLayout>
  );
}
