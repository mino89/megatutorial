import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "$9",
    description: "Essential features for small teams",
    features: [
      "Up to 5 users",
      "10GB storage",
      "Basic support",
      "Core features",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "Advanced features for growing businesses",
    features: [
      "Up to 20 users",
      "50GB storage",
      "Priority support",
      "Advanced features",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited users",
      "Unlimited storage",
      "24/7 premium support",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`flex flex-col ${
              index === 1 ? "'border-primary'" : "''"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <CardDescription className="text-xl font-semibold">
                {plan.price}/month
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-neutral-500 mb-4 dark:text-neutral-400">
                {plan.description}
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-neutral-900 mr-2 dark:text-neutral-50" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={index === 1 ? "default" : "outline"}
              >
                {index === 2 ? "Contact Sales" : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
