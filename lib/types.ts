import { z } from "zod";
export const uploadPdfSchema = z.object({
  file: z
    .instanceof(File, {
      message: "Invalid File",
    })
    .refine((file) => file.size < 20 * 1024 * 1024, {
      message: "File size must be less than 20MB",
    })
    .refine((file) => file.type === "application/pdf", {
      message: "File must be a PDF",
    })
    .refine((file) => file.name.endsWith(".pdf"), {
      message: "File must be a PDF",
    }),
});

// Toast utility types
export type ToastType = "success" | "error" | "info" | "warning";
export type ToastOptions = {
  description?: string;
  onClick?: () => void;
  duration?: number;
};

// File validation types
export type FileValidationParams = {
  file: File;
  setFile: (file: File | null) => void;
};

// Upload handler types
export type UploadCompleteParams<TServerOutput> = {
  obj: UploadFileResponse<TServerOutput>[];
  setUploading: (value: boolean) => void;
  setFile: (file: File | null) => void;
};

export type UploadBeginParams = {
  obj: any;
  setUploading: (value: boolean) => void;
};

export type UploadFileResponse<TServerOutput> = {
  name: string;
  size: number;
  key: string;
  url: string;
  ufsUrl: string;
  customId: string | null;
  serverData: TServerOutput;
};

export type MyServerOutput = {
  uploadedBy: string;
  fileUrl: string;
};

export interface SummarySection {
  subheading: string;
  points: string[];
}

export interface ParsedSummaryOutput {
  mainHeading: string;
  sections: SummarySection[];
}
