import DefaultLayout from "@/layouts/default";
import { Image, Link } from "@heroui/react"


export default function AcercaDePage() {
  return (
    <DefaultLayout>
      <div className="contenedor-principal margin-top-page">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-4 px-4 sm:px-4 lg:px-0">
          {/* columna 1 */}
          <div className="p-4 order-2 md:order-1">
            <span className="text-2xl font-bold mb-4 text-title">
              ¿Quienes somos?
            </span>
            <div className="p-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Image
                  alt="TCA"
                  className="object-cover rounded-xl w-40 sm:w-[280px]"
                  src="/images/acerca-de/pic2.png"
                  width={280}
                />
                <div className="text-center sm:text-left mt-2 sm:mt-0">
                  <p className="font-bold">Cuerpo Académico Tecnología Computacional Aplicada</p>
                  <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body ">
                    Conjunto de profesores que están a cargo del desarrollo de aplicaciones
                    orientadas a coadyuvar en la sociedad.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Image
                  alt="TCA"
                  className="object-cover rounded-xl w-40 sm:w-[280px]"
                  src="/images/acerca-de/pic3.png"
                  width={280}
                />
                <div className="text-center sm:text-left mt-2 sm:mt-0">
                  <p className="font-bold">Laboratorio de Investigación y Desarrollo de Software</p>
                  <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body ">
                    Conjunto de profesores que están a cargo del desarrollo de aplicaciones
                    orientadas a coadyuvar en la sociedad.
                  </p>
                </div>
              </div>
            </div>
            <span className="text-2xl font-bold mb-4 text-title">
              Contacto
            </span>
            <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body">
              <Link isExternal showAnchorIcon href="https://www.unca.edu.mx" className="text-[#878E83]">
                Universidad de la Cañada
              </Link>
            </p>
            <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body">
              <Link isExternal showAnchorIcon href="mailto:foroTCA@unca.edu.mx" className="text-[#878E83]">
                foroTCA@unca.edu.mx
              </Link>
            </p>
          </div>

          {/* columna 2 */}
          <div className="p-4 order-1 md:order-2">
            <div className="flex justify-center items-center">
              <Image
                alt="Repositorio digital de lenguas indígenas"
                className="object-cover rounded-xl block dark:hidden"
                src="/images/acerca-de/pic1.png"
                width={440}
              />
              <Image
                alt="Repositorio digital de lenguas indígenas"
                className="object-cover rounded-xl hidden dark:block"
                src="/images/acerca-de/pic1-dark.png"
                width={440}
              />
            </div>
            <div className="mt-10">
              <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body ">
                Este surgio por la necesidad de compartir el material que se ha adquirido en las diferentes
                investigaciones, y que esté abierto al público para su utilización.
              </p>
              <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body ">
                También se les da un agradecimiento a todas las personas que han colaborado y contribuído a
                llevar a cabo los diferentes proyectos.
              </p>
              <p className="text-1xl font-bold mb-4 mt-5 text-justify text-body ">
                Realizado por Sergio Eliseo Peña Calderón y supervisados por los colaboradores del proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}