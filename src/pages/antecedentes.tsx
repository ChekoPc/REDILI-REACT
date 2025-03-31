import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-2">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Lenguas Maternas</h1>
        </div>
      </section>
      <br />
      <p>
        La pérdida de lenguas maternas en México obedece a múltiples factores. La influencia dominante del español,
        la migración hacia áreas urbanas, la falta de políticas educativas inclusivas y el menosprecio hacia las culturas
        indígenas son algunos de los elementos que contribuyen a su declive. Las generaciones más jóvenes, inmersas en un
        entorno predominantemente hispanohablante, a menudo abandonan su lengua materna en busca de oportunidades y aceptación
        social, lo que acelera el riesgo de extinción de estas lenguas.
      </p>
      <br />
      <p>
        Preservar y revitalizar las lenguas maternas no solo implica conservar la diversidad lingüística, sino también
        salvaguardar la identidad cultural y promover la inclusión y el respeto hacia las comunidades indígenas. Es esencial
        implementar estrategias integrales que aborden esta problemática desde distintos ámbitos.
      </p>
      <br />
      <p>
        Las lenguas maternas en México son pilares fundamentales de la identidad y diversidad cultural. Su preservación
        y revitalización requieren esfuerzos concertados a nivel educativo, gubernamental y comunitario. Es responsabilidad
        de todos contribuir a su preservación para garantizar que estas valiosas lenguas continúen siendo una fuente de
        orgullo y conocimiento para las generaciones venideras.
      </p>
      <br />
      <p>
        La educación es algo importante para las nuevas generaciones, para preservar y difundir parte de su cultura.
      </p>
    </DefaultLayout>
  );
}
