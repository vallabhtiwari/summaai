import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import SummaryCards from "./SummaryCards";
import { SummarySection } from "@/lib/types";

export default function SummaryContent({
  summarySections,
  count,
}: {
  summarySections: SummarySection[];
  count: number;
}) {
  return (
    <Card className="mt-8 min-h-112 border-none bg-rose-50/50 shadow-md">
      <CardContent className="relative p-6">
        <div className="absolute top-0 right-6 flex items-center gap-2  font-bold">
          <FileText className="w-5 h-5 text-rose-600" />
          <span className="text-gray-600">{count} Words</span>
        </div>
        <SummaryCards summarySections={summarySections} />
      </CardContent>
    </Card>
  );
}
