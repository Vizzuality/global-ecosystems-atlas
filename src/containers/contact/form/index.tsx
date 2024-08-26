"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { contactFormSchema, usePostContactMutation } from "@/lib/contact";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
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
  const postContactMutation = usePostContactMutation<Error, unknown>();

  // 1. Define your form.
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      agree: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setState({ submitting: true, submitted: false, error: null, success: false });
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    postContactMutation.mutate(values, {
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
    <>
      {state.success && (
        <div className="space-y-11 duration-500 animate-in fade-in-0">
          <header className="space-y-1">
            <h3 className="text-base font-bold">Thank you!</h3>
            <p>Your submission has been received!</p>
          </header>
          <Image src="/success.svg" width={400} height={400} alt="Success" />
        </div>
      )}

      {!state.success && (
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

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your message" rows={6} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agree"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>I agree with the Global Ecosystems Atlas Privacy Policy.</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <div className="pt-8">
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

              {!state.submitting && state.submitted && state.error && (
                <div className="rounded-sm border border-red-500 p-4">
                  <p className="text-red-500">Something went wrong. Please try again.</p>
                </div>
              )}
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
