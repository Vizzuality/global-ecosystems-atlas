import { MutationFunction, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { z } from "zod";

import API from "@/services/api";

/**
 ************************************************************
 ************************************************************
 * Contact
 * usePostContactMutation
 ************************************************************
 ************************************************************
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  agree: z.boolean().refine((value) => value === true, {
    message: "Please agree to the terms.",
  }),
});

export const postContact = async (data: z.infer<typeof contactFormSchema>) => {
  return API<z.infer<typeof contactFormSchema>>({
    url: `/contact`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data,
  });
};

export const postContactMutationOptions = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof postContact>>,
    TError,
    z.infer<typeof contactFormSchema>,
    TContext
  >,
): UseMutationOptions<
  Awaited<ReturnType<typeof postContact>>,
  TError,
  z.infer<typeof contactFormSchema>,
  TContext
> => {
  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postContact>>,
    z.infer<typeof contactFormSchema>
  > = (props) => postContact(props);

  return { mutationFn, ...options };
};

export const usePostContactMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof postContact>>,
    TError,
    z.infer<typeof contactFormSchema>,
    TContext
  >,
) => {
  const mutationOptions = postContactMutationOptions(options);

  return useMutation(mutationOptions);
};
