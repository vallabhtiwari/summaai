import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { UploadFile } from "@/components/upload/UploadFile";

export default function UploadPage() {
  // Server-side function to handle file upload

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Badge className="mb-4 bg-rose-100 dark:bg-gray-800 text-rose-600 flex items-center gap-2 px-4 py-2 sm:text-xl md:text-2xl rounded-full border border-rose-600">
              <Sparkles className="animate-pulse" /> Powered by AI
            </Badge>
          </div>
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
