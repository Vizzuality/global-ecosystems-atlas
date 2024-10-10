import { MutationFunction, useMutation, UseMutationOptions } from "@tanstack/react-query";

import {
  InteractivityResponse,
  PointCustomTilerPointGetParams,
} from "@/types/generated/strapi.schemas";

import API from "@/services/api";

export const getPoint = async (props: PointCustomTilerPointGetParams) => {
  const { lat, lon, asset } = props;

  return API<InteractivityResponse>({
    method: "GET",
    url: `/custom/tiler/point`,
    params: {
      lat,
      lon,
      asset,
    },
  });
};

export const getPointMutationOptions = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof getPoint>>,
    TError,
    PointCustomTilerPointGetParams,
    TContext
  >,
): UseMutationOptions<
  Awaited<ReturnType<typeof getPoint>>,
  TError,
  PointCustomTilerPointGetParams,
  TContext
> => {
  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof getPoint>>,
    PointCustomTilerPointGetParams
  > = (props) => getPoint(props);

  return { mutationFn, ...options };
};

export const useGetMutationPoint = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof getPoint>>,
    TError,
    PointCustomTilerPointGetParams,
    TContext
  >,
) => {
  const mutationOptions = getPointMutationOptions(options);

  return useMutation(mutationOptions);
};
