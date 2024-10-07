import { Grid } from "@/components/ui/grid";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container -mt-28">
      <Grid>
        <div className="col-span-5 pr-10 lg:col-start-2">
          <section className="flex min-h-dvh flex-col justify-center gap-4 py-24">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </section>
        </div>
        <div className="col-span-6">
          <div className="sticky top-0 flex h-dvh w-[50vw] items-center justify-center bg-lightblue-50 text-4xl">
            <Skeleton className="h-full w-full" />
          </div>
        </div>
      </Grid>
    </div>
  );
}
