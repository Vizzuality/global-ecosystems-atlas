import { H1 } from "@/components/ui/h1";

export default function ContactHero() {
  return (
    <div className="space-y-6 lg:space-y-16">
      <H1>Let&apos;s talk</H1>
      <div className="space-y-5 sm:space-y-8">
        <p className="text-xl">
          Don&apos;t hesitate to fill in the contact form or email{" "}
          <a className="underline" target="_blank" href="mailto:ecosystems.atlas@geosec.org">
            ecosystems.atlas@geosec.org
          </a>
        </p>
        <p className="text-xl">We&rsquo;d love to hear from you.</p>
      </div>
    </div>
  );
}
