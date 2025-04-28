type Audio = {
    nombre: string;
    autor: string;
    caratula: string;
    src: string;
    id: number;
};

export type Album = {
    titulo: string;
    artista: string;
    caratula: string;
    pistas: Audio[];
};

type AlbumData = {
    albums: Album[];
};

export const album1: Album = {
    titulo: "Voces de Chiquihuitlán",
    artista: "Juan Torres Guzmán",
    caratula: "/audios/album1/caratula.jpg",
    pistas: [
        { nombre: "01 Pista 1", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/01 Pista 1.mp3", id: 1 },
        { nombre: "02 Pista 2", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/02 Pista 2.mp3", id: 2 },
        { nombre: "03 Pista 3", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/03 Pista 3.mp3", id: 3 },
        { nombre: "04 Pista 4", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/04 Pista 4.mp3", id: 4 },
        { nombre: "05 Pista 5", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/05 Pista 5.mp3", id: 5 },
        { nombre: "06 Pista 6", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/06 Pista 6.mp3", id: 6 },
        { nombre: "07 Pista 7", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/07 Pista 7.mp3", id: 7 },
        { nombre: "08 Pista 8", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/08 Pista 8.mp3", id: 8 },
        { nombre: "09 Pista 9", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/09 Pista 9.mp3", id: 9 },
        { nombre: "10 Pista 10", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/10 Pista 10.mp3", id: 10 },
        { nombre: "11 Pista 11", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/11 Pista 11.mp3", id: 11 },
        { nombre: "12 Pista 12", autor: "autor", caratula: "/audios/album1/caratula.jpg", src: "/audios/album1/12 Pista 12.mp3", id: 12 },
    ]
};

export const albumData: AlbumData = {
    albums: [ album1,]
};