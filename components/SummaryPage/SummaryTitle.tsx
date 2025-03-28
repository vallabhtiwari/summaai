"use client";
import { Download, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SummaryTitle({
  title,
  fileName,
  original,
  summary,
}: {
  title: string;
  fileName: string;
  original: string;
  summary: string;
}) {
  const downloadSummary = () => {
    const blob = new Blob([summary], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}-summary.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="flex flex-col">
      <h2 className="text-4xl bg-clip-text from-rose-500 to-orange-600">
        {title}
      </h2>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-bold flex items-center gap-2">
          <FileText className="w-5 h-5 text-rose-600" /> {fileName}
        </p>

        <div className="flex gap-8 mt-4">
          <Link
            href={original}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
          >
            <ExternalLink className="w-5 h-5 text-rose-600" /> View Original
          </Link>

          <Button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-400 hover:bg-rose-500 text-white shadow-md transition"
            onClick={downloadSummary}
          >
            <Download className="w-5 h-5" /> Download Summary
          </Button>
        </div>
      </div>
    </section>
  );
}
