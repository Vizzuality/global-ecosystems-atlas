import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories: Maldives | Global Ecosystems Atlas",
  description: "Stories: Maldives description",
};

export default async function StoriesMaldivesPage() {
  return (
    <iframe
      className="h-[calc(100vh_-_theme(space.28))] w-full grow"
      height="100%"
      src="https://storymaps.arcgis.com/collections/df3394a431bd4d248cffb1f6818378a1?item=2"
    />
  );
}
