import { Metadata } from "next";

import { ContactForm } from "@/containers/contact/form";
import ContactHero from "@/containers/contact/hero";

export const metadata: Metadata = {
  title: "Contact | Global Ecosystems Atlas",
  description: "Contact Global Ecosystems Atlas description",
};

export default function Contact() {
  return (
    <section className="flex grow flex-col py-14 xl:items-center xl:justify-center">
      <div className="container flex flex-col sm:items-center sm:justify-center">
        <div className="grid grid-cols-6 gap-8 lg:gap-28 xl:px-24">
          <div className="col-span-6 lg:col-span-3">
            <ContactHero />
          </div>
          <div className="col-span-6 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
