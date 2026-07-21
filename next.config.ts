import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Al dejarlo vacío (), next-intl busca automáticamente en src/i18n/request.ts o i18n/request.ts
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Configuración estándar
};

export default withNextIntl(nextConfig);