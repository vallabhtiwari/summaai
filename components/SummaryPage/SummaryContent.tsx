import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import SummaryCards from "./SummaryCards";

export default function SummaryContent({
  summary,
  count,
}: {
  summary: string;
  count: number;
}) {
  return (
    <Card className="mt-8 min-h-96 border-none bg-rose-50/50 shadow-md">
      <CardContent className="relative p-6">
        <div className="absolute top-0 right-6 flex items-center gap-2  font-bold">
          <FileText className="w-5 h-5 text-rose-600" />
          <span className="text-gray-600">{count} Words</span>
        </div>
        <SummaryCards summary={summary} />
      </CardContent>
    </Card>
  );
}
