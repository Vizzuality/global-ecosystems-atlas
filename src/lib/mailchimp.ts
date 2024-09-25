import mailchimp from "@mailchimp/mailchimp_marketing";

import { env } from "@/env.mjs";

mailchimp.setConfig({
  apiKey: env.MAILCHIMP_API_KEY,
  server: "us11",
});
export default mailchimp;
