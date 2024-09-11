import { Metadata } from "next";

import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";
import TestHorizontalBar from "@/containers/atlas/widgets/test-horizontal-bar";
import TestNumber from "@/containers/atlas/widgets/test-number";
import TestPie from "@/containers/atlas/widgets/test-pie";
import TestRanking from "@/containers/atlas/widgets/test-ranking";

import { Grid } from "@/components/ui/grid";

export const metadata: Metadata = {
  title: "Atlas | Global Ecosystems Atlas",
  description: "Atlas | Global Ecosystems Atlas description",
};

export default function AtlasPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>Search</AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>
        <div className="space-y-20">
          <div className="aspect-square w-1/2">
            <TestPie />
          </div>
          <div>
            <TestRanking />
          </div>
          <div className="h-4">
            <TestHorizontalBar />
          </div>
          <Grid>
            <div className="col-span-4">
              <TestNumber />
            </div>
            <div className="col-span-4">
              <TestNumber />
            </div>
            <div className="col-span-4">
              <TestNumber />
            </div>
          </Grid>

          <div className="prose prose-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
              laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum!
              Autem molestiae possimus obcaecati sapiente molestias tenetur nobis.
            </p>
          </div>
        </div>
      </AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
