import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestión de Notas",
  description: "Plataforma de gestion de notas para Estudiantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-Anaheim antialiased bg-gray_secondary`}
      >
        {children}
      </body>
    </html>
  );
}
