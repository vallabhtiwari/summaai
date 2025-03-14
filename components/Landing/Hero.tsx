import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  AlarmClockCheck,
  FileCheck,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import React from "react";

type cardContent = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

const CardIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="size-12 mx-auto mb-4 flex items-center justify-center">
      {React.isValidElement(icon)
        ? React.cloneElement(icon, {
            className: "text-rose-600 size-12",
          } as React.HTMLAttributes<HTMLElement>)
        : icon}
    </div>
  );
};

const cards: cardContent[] = [
  {
    title: "Accurate Summaries",
    icon: <FileCheck />,
    description: "Get precise and concise summaries of any PDF document.",
  },
  {
    title: "Time-Saving",
    icon: <AlarmClockCheck />,
    description:
      "Quickly understand lengthy documents without reading them fully.",
  },
  {
    title: "Easy to Use",
    icon: <ThumbsUp />,
    description: "Upload your PDF and receive a summary in seconds.",
  },
];

export const Hero = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Badge className="mb-4 bg-rose-100 dark:bg-gray-800 text-rose-600 flex items-center gap-2 px-4 py-2 sm:text-xl md:text-2xl rounded-full border border-rose-600">
              <Sparkles width={48} height={48} className="animate-pulse" />{" "}
              Powered by AI
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            AI-Powered PDF Summarizer
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl">
            Effortlessly summarize your PDF documents using cutting-edge AI
            technology. Save time, stay productive.
          </p>
        </div>
        <div className="w-full flex justify-center mt-10">
          <NavLink href="/trial">
            <Button className="text-white bg-gradient-to-r from-rose-600 to-black px-16 py-6 text-2xl flex items-center gap-2 transition-all duration-500 hover:from-black hover:to-rose-600 rounded-full">
              Try Summarry <ArrowRight className="size-6" />
            </Button>
          </NavLink>
        </div>
      </main>

      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Summarry?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="max-w-sm p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
              >
                <CardIcon icon={card.icon} />
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-4">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
