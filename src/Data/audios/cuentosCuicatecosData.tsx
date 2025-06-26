export interface CuentoCuicateco {
    nombre: string;
    autor: string;
    caratula: string;
    src: string;
    letra?: string;
    colaboradorLetra?: string;
    id: number;
}

export const cuentosCuicatecos: CuentoCuicateco[] = [
    {
        nombre: "Cuicateco", 
        autor: "Cuento Nativo", 
        caratula: "/audios/audio1.png",
        src: "/audios/audio1.mp3",
        letra: "/audios/audio1.txt",
        id: 1
    },
    {
        nombre: "Cuicateco", 
        autor: "Cuento Nativo", 
        caratula: "/audios/audio1.png",
        src: "/audios/audio1.mp3",
        letra: "/audios/audio1.txt",
        id: 2
    },
    {
        nombre: "Cuicateco", 
        autor: "Cuento Nativo", 
        caratula: "/audios/audio1.png",
        src: "/audios/audio1.mp3",
        letra: "/audios/audio1.txt",
        id: 3
    },
    {
        nombre: "Cuicateco", 
        autor: "Cuento Nativo", 
        caratula: "/audios/audio1.png",
        src: "/audios/audio1.mp3",
        letra: "/audios/audio1.txt",
        id: 4
    },
];