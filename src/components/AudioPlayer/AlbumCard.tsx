import React from 'react';
import type { Album } from "@/Data/audiosData"

interface AlbumCardProps {
  album: Album
  onSelect: (album: Album) => void
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, onSelect }) => {
  return (
    <div
      className="bg-[#FFFFFF] dark:bg-[#18181B] shadow-lg rounded-xl p-3 cursor-pointer hover:shadow-xl transition-all"
      onClick={() => onSelect(album)}
    >

      <div className="group relative">
        <img
          className="w-full md:w-72 block rounded-xl"
          src={album.caratula}
          alt={album.titulo}
        />

        <div className="absolute bg-black rounded-xl bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center justify-center transition">
          <button
            className="hover:scale-110 text-white opacity-0 group-hover:opacity-100 transform transition"
            onClick={(e) => {
              e.stopPropagation()
              onSelect(album)
            }}
          >
            <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full">
              Ver álbum
            </span>
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-gray-900 dark:text-white text-lg">{album.titulo}</h3>
        <p className="text-gray-800 dark:text-gray-400">{album.artista}</p>
      </div>
    </div>
  )
}

export default AlbumCard