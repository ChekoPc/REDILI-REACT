import DefaultLayout from "@/layouts/default"
import { Image } from "@heroui/react"

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="w-full aspect-[16/8] sm:aspect-[16/6] md:aspect-[16/5] p-4 sm:p-6 md:p-10 box-border bg-[url('/images/bg1.png')] bg-repeat">
        <div className="w-full h-full border-[10px] sm:border-[15px] md:border-[20px] border-white rounded-[20px] sm:rounded-[25px] md:rounded-[35px] overflow-hidden flex flex-col justify-center items-center text-center bg-[url('/images/banner.jpg')] bg-no-repeat bg-cover">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white">
            Lenguas Indígenas en México
          </h1>
          <span className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-white px-4 sm:px-0">
            Preservando nuestras lenguas, conectando con nuestras raíces ...
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4 sm:px-4 lg:px-0">
        {/* columna 1 */}
        <div>
          <span className="text-2xl font-bold mb-4 text-title">
            Bienvenido al Repositorio
          </span>
          <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body dark:text-white">
            Este espacio es para presentar los trabajos y avances que se llevan a cabo en las lenguas maternas.
            Agradecemos a todos aquellos que apoyan a difundir, conservar y recatar la lengua materna en su comunidad,
            esperando que este material les sirva de apoyo.
          </p>
          <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body dark:text-white">
            Nuestro principal objetivo es hacer accesibles los recursos lingüísticos y culturales en línea, fomentando
            la enseñanza y el aprendizaje de las lenguas indígenas, así como la investigación y documentación
            lingüística y cultural.
          </p>
        </div>

        {/* columna 2 */}
        <div>
          <span className="text-2xl font-bold mb-4 text-title">
            ¿Quiénes somos?
          </span>
          <div className="p-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Image
                alt="Profesora - Investigadora"
                className="object-cover rounded-xl"
                src="/images/pic1.jpeg"
                width={80}
                height={110}
              />
              <div className="text-center sm:text-left mt-2 sm:mt-0">
                <p className="font-bold">M. C. Beatriz Adriana Sabino Moxo</p>
                <p className="text-body dark:text-white">Profesora-Investigadora</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Image
                alt="Profesor Investigador"
                className="object-cover rounded-xl"
                src="/images/pic2.jpg"
                width={80}
                height={110}
              />
              <div className="text-center sm:text-left mt-2 sm:mt-0">
                <p className="font-bold">M. C. José Alberto Márquez Domínguez</p>
                <p className="text-body dark:text-white">Profesor Investigador</p>
              </div>
            </div>
          </div>
        </div>

        {/* columna 3 */}
        <div className="md:col-span-2 lg:col-span-1">
          <span className="text-2xl font-bold mb-4 text-title">
            Objetivo
          </span>
          <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body dark:text-white">
            La educación es esencial en todos los niveles, sin embargo, las dificultades que presentan cada nivel es
            necesario utilizar las tecnologías, para poder hacer uso de ellas es necesario la colaboración entre
            estudiantes y el profesor que imparte la materia, otro elemento necesario en escuelas bilingües es la
            necesidad de tener herramientas que puedan apoyar a la educación en su lengua materna, ya que algunas de las
            lenguas que en el estado de Oaxaca están por desaparecer.
          </p>
        </div>
      </div>
    </DefaultLayout>
  )
}