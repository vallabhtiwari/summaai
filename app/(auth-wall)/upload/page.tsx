import { UploadFile } from "@/components/upload/UploadFile";
import { PoweredByAIBadge } from "@/components/PoweredByAIBadge";
import { Sparkles } from "lucide-react";

export default function UploadPage() {
  // Server-side function to handle file upload

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <PoweredByAIBadge />
          <h1 className="leading-tight">Upload Your PDF Document</h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl inline-flex items-center capitalize">
            Upload your PDF document and see the magic of AI
            <Sparkles className="ml-2 animate-pulse" />
          </p>
        </div>

        <UploadFile />
      </main>
    </div>
  );
}
