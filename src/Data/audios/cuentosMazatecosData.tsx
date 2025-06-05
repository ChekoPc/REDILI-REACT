export interface CuentoMazateco {
    nombre: string;
    autor: string;
    caratula: string;
    src: string;
    letra?: string;
    colaboradorLetra?: string;
    id: number;
}

export const cuentosMazatecos: CuentoMazateco[] = [
    {
        nombre: "Mazateco", 
        autor: "Cuento Nativo", 
        caratula: "/audios/audio1.png",
        src: "/audios/audio1.mp3",
        letra: "/audios/audio1.txt",
        colaboradorLetra: "Colaborador: lorem ipsum",
        id: 1
    },
    {
        nombre: "Mazateco", 
        autor: "Cuento Nativo", 
        caratula: "/audios/audio1.png",
        src: "/audios/audio1.mp3",
        letra: "/audios/audio1.txt",
        id: 2
    },
    {
        nombre: "Mazateco", 
        autor: "Cuento Nativo", 
        caratula: "/audios/audio1.png",
        src: "/audios/audio1.mp3",
        letra: "/audios/audio1.txt",
        id: 3
    },
    {
        nombre: "Mazateco", 
        autor: "Cuento Nativo", 
        caratula: "/audios/audio1.png",
        src: "/audios/audio1.mp3",
        letra: "/audios/audio1.txt",
        id: 4
    },
];