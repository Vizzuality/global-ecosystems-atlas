"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { newsletterFormSchema, usePostNewsletterMutation } from "@/lib/newsletter";

import { Button } from "@/components/ui/button";
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
    <div className="space-y-10 p-4">
      <header className="space-y-2 text-center">
        <h2 className="text-4xl font-semibold">Stay tuned</h2>
        <p className="text-xl">
          By signing up, you are making the Global Ecosystems Atlas a reality.
        </p>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

          <div className="pt-8">
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
    </div>
  );
}
