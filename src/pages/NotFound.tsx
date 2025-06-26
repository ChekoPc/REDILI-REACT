"use client"

import { Link } from "@heroui/link"
import { Button } from "@heroui/button"
import DefaultLayout from "@/layouts/default"

export default function NotFound() {
  return (
    <DefaultLayout>
      <section
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 flex items-center justify-center px-4"
        style={{ background: "linear-gradient(to bottom right, #000000, #1f2937, #007897)" }}
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center max-w-6xl">
          {/* Left side - Text content */}
          <div className="text-white space-y-6">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">404</h1>
              <h2 className="text-xl md:text-2xl font-semibold tracking-wider mt-4 text-gray-300">
                PÁGINA NO ENCONTRADA
              </h2>
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-md">
              Su búsqueda se ha aventurado más allá del universo conocido.
            </p>

            <div className="pt-4">
              <Button
                as={Link}
                href="/"
                variant="bordered"
                size="lg"
                className="px-8 py-3 rounded-full transition-all duration-300"
                style={{
                  borderColor: "#007897",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 125, 157, 0.8)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                }}
              >
                Volver a inicio
              </Button>
            </div>
          </div>

          {/* Right side - REDILI illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background glow effect */}
              <div
                className="absolute inset-0 rounded-full blur-3xl scale-150"
                style={{ background: "linear-gradient(to right, rgba(0, 125, 157, 0.3), rgba(0, 125, 157, 0.2))" }}
              ></div>

              {/* Logo image */}
              <div className="relative z-10">
                <img src="/logo-white.png" alt="REDILI LOGO" className="w-80 md:w-96 lg:w-[400px] h-auto" />
              </div>

              {/* Floating stars */}
              <div className="absolute top-10 right-10 text-yellow-400 text-2xl animate-pulse">⭐</div>
              <div className="absolute bottom-20 left-5 text-yellow-300 text-lg animate-pulse delay-1000">⭐</div>
              <div className="absolute top-1/3 left-10 text-xl animate-pulse delay-500" style={{ color: "#007897" }}>
                ✦
              </div>
              <div className="absolute top-3/3 left-60 text-xl animate-pulse delay-500" style={{ color: "#007897" }}>
                ✦
              </div>
            </div>
          </div>
        </div>

        {/* Additional cosmic background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
          <div
            className="absolute top-3/4 left-1/3 w-1 h-1 rounded-full opacity-80 animate-pulse delay-700"
            style={{ backgroundColor: "#007897" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full opacity-70 animate-pulse delay-300"
            style={{ backgroundColor: "rgba(0, 125, 157, 0.8)" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full opacity-60 animate-pulse delay-1000"
            style={{ backgroundColor: "#007897" }}
          ></div>
        </div>
      </section>
    </DefaultLayout>
  )
}
