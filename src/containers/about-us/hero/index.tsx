import { H1 } from "@/components/ui/h1";

export default function AboutUsHero() {
  return (
    <section className="-mt-28 bg-navy-700 py-56">
      <div className="container">
        <div className="grid grid-cols-6 gap-8 lg:gap-28 xl:px-24">
          <div className="col-span-6 lg:col-span-5">
            <div className="space-y-6 lg:space-y-16">
              <H1 className="text-white">What is the Global Ecosystems Atlas?</H1>
              <div className="space-y-5 text-white sm:space-y-8">
                <p className="text-xl">
                  Convened by the Group on Earth Observations (GEO), the Global Ecosystems Atlas is
                  a <strong>cross-sector collaborative initiative</strong> to map and monitor the
                  world&apos;s ecosystems, providing dynamic visualisations of natural environments.
                </p>
                <p className="text-xl">
                  The Atlas will <strong>empower decision-makers</strong> with insights for
                  sustainable development and a deeper understanding of Earth&apos;s ecological
                  diversity. It will provide everything you need to know about the distribution,
                  change, condition and risks of ecosystems worldwide.
                </p>
                <p className="text-xl">
                  The Atlas will combine existing <strong>high-quality ecosystem maps</strong> and
                  new ecosystem maps to fill data gaps. By enabling collaboration across sectors and
                  countries, the Atlas will generate knowledge and insights on ecosystems, help
                  improve and scale existing initiatives, and enhance consistency and coherence in
                  stock-taking, reporting, and decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
