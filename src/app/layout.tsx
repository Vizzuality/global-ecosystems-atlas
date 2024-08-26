import "./globals.css";

import { ibmPlexSerif, montserrat } from "@/app/fonts";
import RootHead from "@/app/head";
import LayoutProviders from "@/app/layout-providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutProviders>
      <html lang="en">
        <RootHead />
        <body className={`${montserrat.variable} ${ibmPlexSerif.variable} font-sans`}>
          {children}
        </body>
      </html>
    </LayoutProviders>
  );
}
