import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

export const EfgsLegend = ({ location }: { location?: string }) => {
  const { data } = useApiLocationsLocationWidgetsWidgetIdGet(location ?? "GLOB", "extent_efgs");

  return data?.data
    .toSorted((a, b) => {
      return a.label.localeCompare(b.label);
    })
    .map((d) => {
      return (
        <div key={d.id} className="flex items-center gap-2">
          <div
            className="h-2 w-2 shrink-0 rounded-full border border-navy-700"
            style={{
              backgroundColor: d.color ?? "transparent",
            }}
          ></div>
          <span className="text-xs font-medium">{d.label}</span>
        </div>
      );
    });
};
