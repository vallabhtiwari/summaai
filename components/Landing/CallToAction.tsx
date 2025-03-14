import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export const CallToAction = () => {
  return (
    <div className=" text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h4 className="tracking-wide leading-tight">
            Ready to Transform Your Document Experience?
          </h4>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl">
            Join thousands of users who save time and increase productivity with
            SummaAI.
          </p>
          <div className="w-full flex justify-center mt-10">
            <a href="#pricing">
              <Button className="text-white bg-gradient-to-r from-rose-600 to-black px-12 py-6 text-xl flex items-center gap-2 transition-all duration-500 hover:from-black hover:to-rose-600 rounded-full">
                Get Started <ArrowRight className="size-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
