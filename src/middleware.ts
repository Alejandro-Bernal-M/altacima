import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';

export default createMiddleware({
  // Idiomas soportados
  locales: locales,
  
  // Idioma por defecto si no se detecta ninguno en la URL o el navegador
  defaultLocale: 'en'
});

export const config = {
  // Ojo con este matcher: le dice a Next.js qué rutas debe procesar el middleware
  matcher: [
    // Intercepta la raíz
    '/', 
    // Intercepta todas las rutas que comiencen con tus locales soportados
    '/(en|es)/:path*'
  ]
};