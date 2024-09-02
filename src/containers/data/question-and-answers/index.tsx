"use client";

import { useState } from "react";

import Markdown from "react-markdown";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { FAQS } from "@/lib/faqs";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Grid } from "@/components/ui/grid";
import { Section } from "@/components/ui/section";

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible asChild onOpenChange={setOpen}>
      <li className="space-y-4 rounded-lg border border-navy-100 p-6">
        <CollapsibleTrigger className="flex items-start justify-between gap-6 text-left">
          <h2 className="text-xl font-medium">{question}</h2>
          {!open && <FiChevronDown className="relative top-1 h-6 w-6 shrink-0 text-navy-700" />}
          {open && <FiChevronUp className="relative top-1 h-6 w-6 shrink-0 text-navy-700" />}
        </CollapsibleTrigger>

        <CollapsibleContent className="prose">
          <Markdown>{answer}</Markdown>
        </CollapsibleContent>
      </li>
    </Collapsible>
  );
};

export const Faqs = () => {
  return (
    <Section>
      <div className="container">
        <Grid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <ul className="space-y-6">
              {FAQS.map((faq, index) => (
                <FaqItem key={index} {...faq} />
              ))}
            </ul>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
