import DefaultLayout from "@/layouts/default"
import { Image } from "@heroui/react"

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div
        style={{
          backgroundImage: "url('/images/bg1.png')", backgroundRepeat: "repeat",
          width: "100%", height: "420px", padding: "40px 100px", boxSizing: "border-box",
        }} className="sm:p-4 md:p-6 lg:padding-[40px_100px]">
        <div style={{
          backgroundImage: "url('/images/banner.jpg')", backgroundRepeat: "no-repeat",
          backgroundSize: "cover", width: "100%", height: "100%", border: "20px solid white",
          borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center", textAlign: "center",
        }} className="sm:border-[10px] md:border-[15px] lg:border-[20px]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white">
            Lenguas Indígenas en México
          </h1>
          <span className="text-xl sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-white px-4 sm:px-0">
            Preservando nuestras lenguas, conectando con nuestras raíces ...
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4 sm:px-4 lg:px-0">
        {/* columna 1 */}
        <div>
          <span className="text-2xl font-bold mb-4" style={styles.colorTittle}>
            Bienvenido al Repositorio
          </span>
          <p className="text-1xl font-bold mb-4 mt-5 text-justify" style={styles.colorText}>
            Este espacio es para presentar los trabajos y avances que se llevan a cabo en las lenguas maternas.
            Agradecemos a todos aquellos que apoyan a difundir, conservar y recatar la lengua materna en su comunidad,
            esperando que este material les sirva de apoyo.
          </p>
          <p className="text-1xl font-bold mb-4 mt-5 text-justify" style={styles.colorText}>
            Nuestro principal objetivo es hacer accesibles los recursos lingüísticos y culturales en línea, fomentando
            la enseñanza y el aprendizaje de las lenguas indígenas, así como la investigación y documentación
            lingüística y cultural.
          </p>
        </div>

        {/* columna 2 */}
        <div>
          <span className="text-2xl font-bold mb-4" style={styles.colorTittle}>
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
                <p className="font-bold text-large">M. C. Beatriz Adriana Sabino Moxo</p>
                <small className="text-default-500">Profesora-Investigadora</small>
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
                <p className="font-bold text-large">M. C. José Alberto Márquez Domínguez</p>
                <small className="text-default-500">Profesor Investigador</small>
              </div>
            </div>
          </div>
        </div>

        {/* columna 3 */}
        <div className="md:col-span-2 lg:col-span-1">
          <span className="text-2xl font-bold mb-4" style={styles.colorTittle}>
            Objetivo
          </span>
          <p className="text-1xl font-bold mb-4 mt-5 text-justify" style={styles.colorText}>
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

const styles = {
  colorTittle: {
    color: "#007897",
  },
  colorText: {
    color: "#878E83",
  },
}
