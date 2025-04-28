import type React from "react"
import { useState } from "react"
import { albumData, type Album } from "@/Data/audiosData"
import AudioCard from "./AudioCard"
import AlbumCard from "./AlbumCard"
import { Button } from "@heroui/react"

const AudioPlayer: React.FC = () => {
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)

    const handleAlbumSelect = (album: Album) => {
        setSelectedAlbum(album)
    }

    const handleBackToAlbums = () => {
        setSelectedAlbum(null)
    }

    return (
        <main className="grid place-items-center gap-6 p-4">
            <div>
                {!selectedAlbum ? (
                    // álbumes
                    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {albumData.albums.map((album, index) => (
                            <AlbumCard key={index} album={album} onSelect={handleAlbumSelect} />
                        ))}
                    </section>
                ) : (
                    // pistas del álbum
                    <>
                        <div className="relative mb-8 rounded-xl overflow-hidden">
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    backgroundImage: `url(${selectedAlbum.caratula})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: 'blur(20px)',
                                    opacity: 0.4,
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-black/15 z-0"></div>
                            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl backdrop-blur-sm">
                                <div className="w-48 h-48 min-w-[12rem] shadow-xl rounded-xl">
                                    <img
                                        src={selectedAlbum.caratula}
                                        alt={selectedAlbum.titulo}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                                <div className="flex flex-col justify-end">
                                    <h1 className="text-5xl font-bold mb-4">{selectedAlbum.titulo}</h1>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="font-medium">{selectedAlbum.artista}</span>
                                        <span className="font-medium">•</span>
                                        <span className="font-medium">
                                            {selectedAlbum.pistas.length} canciones
                                        </span>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <Button onPress={handleBackToAlbums} color="primary" variant="solid" className="rounded-full">
                                            Volver a álbumes
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {selectedAlbum.pistas.map((audio) => (
                                <AudioCard key={audio.id} audio={audio} />
                            ))}
                        </section>
                    </>
                )}
            </div>
        </main>
    )
}

export default AudioPlayer

