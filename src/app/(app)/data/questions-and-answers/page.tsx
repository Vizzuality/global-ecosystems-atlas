import { Metadata } from "next";

import { Faqs } from "@/containers/data/question-and-answers";

export const metadata: Metadata = {
  title: "Data: Question and Answers | Global Ecosystems Atlas",
  description:
    "Explore how ecosystems are mapped, learn more about our methodology and how to use the data, browse our data sources, and find answers to your questions.",
};

export default async function QuestionandAnswersPage() {
  return (
    <>
      <Faqs />
    </>
  );
}
