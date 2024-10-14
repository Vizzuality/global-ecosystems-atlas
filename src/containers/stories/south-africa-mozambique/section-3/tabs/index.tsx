import { SAMTabsWidgets } from "@/containers/stories/south-africa-mozambique/section-3/tabs/widgets";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SAMTabs = () => {
  return (
    <>
      <Tabs defaultValue="ZAF_224">
        <TabsList>
          <TabsTrigger className="w-full px-20" value="ZAF_224">
            South africa
          </TabsTrigger>
          <TabsTrigger className="w-full px-20" value="MOZ_167">
            Mozambique
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ZAF_224">
          <SAMTabsWidgets location="ZAF_224" />
        </TabsContent>

        <TabsContent value="MOZ_167">
          <SAMTabsWidgets location="MOZ_167" />
        </TabsContent>
      </Tabs>
    </>
  );
};
