import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pizza } from "lucide-react";

export const Demo = () => {
  return (
    <div className="pt-32 pb-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-3xl font-bold uppercase">Demo</h2>
            <Pizza className="size-12 text-rose-600 animate-spin-slow" />
          </div>
          <h3 className="text-3xl font-bold mb-8">
            Watch how it converts{" "}
            <span className="text-rose-600">dummy.pdf</span> into a beautiful
            summary
          </h3>
        </div>

        <div className="mt-12">
          <Card className="max-w-xl mx-auto p-8 bg-gradient-to-br from-rose-100 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Summary Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                This is a sample summary generated from a PDF document. The AI
                extracts key points, reduces reading time, and provides accurate
                insights.
              </p>

              <Button className="mt-6 bg-gradient-to-r from-rose-600 to-black text-white px-8 py-4 text-lg rounded-full transition-all duration-500 hover:from-black hover:to-rose-600">
                Try it Yourself
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
