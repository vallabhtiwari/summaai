"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Upload, FileText, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setUploading(false);
    setFile(null);
    alert("File uploaded successfully!");
  };

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
          <p className="mt-6 text-lg sm:text-xl md:text-2xl inline-flex items-center">
            Upload your PDF document and see the magic of AI
            <Sparkles className="ml-2 animate-pulse" />
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <div
            className={`border-2 border-dashed rounded-lg p-10 ${
              dragging
                ? "border-rose-500 bg-rose-50 dark:bg-gray-800"
                : "border-gray-300 dark:border-gray-700"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {file ? (
              <div className="flex flex-col items-center">
                <FileText size={64} className="text-rose-600 mb-4" />
                <p className="text-xl font-medium mb-2">{file.name}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
                <Button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="text-white bg-gradient-to-r from-rose-600 to-black px-8 py-4 text-xl flex items-center gap-2 transition-all duration-500 hover:from-black hover:to-rose-600 rounded-full"
                >
                  {uploading ? "Summarizing..." : "Summarize"}{" "}
                  <ArrowRight className="size-5" />
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Upload size={64} className="text-rose-600 mb-4" />
                <p className="text-xl font-medium mb-2">
                  Drag & Drop your PDF here
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-6">or</p>
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <span className="text-white bg-gradient-to-r from-rose-600 to-black h-9 px-8 py-4 text-xl flex items-center gap-2 transition-all duration-500 hover:from-black hover:to-rose-600 rounded-full">
                    Browse Files <ArrowRight className="size-5" />
                  </span>
                </label>
              </div>
            )}
          </div>

          <div className="mt-8 text-left">
            <h3 className="text-xl font-bold mb-4">Supported File Types</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>PDF documents (.pdf)</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
