"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SummaryCards({ summary }: { summary: string }) {
  const sections = summary
    .split("#")
    .map((s) => s.trim())
    .filter(Boolean);

  const [currentSection, setCurrentSection] = useState(0);
  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <Card className="min-h-96 p-4 max-w-xl mx-auto bg-white border-none flex flex-col shadow-lg">
      <CardContent className="flex-1 flex flex-col justify-between">
        <h1 className="text-2xl font-bold mb-4">{sections[currentSection]}</h1>

        {sections.length > 1 && (
          <div className="flex justify-between mt-4">
            <button
              onClick={prevSection}
              className="text-rose-500 rounded-full p-2 bg-rose-200 hover:bg-rose-300 transition"
            >
              <ChevronLeft size={32} />
            </button>
            <div className="flex items-center gap-1">
              {sections.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSection ? "bg-rose-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSection}
              className="text-rose-500 rounded-full p-2 bg-rose-200 hover:bg-rose-300 transition"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
