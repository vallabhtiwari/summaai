"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SummarySection } from "@/lib/types";

export default function SummaryCards({
  summarySections,
}: {
  summarySections: SummarySection[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSection = () => {
    setCurrentIndex((prev) => (prev + 1) % summarySections.length);
  };

  const prevSection = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + summarySections.length) % summarySections.length
    );
  };

  return (
    <Card className="min-h-112 p-4 max-w-xl mx-auto bg-white border-none flex flex-col shadow-lg">
      <CardContent className="flex-1 flex flex-col justify-between">
        <h1 className="text-2xl font-bold">
          {summarySections[currentIndex].subheading}
        </h1>
        {summarySections[currentIndex].points.some(
          (point) => point.trim() !== ""
        ) && (
          <ul className="list-disc pl-5">
            {summarySections[currentIndex].points.map(
              (point, idx) =>
                point.trim() !== "" && (
                  <li key={idx} className="text-gray-700">
                    {point}
                  </li>
                )
            )}
          </ul>
        )}

        {summarySections.length > 1 && (
          <div className="flex justify-between mt-4">
            <button
              onClick={prevSection}
              className="text-rose-500 rounded-full p-2 bg-rose-200 hover:bg-rose-300 transition"
            >
              <ChevronLeft size={32} />
            </button>
            <div className="flex items-center gap-1">
              {summarySections.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentIndex ? "bg-rose-500" : "bg-gray-300"
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
