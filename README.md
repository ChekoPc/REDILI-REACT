# REDILI

Repositorio Digital de Lenguas Indígenas

## Tecnologías utilizadas - Vite & HeroUI

- [Vite](https://vitejs.dev/guide/)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## Cómo utilizar

Para clonar el proyecto, ejecute el siguiente comando:

- Con SSH:
```bash
git clone git@github.com:sg-cheko/REDILI.git
```

- Con HTTPS:
```bash
git clone https://github.com/sg-cheko/REDILI.git
```
- Con CLI:
```bash
gh repo clone sg-cheko/REDILI
```

### Instalar dependencias

Puedes usar uno de ellos `npm`, `yarn`, `pnpm`, `bun`, Ejemplo usando `npm`:

```bash
npm install
```

### Run the development server
Puedes usar uno de ellos `npm`, `yarn`, `pnpm`, `bun`, Ejemplo usando `npm`:

- Ejecutar proyecto con npm:
```bash
npm run dev
```
- Ejecutar proyecto con npm con permisos de acceso:
```bash
npm run dev -- --host
```

### Configurar pnpm (opcional)

Si está utilizando `pnpm`, debe agregar el siguiente código a su archivo `.npmrc`:

```bash
public-hoist-pattern[]=*@heroui/*
```

Después de modificar el archivo `.npmrc`, debe ejecutar `pnpm install` nuevamente para asegurarse de que las dependencias se instalen correctamente.

## Licencia

Con licencia bajo la [licencia MIT](https://github.com/frontio-ai/vite-template/blob/main/LICENSE).
