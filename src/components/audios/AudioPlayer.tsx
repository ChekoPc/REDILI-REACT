"use client"

import type React from "react"
import { useRef } from "react"
import { Card, Image } from "@heroui/react"

export interface Audios {
  nombre: string
  autor: string
  caratula: string
  src: string
  id: number
}

interface AudioPlayerProps {
  audios: Audios[]
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audios }) => {
  // Crear un objeto para almacenar múltiples referencias de audio
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({})

  // Función para manejar cuando un audio comienza a reproducirse
  const handlePlay = (audioId: number) => {
    // Pausar todos los demás audios
    Object.entries(audioRefs.current).forEach(([id, audioElement]) => {
      if (Number(id) !== audioId && audioElement) {
        audioElement.pause()
      }
    })
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">
      {audios.map((audio) => (
        <Card key={audio.id} className="flex flex-col items-center p-4">
          <Image
            src={audio.caratula || "/placeholder.svg"}
            alt={`Carátula de ${audio.nombre}`}
            className="w-32 h-32 object-cover rounded-xl mb-2"
          />
          <div className="text-center">
            <h3 className="font-bold text-lg">{audio.nombre}</h3>
            <p className="text-sm">{audio.autor}</p>
          </div>
          <audio
            ref={(element) => {
              audioRefs.current[audio.id] = element
            }}
            src={audio.src}
            controls
            className="mt-3 w-full"
            onPlay={() => handlePlay(audio.id)}
          />
        </Card>
      ))}
    </div>
  )
}

export default AudioPlayer
