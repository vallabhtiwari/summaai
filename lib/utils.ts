import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";
import {
  uploadPdfSchema,
  ToastType,
  ToastOptions,
  FileValidationParams,
  UploadCompleteParams,
  UploadBeginParams,
} from "@/lib/types";
import { getSummary } from "@/app/actions/parse-summarize";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const showToast = (
  type: ToastType,
  title: string,
  options?: ToastOptions
) => {
  const defaultOptions = {
    position: "top-right" as const,
    duration: 4000,
    cancel: {
      label: "X",
      onClick: options?.onClick || (() => console.log("Close toast")),
    },
  };

  const toastOptions = {
    ...defaultOptions,
    description: options?.description,
    duration: options?.duration || defaultOptions.duration,
  };

  switch (type) {
    case "success":
      toast.success(title, toastOptions);
      break;
    case "error":
      toast.error(title, toastOptions);
      break;
    case "warning":
      toast.warning(title, toastOptions);
      break;
    default:
      toast.info(title, toastOptions);
  }
};

// File validation function with setter
export const validatePdfFile = ({
  file,
  setFile,
}: FileValidationParams): boolean => {
  const safeFile = uploadPdfSchema.safeParse({ file });
  if (!safeFile.success) {
    showToast("error", "Invalid file type", {
      description: "Please upload a PDF file",
    });
    setFile(null);
    return false;
  }
  setFile(file);
  return true;
};

// Upload handler functions for useUploadThing

export const handleUploadComplete = async ({
  obj,
  setUploading,
  setFile,
}: UploadCompleteParams) => {
  console.log("In handleUploadComplete");
  if (obj && obj.length > 0) {
    const fileData = obj[0];
    const fileUrl = fileData.ufsUrl;

    try {
      const summary = await getSummary(fileUrl);
      if (!summary.success) throw new Error(summary.message);

      showToast("success", "Upload complete", {
        description: "Your summary is ready to share",
      });
      setUploading(false);
      setFile(null);
      return summary;
    } catch (error) {
      console.error("Error getting summary:", error);
      showToast("error", "Error getting summary", {
        description: "Please try again later",
      });
    }
  }
};

export const handleUploadError = ({
  obj,
  setUploading,
  setFile,
}: UploadCompleteParams) => {
  showToast("error", "Upload failed", {
    description: "Please try again later",
  });
  setUploading(false);
  setFile(null);
};

export const handleUploadBegin = ({ obj, setUploading }: UploadBeginParams) => {
  console.log("In handleUploadBegin", obj);
  setUploading(true);
  showToast("info", "Uploading...", {
    description: "Please wait while we generate your summary",
    duration: 5000,
  });
};

// Format file size in MB
export const formatFileSizeMB = (bytes: number): string => {
  return (bytes / (1024 * 1024)).toFixed(2);
};
