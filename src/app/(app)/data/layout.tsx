import { Grid } from "@/components/ui/grid";
import { H1 } from "@/components/ui/h1";
import { Section } from "@/components/ui/section";

export default function DataLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Section hero className="min-h-0 bg-navy-700 lg:pb-56">
        <div className="container">
          <Grid>
            <div className="col-span-12 lg:col-span-6 lg:col-start-2">
              <div className="space-y-10 lg:space-y-16">
                <H1 className="text-white">A tool to support environmental initiatives</H1>
                <div className="space-y-8 text-white">
                  <p className="text-xl">
                    This is an intro copy of the section, let&apos;s come up with some content
                    sequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Section>
      {children}
    </>
  );
}
