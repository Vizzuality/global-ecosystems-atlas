import { ContactForm } from "@/containers/contact/form";

import { Grid } from "@/components/ui/grid";
import { H1 } from "@/components/ui/h1";
import { Section } from "@/components/ui/section";

export default function ContactHero() {
  return (
    <Section hero className="grow">
      <div className="container">
        <Grid>
          <div className="col-span-12 lg:col-span-5 lg:col-start-2">
            <div className="space-y-6 lg:space-y-16">
              <H1>Let&apos;s talk</H1>
              <div className="space-y-5 sm:space-y-8">
                <p className="text-xl">
                  Don&apos;t hesitate to fill in the contact form or email{" "}
                  <a
                    className="underline"
                    target="_blank"
                    href="mailto:ecosystems.atlas@geosec.org"
                  >
                    ecosystems.atlas@geosec.org
                  </a>
                </p>
                <p className="text-xl">We&rsquo;d love to hear from you.</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-8">
            <ContactForm />
          </div>
        </Grid>
      </div>
    </Section>
  );
}
