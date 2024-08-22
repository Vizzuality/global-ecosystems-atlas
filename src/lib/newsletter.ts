import { MutationFunction, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { z } from "zod";

import { newsletterAction } from "@/actions/newsletter";

/**
 ************************************************************
 ************************************************************
 * Newsletter
 * usePostNewsletterMutation
 ************************************************************
 ************************************************************
 */
export const newsletterFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export const postNewsletter = async (data: z.infer<typeof newsletterFormSchema>) => {
  return newsletterAction(data);
};

export const postNewsletterMutationOptions = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof postNewsletter>>,
    TError,
    z.infer<typeof newsletterFormSchema>,
    TContext
  >,
): UseMutationOptions<
  Awaited<ReturnType<typeof postNewsletter>>,
  TError,
  z.infer<typeof newsletterFormSchema>,
  TContext
> => {
  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postNewsletter>>,
    z.infer<typeof newsletterFormSchema>
  > = (props) => postNewsletter(props);

  return { mutationFn, ...options };
};

export const usePostNewsletterMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof postNewsletter>>,
    TError,
    z.infer<typeof newsletterFormSchema>,
    TContext
  >,
) => {
  const mutationOptions = postNewsletterMutationOptions(options);

  return useMutation(mutationOptions);
};
