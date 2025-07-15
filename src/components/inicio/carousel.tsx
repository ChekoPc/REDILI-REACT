import { useEffect, useCallback, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

interface SlideData {
  id: number
  title: string
  subtitle: string
  description: string
  buttonText: string
  backgroundImage: string
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Acer en",
    subtitle: "COMPUTEX",
    description:
      "Conozca el futuro impulsado por IA de Acer, en el que las barreras se rompen y la tecnología transforma la manera en que vivimos, trabajamos y jugamos.",
    buttonText: "Descubra lo que vendrá en el futuro",
    backgroundImage: "https://wallpapercave.com/wp/wp6774751.jpg",
  },
  {
    id: 2,
    title: "Innovación",
    subtitle: "TECNOLÓGICA",
    description:
      "Descubre las últimas innovaciones en tecnología que están transformando el mundo digital y creando nuevas oportunidades.",
    buttonText: "Explorar innovaciones",
    backgroundImage: "https://wallpapercave.com/wp/wp6705749.jpg",
  },
  {
    id: 3,
    title: "Futuro",
    subtitle: "DIGITAL",
    description:
      "Únete a la revolución digital con las herramientas más avanzadas para profesionales y gamers de todo el mundo.",
    buttonText: "Conocer más",
    backgroundImage: "https://wallpapercave.com/wp/wp7287112.jpg",
  },
  {
    id: 4,
    title: "Desarrollando el",
    subtitle: "FUTURO",
    description:
      "La revolución digital ya esta aqui con las herramientas más avanzadas para profesionales y gamers de todo el mundo.",
    buttonText: "Conocer más",
    backgroundImage: "https://wallpapercave.com/wp/wp9154839.jpg",
  },
]

export default function EmblaCarousel() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const autoplayRef = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
    },
    [autoplayRef.current],
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const toggleAutoplay = useCallback(() => {
    const autoplay = autoplayRef.current
    if (autoplay) {
      if (isPlaying) {
        autoplay.stop()
      } else {
        autoplay.play()
      }
      setIsPlaying(!isPlaying)
    }
  }, [isPlaying])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full h-[600px] overflow-hidden">

      {/* Contenedor del carrusel */}
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] min-w-0 relative">

              {/* Imagen de fondo */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}>
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Contenedor del contenido */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="flex flex-col items-center text-center max-w-2xl px-4">
                  {/* Texto principal */}
                  <div className="mb-6">
                    <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">{slide.title}</h1>
                    <h2 className="text-white text-4xl lg:text-5xl font-bold">{slide.subtitle}</h2>
                  </div>
                  {/* Descripción */}
                  <p className="text-white text-lg mb-8 leading-relaxed max-w-xl mx-14 md:mx-0">{slide.description}</p>
                  {/* Botón */}
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flechas de navegación */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
        onClick={scrollPrev}
        aria-label="Diapositiva anterior">
        <ArrowBackIosRoundedIcon className="w-8 h-8 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
        onClick={scrollNext}
        aria-label="Siguiente diapositiva">
        <ArrowForwardIosRoundedIcon className="w-8 h-8 text-white" />
      </button>

      {/* Controles inferiores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        {/* Indicadores de diapositiva */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === selectedIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                }`}
              onClick={() => scrollTo(index)}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>

        {/* Botón de reproducir/pausar */}
        <button
          className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-200"
          onClick={toggleAutoplay}
          aria-label={isPlaying ? "Pausar reproducción automática" : "Iniciar reproducción automática"}
        >
          {isPlaying ? (
            <PauseRoundedIcon className="w-5 h-5 text-white" />
          ) : (
            <PlayArrowRoundedIcon className="w-5 h-5 text-white" />
          )}
        </button>

        {/* Indicador de duración */}
        <div className="text-white text-xs bg-black/20 px-2 py-1 rounded">
          {selectedIndex + 1} / {slides.length}
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((selectedIndex + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}