import { Montserrat, IBM_Plex_Serif } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-ibm-plex-serif",
});
