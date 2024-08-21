import { Metadata } from "next";

import ContactHero from "@/containers/contact/hero";

export const metadata: Metadata = {
  title: "Contact | Global Ecosystems Atlas",
  description: "Contact Global Ecosystems Atlas description",
};

export default function Contact() {
  return (
    <>
      <ContactHero />
    </>
  );
}
