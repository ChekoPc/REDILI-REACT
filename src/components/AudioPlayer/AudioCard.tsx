import React from 'react';

type Audio = {
    nombre: string;
    autor: string;
    caratula: string;
    src: string;
    id: number;
};

interface AudioCardProps {
    audio: Audio;
}

const AudioCard: React.FC<AudioCardProps> = ({ audio }) => {
    return (
        <div className="bg-[#FFFFFF] dark:bg-[#18181B] shadow-lg rounded-xl p-3">
            <div className="group relative">
                <img
                    className="w-full md:w-72 block rounded-xl"
                    src={audio.caratula}
                    alt={audio.nombre}
                />
            </div>
            <div className="p-5">
                <h3 className="text-gray-900 dark:text-white text-lg">{audio.nombre}</h3>
                <p className="text-gray-800 dark:text-gray-400">{audio.autor}</p>
                <audio controls className="w-full mt-2">
                    <source src={audio.src} type="audio/mpeg" />
                    Tu navegador no soporta el elemento de audio.
                </audio>
            </div>
        </div>
    );
};

export default AudioCard;
