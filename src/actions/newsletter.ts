"use server";

import { z } from "zod";

import mailchimp from "@/lib/mailchimp";
import { newsletterFormSchema } from "@/lib/newsletter";

export async function newsletterAction(data: z.infer<typeof newsletterFormSchema>) {
  try {
    await mailchimp.lists.addListMember("8bfbd7c15b", {
      status: "subscribed",
      email_address: data.email,
      tags: ["newsletter"],
      merge_fields: {
        FNAME: data.name,
      },
    });

    return {
      success: true,
      error: false,
      errors: [],
    };
  } catch (err) {
    if (err instanceof Error) {
      return {
        success: false,
        error: true,
        errors: [err.message],
      };
    }
    return {
      success: false,
      error: true,
      errors: ["Error subscribing to newsletter"],
    };
  }
}
