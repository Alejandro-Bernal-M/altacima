import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // Resolvemos el locale de forma segura
  let locale = await requestLocale;

  // Validación rápida
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'es'; // Fallback seguro en lugar de notFound() para evitar bucles durante el build
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});