import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: "Metlicz Imóveis | Litoral Norte e SP",
  description: "Sistema de gestão imobiliária com IA - Metlicz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cormorant.variable}>
      <body className="font-serif antialiased">
        {children}
      </body>
    </html>
  );
}