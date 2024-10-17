import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

export default function HomeWhy() {
  return (
    <Section className="bg-navy-700">
      <div className="container">
        <Grid>
          <div className="col-span-12 lg:col-span-4 lg:col-start-2">
            <H2 className="text-white">Why do we need the Global Ecosystems Atlas?</H2>
          </div>
          <div className="col-span-12 space-y-6 lg:col-span-5 lg:col-start-7">
            <p className="text-xl text-navy-100 lg:text-2xl">
              There is significant momentum worldwide for new systems to help address existential
              threats from climate change, biodiversity loss, and land degradation.
            </p>
            <p className="text-xl text-navy-100 lg:text-2xl">
              <strong>
                <i>
                  Understanding the world&apos;s ecosystems is an essential part of driving
                  effective action to address these challenges.
                </i>
              </strong>{" "}
              But we lack fundamental knowledge of the majority of ecosystems at the global scale.
            </p>
            <p className="text-xl text-navy-100 lg:text-2xl">
              The Global Ecosystems Atlas will fill this gap by combining existing high-quality
              ecosystem maps with new maps created using the latest Earth observation technology,
              artificial intelligence, field data, and local expertise.
            </p>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
