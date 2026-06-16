import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  // 1. Validar que exista y que sea uno de los soportados
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    // 2. Al usar 'as string' o asegurar la validación previa, 
    // TypeScript ya sabe que no puede ser undefined.
    locale: locale as string, 
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});