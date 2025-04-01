export interface Ixcateco {
    id: number;
    nombre: string;
    imagen: string;
    aplicacion?: string;
    pdf?: string;
    link?: string;
}

export const ixcatecoData: Ixcateco[] = [
    {
        id: 1,
        nombre: "Ix Kids",
        imagen: "/herramientas/ixcateco/01-ix-kids.png",
        aplicacion: "#",
        pdf: "#",
    },
    {
        id: 2,
        nombre: "Avatar Ichitu",
        imagen: "/herramientas/ixcateco/02-avatar-ichitu.png",
        aplicacion: "#",
        pdf: "#",
    },
    {
        id: 3,
        nombre: "De'Nu",
        imagen: "/herramientas/ixcateco/03-de-nu.png",
        aplicacion: "#",
        pdf: "#",
    },
];