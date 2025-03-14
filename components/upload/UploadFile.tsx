"use client";

import { FileText, ArrowRight, Upload } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUploadThing } from "@/lib/uploadthing";
import { uploadPdfSchema } from "@/lib/types";
import { toast } from "sonner";

export const UploadFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const safeFile = uploadPdfSchema.safeParse({ file });
      if (!safeFile.success) {
        toast.error("Invalid file type", {
          description: "Please upload a PDF file",
          position: "top-right",
          duration: 4000,
          cancel: {
            label: "X",
            onClick: () => setFile(null),
          },
        });
        return;
      }
      setFile(file);
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
      const file = e.dataTransfer.files[0];
      const safeFile = uploadPdfSchema.safeParse({ file });
      if (!safeFile.success) {
        toast.error("Invalid file type", {
          description: "Please upload a PDF file",
          position: "top-right",
          duration: 4000,
          cancel: {
            label: "X",
            onClick: () => setFile(null),
          },
        });
        return;
      }
      setFile(file);
    }
  };

  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: (obj) => {
      console.log("Upload complete:", obj);
      setUploading(false);
      setFile(null);
      toast.success("Upload complete", {
        position: "top-right",
        duration: 4000,
        cancel: {
          label: "X",
          onClick: () => console.log("Upload complete!"),
        },
      });
    },
    onUploadError: (obj) => {
      console.error("Upload failed:", obj);
      setUploading(false);
      setFile(null);
      toast.error("Upload failed", {
        description: "Please try again later",
        position: "top-right",
        duration: 4000,
        cancel: {
          label: "X",
          onClick: () => console.log("Upload failed!"),
        },
      });
    },
    onUploadBegin: (obj) => {
      setUploading(true);
      console.log("Upload has begun", obj);
    },
  });

  return (
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
              onClick={() => startUpload([file])}
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
                accept="application/pdf"
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
  );
};
