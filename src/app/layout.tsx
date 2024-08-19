import "./globals.css";

import { ibmPlexSerif, montserrat } from "@/app/fonts";
import LayoutProviders from "@/app/layout-providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutProviders>
      <html lang="en">
        <body className={`${montserrat.variable} ${ibmPlexSerif.variable} font-sans`}>
          {children}
        </body>
      </html>
    </LayoutProviders>
  );
}
