"use server";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT, USER_PROMPT } from "@/lib/prompts";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const getSummary = async (fileUrl: string) => {
  if (!fileUrl) {
    return {
      success: false,
      message: "Error in parsing PDF",
    };
  }

  let text = "";
  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    text = await parsePdf(blob);
    const summary = await generateSummaryOpenAI(text);
    console.log(typeof summary);
    // if (!summary || summary === "") {
    //   return {
    //     success: false,
    //     message: "Error in generating summary",
    //   };
    // }

    return {
      success: true,
      summary: summary,
    };
  } catch (error) {
    try {
      const summary = await generateSummaryGoogle(text);
      return {
        success: true,
        summary: summary,
      };
    } catch (error) {
      return {
        success: false,
        message: "Error in parsing PDF",
      };
    }
  }
};

export async function parsePdf(blob: Blob) {
  const loader = new PDFLoader(blob);
  const docs = await loader.load();
  const text = docs.map((doc) => doc.pageContent).join("\n");
  return text;
}

export async function generateSummaryOpenAI(text: string) {
  const completion = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: `${USER_PROMPT}
        ${text}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 1500,
  });
  return completion.choices[0].message;
}

export async function generateSummaryGoogle(text: string) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1500,
    },
  });

  const prompt = `${SYSTEM_PROMPT}
  ${USER_PROMPT}
  ${text}
  `;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const summary = response.text();

  return summary;
}
