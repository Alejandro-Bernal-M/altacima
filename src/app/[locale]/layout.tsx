import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, Locale } from "@/i18n/request"; // Asegúrate de ajustar esta ruta si tu archivo está en otro lado
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Actualizamos los metadatos con el nombre de tu aplicación
export const metadata: Metadata = {
  title: "Alta Cima",
  description: "Alta Cima: Turismo de Aventura, Eventos Corporativos y Trabajo Industrial en Altura. Experiencias únicas en Colombia.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Resolvemos la promesa de los params para extraer el locale de la URL
  const { locale } = await params;

  // Validamos que el idioma actual esté dentro de los soportados ('en' o 'es')
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Obtenemos de forma asíncrona los mensajes (JSON) correspondientes al idioma
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {/* Proveedor que comparte los textos con tus Client Components (como la Navbar) */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}