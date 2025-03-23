import {
  SummaryHeader,
  SummaryTitle,
  SummaryContent,
} from "@/components/SummaryPage";
import { getSummary } from "@/lib/summary";
import { numberOfWords, timeToRead } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function SummaryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const summary = await getSummary(id);
  if (!summary) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 pt-16 ">
        <SummaryHeader
          createdAt={summary.createdAt}
          time={timeToRead(summary.summary)}
        />
        <SummaryTitle
          fileName={summary.fileName}
          original={summary.original}
          summary={summary.summary}
          title={summary.title}
        />
        <SummaryContent
          summary={summary.summary}
          count={numberOfWords(summary.summary)}
        />
      </div>
    </div>
  );
}
