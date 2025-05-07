import { Link } from "@heroui/link"
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, } from "@heroui/navbar"
import { link as linkStyles } from "@heroui/theme"
import clsx from "clsx"

import { siteConfig } from "@/config/site"
import { ThemeSwitch } from "@/components/theme-switch"

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* Contenedor para el logo "REDILI" alineado a la izquierda */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
            <img
              src="/logo.png"
              alt="Logo REDILI"
              className="block dark:hidden"
              style={{ width: "36px", height: "36px" }}
            />
            <img
              src="/logo-dark.png"
              alt="Logo REDILI"
              className="hidden dark:block"
              style={{ width: "36px", height: "36px" }}
            />
            <p className="font-bold text-inherit">REDILI</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Contenedor para los elementos de navegación centrados */}
      <NavbarContent className="hidden max-lgplus:hidden lg:flex gap-4 justify-center flex-grow">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Contenedor para el interruptor de tema alineado a la derecha */}
      <NavbarContent className="hidden lg:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Contenedor para el menú móvil */}
      <NavbarContent className="flex lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Menú móvil */}
      <NavbarMenu>
        {/* Logo centrado en el menú móvil */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 block dark:hidden" />
          <img src="/logo-dark.png" alt="Logo" className="w-16 h-16 hidden dark:block" />
        </div>

        {/* Enlaces de navegación */}
        <div className="mx-auto flex flex-col items-center gap-6 text-xl">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="w-full text-center">
              <Link
                color="foreground"
                href={item.href}
                size="lg"
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
