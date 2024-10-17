import Link from "next/link";

import { FiArrowRight } from "react-icons/fi";

import { cn } from "@/lib/utils";

import { Grid } from "@/components/ui/grid";
import { H1 } from "@/components/ui/h1";
import { Section } from "@/components/ui/section";

const StoriesItem = (story: { title: string; comingSoon?: boolean }) => (
  <div
    className={cn({
      "group relative grow rounded-2xl bg-lightblue-100 transition-colors duration-500": true,
      "hover:bg-white": !story.comingSoon,
      "border border-dashed border-white/40 bg-white/10": story.comingSoon,
    })}
  >
    <div className="space-y-3 p-8">
      <h3
        className={cn({
          "text-xl font-semibold lg:text-2xl": true,
          "text-white/80": story.comingSoon,
        })}
      >
        {story.title}
      </h3>
    </div>

    {!story.comingSoon && (
      <div className="absolute bottom-8 right-8 h-16 w-16 rounded-full bg-white p-4">
        <FiArrowRight className="h-full w-full text-navy-700" />
      </div>
    )}
  </div>
);

export default function StoriesHero() {
  return (
    <Section hero className="min-h-0 bg-navy-700 lg:pb-56">
      <div className="container">
        <Grid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-7 xl:col-start-2">
            <div className="space-y-10 lg:space-y-16">
              <header className="space-y-2">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
                  Stories
                </h2>
                <H1 className="text-white">Explore the stories behind the data</H1>
              </header>
              <div className="space-y-8 text-white">
                <p className="text-xl">
                  Discover how ecosystem insights are shaping conservation, guiding decisions, and
                  driving change across the globe.
                </p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid className="pt-24">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <Grid>
              <div className="col-span-12 flex h-full min-h-60 flex-col md:col-span-6">
                <Link href="/stories/south-africa-mozambique" className="flex grow flex-col">
                  <StoriesItem title="South Africa & Mozambique" />
                </Link>
              </div>
              {/* <div className="col-span-12 flex h-full min-h-60 flex-col md:col-span-6">
                <Link href="/stories/maldives" className="flex grow flex-col">
                  <StoriesItem title="Maldives" />
                </Link>
              </div> */}
              <div className="col-span-12 flex h-full min-h-60 flex-col md:col-span-6">
                <StoriesItem title="Coming soon" comingSoon />
              </div>
              <div className="col-span-12 flex h-full min-h-60 flex-col md:col-span-6">
                <StoriesItem title="Coming soon" comingSoon />
              </div>
              <div className="col-span-12 flex h-full min-h-60 flex-col md:col-span-6">
                <StoriesItem title="Coming soon" comingSoon />
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
