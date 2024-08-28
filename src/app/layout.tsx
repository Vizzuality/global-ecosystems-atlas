import "./globals.css";

import { ibmPlexSerif, montserrat } from "@/app/fonts";
import RootHead from "@/app/head";
import LayoutProviders from "@/app/layout-providers";

import { ScrollTop } from "@/containers/scroll-top";
import { Welcome } from "@/containers/welcome";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutProviders>
      <html lang="en">
        <RootHead />
        <ScrollTop />
        <body className={`${montserrat.variable} ${ibmPlexSerif.variable} font-sans`}>
          {children}

          <Welcome />
        </body>
      </html>
    </LayoutProviders>
  );
}
