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
