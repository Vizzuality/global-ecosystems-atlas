"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { newsletterFormSchema, usePostNewsletterMutation } from "@/lib/newsletter";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogTitle } from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [state, setState] = useState<{
    submitting: boolean;
    submitted: boolean;
    success: boolean;
    error: Error | null;
  }>({
    submitting: false,
    submitted: false,
    success: false,
    error: null,
  });
  const postNewsletterMutation = usePostNewsletterMutation<Error, unknown>();

  // 1. Define your form.
  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      agree: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof newsletterFormSchema>) {
    setState({ submitting: true, submitted: false, error: null, success: false });
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    postNewsletterMutation.mutate(values, {
      onSuccess: () => {
        // Do something on success.
        setState({ submitting: false, submitted: true, success: true, error: null });
      },
      onError: (error) => {
        // Do something on error.
        setState({ submitting: false, submitted: true, success: false, error });
      },
    });
  }

  return (
    <div className="space-y-5 px-2 2xl:space-y-10 2xl:p-4">
      {state.success && (
        <div className="space-y-11 duration-500 animate-in fade-in-0">
          <header className="space-y-1">
            <h3 className="text-base font-bold">Thank you!</h3>
            <p>We’re excited to share this journey with you!</p>
          </header>
          <Image src="/success.svg" width={400} height={400} alt="Success" />
        </div>
      )}

      {!state.success && (
        <>
          <header className="space-y-2 text-center">
            <DialogTitle className="text-3xl font-semibold 2xl:text-4xl">Stay tuned</DialogTitle>
            <p className="text-lg 2xl:text-xl">
              By signing up, you are making the Global Ecosystems Atlas a reality.
            </p>
          </header>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 2xl:space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-2">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel className="block leading-tight">
                        I agree with the Global Ecosystems Atlas&apos;{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="underline"
                        >
                          Privacy Policy
                        </a>
                        .
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <div className="pt-6 2xl:pt-8">
                {!state.success && (
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={state.submitting}
                  >
                    {state.submitting && "Submitting..."}
                    {!state.submitting && "Submit"}
                  </Button>
                )}

                {!state.submitting && state.submitted && state.success && (
                  <div className="rounded-sm border border-green-600 p-4">
                    <p className="text-green-600">Thank you for your message!</p>
                  </div>
                )}

                {!state.submitting && state.submitted && state.error && (
                  <div className="rounded-sm border border-red-500 p-4">
                    <p className="text-red-500">Something went wrong. Please try again.</p>
                  </div>
                )}
              </div>
            </form>
          </Form>
        </>
      )}
    </div>
  );
}
