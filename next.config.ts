import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// 1. Inicializamos el plugin apuntando a tu archivo de configuración de peticiones
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /* Tus opciones de configuración existentes */
  reactCompiler: true,
};

// 2. Envolvemos la configuración con el plugin de next-intl
export default withNextIntl(nextConfig);