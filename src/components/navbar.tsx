"use client"

import { useState, useEffect } from "react"
import { Link } from "@heroui/link"
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar"
import clsx from "clsx"
import { siteConfig } from "@/config/site"
import { ThemeSwitch } from "@/components/theme-switch"

export const Navbar = () => {
  // Añadimos un estado para controlar la apertura/cierre del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== "undefined" ? window.location.pathname : "/",
  )

  // Detectar la ruta actual en el cliente
  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  // Función para manejar el toggle del menú
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="fixed top-0 bg-[#006B89] shadow-md backdrop-blur-md py-3 px-0 z-50"
      // Controlamos el estado del menú explícitamente
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="flex w-full items-center px-4">
        {/* Logo + navegación */}
        <div className="flex items-center justify-between bg-transparent lg:bg-[#007B9D] w-full rounded-xl px-4 py-2">
          {/* Logo */}
          <NavbarContent className="flex-none" justify="start">
            <NavbarBrand className="gap-3 max-w-fit">
              <Link className="flex items-center gap-2 text-white hover:opacity-90 transition" href="/">
                <img src="/logo-white.png" alt="Logo REDILI" className="w-9 h-9" />
                <span className="font-semibold text-lg tracking-wide text-white">REDILI</span>
              </Link>
            </NavbarBrand>
          </NavbarContent>

          {/* Menú de navegación */}
          <NavbarContent className="hidden lg:flex gap-3 p-2 absolute left-1/2 transform -translate-x-1/2">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <NavbarItem key={item.href}>
                  <Link
                    className={clsx(
                      "w-32 flex items-center justify-center",
                      isActive
                        ? "bg-white text-[#007897] rounded-xl font-semibold py-2 shadow"
                        : "text-white hover:text-white/80",
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </NavbarItem>
              )
            })}
          </NavbarContent>

          {/* Interruptor de tema */}
          <NavbarContent className="hidden lg:flex" justify="end">
            <NavbarItem>
              <ThemeSwitch />
            </NavbarItem>
          </NavbarContent>
        </div>

        {/* Menú hamburguesa */}
        <NavbarContent className="flex lg:hidden pl-2" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle
            className="text-white ml-2"
            // Usamos el manejador de eventos personalizado
            onClick={handleMenuToggle}
            // Aseguramos que el estado visual refleje el estado real
          />
        </NavbarContent>
      </div>

      {/* Menú móvil */}
      <NavbarMenu className="bg-[rgba(0,123,157,0.7)] pt-6 pb-12 px-4">
        <Link className="flex justify-center mb-4 mt-5" href="/">
          <img src="/logo-white.png" alt="Logo REDILI" className="w-16 h-16" />
        </Link>
        <div className="flex flex-col items-center gap-5 text-white text-lg">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={index} className="w-full text-center">
              <Link
                className="!text-white hover:!text-white/80 transition-colors"
                href={item.href}
                onPress={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}
