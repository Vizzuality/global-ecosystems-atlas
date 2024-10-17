import { WidgetLocationExtent } from "@/containers/stories/south-africa-mozambique/section-3/tabs/widgets/biomes_extent";
import { WidgetLocationStatus } from "@/containers/stories/south-africa-mozambique/section-3/tabs/widgets/current_status";
import { WidgetLocationProtection } from "@/containers/stories/south-africa-mozambique/section-3/tabs/widgets/protection";

import { Grid } from "@/components/ui/grid";

export const SAMTabsWidgets = ({ location }: { location: string }) => {
  return (
    <div className="pt-12">
      <Grid>
        <div className="col-span-12 flex grow flex-col lg:col-span-4">
          <WidgetLocationStatus location={location} />
        </div>
        <div className="col-span-12 flex grow flex-col lg:col-span-4">
          <WidgetLocationExtent location={location} />
        </div>
        <div className="col-span-12 flex grow flex-col lg:col-span-4">
          <WidgetLocationProtection location={location} />
        </div>
      </Grid>
    </div>
  );
};
