import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    MAILCHIMP_API_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_MAPBOX_TOKEN: z.string(),
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string(),
    NEXT_PUBLIC_API_URL: z.string().url(),
  },
  runtimeEnv: {
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
