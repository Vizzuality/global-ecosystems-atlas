import { Metadata } from "next";

import ContactHero from "@/containers/contact/hero";

export const metadata: Metadata = {
  title: "Contact | Global Ecosystems Atlas",
  description:
    "Get in touch with the Global Ecosystems Atlas team. We're here to answer your questions, provide support, and collaborate on ecosystem research and conservation.",
};

export default function Contact() {
  return (
    <>
      <ContactHero />
    </>
  );
}
