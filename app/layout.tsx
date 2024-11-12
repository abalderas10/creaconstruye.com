import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClientLayout } from './client-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CreaConstruye - Plataforma de Creatividad y Construcción',
  description: 'Plataforma integral para el desarrollo, creatividad y construcción',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}