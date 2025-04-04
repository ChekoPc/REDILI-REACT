export interface Mazateco {
    id: number;
    nombre: string;
    imagen: string;
    aplicacion?: string;
    pdf?: string;
    link?: string;
}

export const mazatecoData: Mazateco[] = [
    {
        id: 1,
        nombre: "Mi libro interactivo - Xon Chjine",
        imagen: "/herramientas/mazateco/01-Xon-Chjine.png",
        aplicacion: "/herramientas/mazateco/01-Xon-Chjine.apk",
        pdf: "/herramientas/mazateco/01-Mi-libro-interactivo-Xon-Chjine.pdf",
    },
    {
        id: 2,
        nombre: "Material didáctico, Usando una app de Realidad Aumentada",
        imagen: "/herramientas/mazateco/02-Material-didactico.png",
        aplicacion: "/herramientas/mazateco/02-Material-didactico.apk",
        pdf: "/herramientas/mazateco/02-Material-didactico.pdf",
    },
    {
        id: 3,
        nombre: "Mé xi kuéna jmíni - ¿Qué me cuentas?",
        imagen: "/herramientas/mazateco/03-que-me-cuentas.png",
        aplicacion: "/herramientas/mazateco/03-que-me-cuentas.apk",
        pdf: "/herramientas/mazateco/03-que-me-cuentas.pdf",
    },
    {
        id: 4,
        nombre: "Diccionario mazateco",
        imagen: "/herramientas/mazateco/04-diccionario.jpeg",
        pdf: "#",
        link: "#",
    },
];