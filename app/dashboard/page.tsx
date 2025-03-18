"use client";
import { NavLink } from "@/components/NavLink";
import { SummaryDetail } from "@/components/SummaryDetail";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function Dashboard() {
  const summaries = [
    {
      title: "AI in Healthcare",
      date: "March 12, 2025",
      content:
        "Explore how AI is transforming patient care, diagnostics, and administrative workflows in the healthcare industry...",
    },
    {
      title: "Future of Work",
      date: "March 10, 2025",
      content:
        "A comprehensive analysis of how remote work and automation are shaping the future job landscape...",
    },
    {
      title: "Climate Change Impact",
      date: "March 8, 2025",
      content:
        "An insightful breakdown of the latest research on global warming, policy changes, and sustainable development...",
    },
    {
      title: "Blockchain Basics",
      date: "March 5, 2025",
      content:
        "Understanding the core concepts of blockchain technology and its applications in various industries...",
    },
    {
      title: "AI in Healthcare",
      date: "March 12, 2025",
      content:
        "Explore how AI is transforming patient care, diagnostics, and administrative workflows in the healthcare industry...",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 pt-16 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="w-full md:w-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Your Summaries
            </h1>
          </div>
          <NavLink href="/upload" className="shrink-0">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg flex items-center gap-2 transition-transform hover:scale-105 rounded-full">
              <Plus className="size-5" /> New Summary
            </Button>
          </NavLink>
        </div>

        <div className="w-fit mb-8 bg-rose-100 dark:bg-gray-800 border border-rose-300 dark:border-gray-700 rounded-md px-2 py-1 text-center">
          You have reached the limit of 5 PDFs in the free plan.
          <Link
            href="/pricing"
            className="mx-1 text-rose-600 font-semibold underline"
          >
            Click here
          </Link>
          to upgrade to Pro.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {summaries.map((summary, index) => (
            <SummaryDetail
              key={index}
              {...summary}
              onDelete={() => console.log(`Delete summary: ${summary.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
