import { Pizza } from "lucide-react";
import { SummaryContent } from "@/components/SummaryPage";
import { demoSummary } from "@/lib/summary";

export const Demo = () => {
  return (
    <div className="pt-32 pb-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-3xl font-bold uppercase">Demo</h2>
          <Pizza className="size-12 text-rose-600 animate-spin-slow" />
        </div>
        <h3 className="text-3xl font-bold mb-8">
          Watch how it converts{" "}
          <span className="text-rose-600">Blockchain.pdf</span> into a beautiful
          summary
        </h3>
      </div>

      <div className="container mx-auto px-4 pt-16 ">
        <SummaryContent summarySections={demoSummary.sections} count={100} />
      </div>
    </div>
  );
};
