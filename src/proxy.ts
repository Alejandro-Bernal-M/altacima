import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';

export default createMiddleware({
  // Idiomas soportados
  locales: locales,
  
  // Idioma por defecto
  defaultLocale: 'es' 
});

export const config = {
  matcher: [
    // Intercepta la raíz
    '/', 
    // Intercepta todas las rutas con locales
    '/(es|en)/:path*',
    // Evita procesar archivos estáticos o internas de Next
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};