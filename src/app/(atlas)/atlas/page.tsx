import { Metadata } from "next";

import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";
import TestPieParent from "@/containers/atlas/widgets/test-pie";
import TestRankingChart from "@/containers/atlas/widgets/test-ranking";

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
        <div className="aspect-square w-1/2">
          <TestPieParent />
        </div>
        <div>
          <TestRankingChart />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ab nulla
          laudantium numquam maiores, mollitia debitis, beatae dolor asperiores assumenda cum! Autem
          molestiae possimus obcaecati sapiente molestias tenetur nobis.
        </p>
      </AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
