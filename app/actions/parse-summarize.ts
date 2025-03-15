"use server";

import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export const parseSummarize = async (fileUrl: string) => {
  if (!fileUrl) {
    return {
      success: false,
      message: "Error in parsing PDF",
    };
  }
  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const loader = new PDFLoader(new Blob([blob]));
    const docs = await loader.load();
    const text = docs.map((doc) => doc.pageContent).join("\n");
    return {
      success: true,
      text,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error in parsing PDF",
    };
  }
};
