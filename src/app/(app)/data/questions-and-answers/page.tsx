import { Metadata } from "next";

import { Faqs } from "@/containers/data/question-and-answers";

export const metadata: Metadata = {
  title: "Question and Answers | Global Ecosystems Atlas",
  description: "Question and Answers Global Ecosystems Atlas description",
};

export default async function QuestionandAnswersPage() {
  return (
    <>
      <Faqs />
    </>
  );
}
