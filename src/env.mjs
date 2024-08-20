import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string(),
    NEXT_PUBLIC_API_URL: z.preprocess(
      // This makes Vercel deployments not fail if you don't set NEXT_PUBLIC_API_URL
      (str) => process.env.VERCEL_URL ?? str,
      // VERCEL_URL doesnt include `https` so it cant be validated as a URL
      process.env.VERCEL_URL ? z.string() : z.string().url().min(1),
    ),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_API_URL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_API_URL,
  },
});
