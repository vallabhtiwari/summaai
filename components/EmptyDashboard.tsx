import { FileText } from "lucide-react";

export function EmptyDashboard() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <FileText className="size-24 text-gray-400 mb-3" />
      <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
        No Summaries Yet
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Get started by uploading your first PDF document. Our AI will help you
        create comprehensive summaries in seconds.
      </p>
    </div>
  );
}
