import { Grid } from "@/components/ui/grid";
import { Section } from "@/components/ui/section";

export default function HomeVideo() {
  return (
    <Section className="relative py-0 lg:py-0 2xl:py-0">
      <div className="container relative z-10">
        <Grid>
          <div className="col-span-12">
            <div className="aspect-video rounded-lg bg-neutral-200"></div>
          </div>
        </Grid>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 -z-0 h-1/3 w-full bg-navy-700" />
    </Section>
  );
}
