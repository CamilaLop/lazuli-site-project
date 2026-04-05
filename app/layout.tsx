import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lazuli | Espaço Psicoterapêutico",
  description: "Psicoterapia integrada para crianças, adolescentes, casais, famílias, TEA e adultos em geral.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
