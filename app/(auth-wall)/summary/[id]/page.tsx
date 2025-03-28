import {
  SummaryHeader,
  SummaryTitle,
  SummaryContent,
} from "@/components/SummaryPage";
import { getSummaryById } from "@/app/actions/pdfSummarryAction";
import { numberOfWords, timeToRead } from "@/lib/utils";
import { notFound } from "next/navigation";
import { parseSummary } from "@/lib/summary";

export default async function SummaryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const summary = await getSummaryById(id);
  if (!summary) {
    notFound();
  }
  const summaryData = { ...summary, ...parseSummary(summary.summaryText) };
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 pt-16 ">
        <SummaryHeader
          createdAt={summary.createdAt.toDateString()}
          time={timeToRead(summaryData.summaryText)}
        />
        <SummaryTitle
          fileName={summary.fileName}
          original={summary.originalFileUrl}
          summary={summaryData.summaryText}
          title={summaryData.mainHeading}
        />
        <SummaryContent
          summarySections={summaryData.sections}
          count={numberOfWords(summaryData.summaryText)}
        />
      </div>
    </div>
  );
}
