export default function ContactHero() {
  return (
    <div className="space-y-6 lg:space-y-16">
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
  );
}
