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
      src="https://arcg.is/fKSum0"
    />
  );
}
