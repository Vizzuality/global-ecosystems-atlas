import { useEcosystems } from "@/lib/taxonomy";

export const EcosystemsTrigger = () => {
  return <div>Ecosystems</div>;
};

export const EcosystemsContent = () => {
  const ecosystemsData = useEcosystems();

  return (
    <ul>{ecosystemsData?.map((ecosystem) => <li key={ecosystem.id}>{ecosystem.name}</li>)}</ul>
  );
};
