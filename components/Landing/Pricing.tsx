import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  return (
    <div
      id="pricing"
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-12">
          Choose Your Plan
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Basic Plan */}
          <Card className="max-w-sm p-8 bg-gradient-to-br from-rose-100 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Basic</CardTitle>
              <p className="mt-4 text-xl">$9.99/month</p>
            </CardHeader>
            <CardContent className="mt-6 space-y-4">
              <p className="flex items-center gap-2">
                <CheckCircle className="text-rose-600" /> 5 PDF Summaries/Month
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="text-rose-600" /> AI-Powered Summaries
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="text-rose-600" /> Basic Summaries
              </p>

              <Button className="mt-6 bg-gradient-to-r from-rose-600 to-black text-white px-8 py-4 text-lg rounded-full transition-all duration-500 hover:from-black hover:to-rose-600">
                Get Basic
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="max-w-sm p-8 bg-gradient-to-br from-rose-200 to-gray-200 dark:from-gray-700 dark:to-gray-900 rounded-2xl shadow-xl border-2 border-rose-600">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Pro</CardTitle>
              <p className="mt-4 text-xl">$29.99/month</p>
            </CardHeader>
            <CardContent className="mt-6 space-y-4">
              <p className="flex items-center gap-2">
                <CheckCircle className="text-rose-600" /> 50 PDF Summaries/Month
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="text-rose-600" /> AI-Powered Insights
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="text-rose-600" /> Priority Support
              </p>

              <Button className="mt-6 bg-gradient-to-r from-rose-600 to-black text-white px-8 py-4 text-lg rounded-full transition-all duration-500 hover:from-black hover:to-rose-600">
                Get Pro
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
