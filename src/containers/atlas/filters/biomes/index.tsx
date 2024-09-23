import { useBiomes } from "@/lib/taxonomy";

export const BiomesTrigger = () => {
  return <div>Biomes</div>;
};

export const BiomesContent = () => {
  const biomesData = useBiomes();

  return <ul>{biomesData?.map((biome) => <li key={biome.id}>{biome.name}</li>)}</ul>;
};
