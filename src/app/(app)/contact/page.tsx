import { Metadata } from "next";

import { ContactForm } from "@/containers/contact/form";

export const metadata: Metadata = {
  title: "Contact | Global Ecosystems Atlas",
  description: "Contact Global Ecosystems Atlas description",
};

export default function Contact() {
  return (
    <section className="flex grow flex-col items-center justify-center py-14">
      <div className="container flex flex-col sm:items-center sm:justify-center">
        <div className="grid grid-cols-6 gap-8 lg:gap-28 xl:px-24">
          <div className="col-span-6 space-y-6 lg:col-span-3 lg:space-y-16">
            <h1 className="text-5xl font-semibold tracking-wide sm:text-7xl">Let&apos;s talk</h1>
            <div className="space-y-5 sm:space-y-8">
              <p className="text-xl sm:text-2xl">
                Don&apos;t hesitate to fill in the contact form or email{" "}
                <a className="underline" target="_blank" href="mailto:ecosystems.atlas@geosec.org">
                  ecosystems.atlas@geosec.org
                </a>
              </p>
              <p className="text-xl sm:text-2xl">We&rsquo;d love to hear from you.</p>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
