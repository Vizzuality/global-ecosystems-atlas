import "./globals.css";
import { ibmPlexSerif, montserrat } from "@/app/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${ibmPlexSerif.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
