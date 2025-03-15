import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export const PoweredByAIBadge = () => {
  return (
    <div className="flex justify-center">
      <Badge className="mb-4 bg-rose-100 dark:bg-gray-800 text-rose-600 hover:shadow-[0_0_15px_rgba(225,29,72,0.5)] transition-shadow duration-300 flex items-center gap-2 px-4 py-2 sm:text-xl md:text-2xl rounded-full border border-rose-600">
        <Sparkles width={48} height={48} className="animate-pulse" /> Powered by
        AI
      </Badge>
    </div>
  );
};
