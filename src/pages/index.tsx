import DefaultLayout from "@/layouts/default"

import EmblaCarousel from "@/components/inicio/carousel"

export default function IndexPage() {
  return (
    <DefaultLayout>

      <div className="w-full aspect-[16/9] sm:aspect-[16/6] md:aspect-[16/4] p-4 sm:p-6 md:p-10 box-border bg-[url('/images/bg1.png')] bg-repeat">
        <div className="w-full h-full border-[10px] sm:border-[15px] md:border-[20px] border-white rounded-[20px] sm:rounded-[25px] md:rounded-[35px] overflow-hidden flex flex-col justify-center items-center text-center bg-[url('/images/banner.jpg')] bg-no-repeat bg-cover">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white">
            Lenguas Indígenas en México
          </h1>
          <span className="text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-white px-4 sm:px-0">
            Preservando nuestras lenguas, conectando con nuestras raíces ...
          </span>
        </div>
      </div>

      <div className="contenedor-principal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-4 sm:px-4 lg:px-0">
          {/* columna 1 */}
          <div className="md:col-span-1">
            <div>
              <span className="text-2xl font-bold mb-4 text-title">
                Bienvenido
              </span>
              <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body ">
                Este espacio está dedicado a compartir los trabajos y avances realizados en torno a nuestras lenguas maternas.
                Agradecemos profundamente a quienes se suman al esfuerzo por difundir, conservar y revitalizar estas lenguas
                en sus comunidades. Esperamos que el material aquí presentado sea una fuente de inspiración y una herramienta
                útil para seguir fortaleciendo nuestra herencia lingüística y cultural.
              </p>
            </div>
            <div>
              <span className="text-2xl font-bold mb-4 text-title">
                Objetivo
              </span>
              <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body ">
                Facilitar el acceso a recursos lingüísticos y culturales en línea con el propósito de promover la enseñanza
                y el aprendizaje de las lenguas indígenas, así como impulsar la investigación y documentación de su riqueza
                lingüística y cultural.
              </p>
            </div>
          </div>
          {/* columna 2 */}
          <div className="md:col-span-2">
            <EmblaCarousel />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}