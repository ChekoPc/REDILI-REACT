import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">

                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="mb-4 flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white md:justify-start">
                            <img src="/logo.png" className="mr-2 h-12 block dark:hidden" alt="Logo REDILI"/>
                            <img src="/logo-dark.png" className="mr-2 h-12 hidden dark:block" alt="Logo REDILI"/>
                            REDILI
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 text-center mx-auto">
                            Repositorio Digital de Lenguas Indígenas
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {/* Sección de Navegación */}
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-gray-900 dark:text-white">Navegación</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Inicio</Link>
                                </li>
                                <li>
                                    <Link to="/acerca-de" className="hover:underline">Acerca de</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Sección de cuenta */}
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-gray-900 dark:text-white">Cuenta</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Iniciar Sesión</Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">Registro</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Sección de Contacto */}
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-gray-900 dark:text-white">Contacto</h2>
                            <div className="flex items-center mb-4">
                                <PlaceIcon className="text-gray-500 dark:text-gray-400 mr-2" />
                                <a
                                    href="https://maps.app.goo.gl/9eQZJfVPpqFekjbs9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 dark:text-gray-400 font-medium hover:underline"
                                >
                                    Universidad de la Cañada
                                </a>
                            </div>
                            <div className="flex items-center mb-4">
                                <EmailIcon className="text-gray-500 dark:text-gray-400 mr-2" />
                                <a
                                    href="mailto:ForoTCA@unca.edu.mx"
                                    className="text-gray-500 dark:text-gray-400 font-medium hover:underline"
                                >
                                    ForoTCA@unca.edu.mx
                                </a>
                            </div>
                            <div className="flex items-center">
                                <LocalPhoneIcon className="text-gray-500 dark:text-gray-400 mr-2" />
                                <a
                                    href="tel:2363720712"
                                    className="text-gray-500 dark:text-gray-400 font-medium hover:underline"
                                >
                                    236 372 0712 - Ext. 302
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="flex justify-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Carretera Teotitlán - San Antonio Nanahuatipán Km 1.7 s/n. Paraje Titlacuatitla. Teotitlán de Flores Magón, Oax. México, C.P. 68540
                    </span>
                </div>
                <div className="flex justify-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        © {currentYear} Repositorio Digital de Lenguas Indígenas. Todos los derechos reservados.
                    </span>
                </div>
            </div>
        </footer>
    );
};