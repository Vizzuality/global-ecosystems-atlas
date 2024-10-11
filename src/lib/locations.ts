import { useApiLocationsGet } from "@/types/generated/locations";

export const useLocationId = (id: string | null) => {
  const { data: locationsData } = useApiLocationsGet();
  return locationsData?.data?.find((l) => l.location_code === id);
};
