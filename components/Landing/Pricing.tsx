import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

type PricingCardContent = {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isHighlighted?: boolean;
};

const pricingCards: PricingCardContent[] = [
  {
    title: "Basic",
    price: "$9.99/month",
    features: ["5 PDF Summaries/Month", "Basic Summaries", "Email Support"],
    buttonText: "Get Basic",
    isHighlighted: false,
  },
  {
    title: "Pro",
    price: "$29.99/month",
    features: [
      "50 PDF Summaries/Month",
      "Pro Summaries",
      "Access to advanced models",
      "Priority Support",
    ],
    buttonText: "Get Pro",
    isHighlighted: true,
  },
];

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
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={`max-w-sm p-8 hover:scale-105 transition-all duration-500 ${
                card.isHighlighted
                  ? "bg-gradient-to-br from-rose-200 to-gray-200 dark:from-gray-700 dark:to-gray-900 border-2 border-rose-600 shadow-xl"
                  : "bg-gradient-to-br from-rose-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg"
              } rounded-2xl`}
            >
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  {card.title}
                </CardTitle>
                <p className="mt-4 text-xl">{card.price}</p>
              </CardHeader>
              <CardContent className="mt-6 space-y-4">
                {card.features.map((feature, index) => (
                  <p key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-rose-600" /> {feature}
                  </p>
                ))}

                <Button className="mt-6 bg-gradient-to-r from-rose-600 to-black text-white px-8 py-4 text-lg rounded-full transition-all duration-500 hover:from-black hover:to-rose-600">
                  {card.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
