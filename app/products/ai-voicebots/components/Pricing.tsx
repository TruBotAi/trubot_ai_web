"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import PricingCard from "@/app/ui/components/shared/PricingCard";
import { pricingSection } from "@/app/ui/libs/constants/productPage/ai-voicebots";

const PricingSection = () => {
  const [duration, setDuration] = useState<"monthly" | "yearly">("monthly");
  const plans = pricingSection[duration];

  return (
    <div className="bg-gray-50">
      <PageLayout id="pricing" animate>
        <SectionHeader
          title="Pricing Options"
          subtitle="Simple and scalable plans to fit your business needs"
          align="center"
          animate
        />

        {/* Toggle Billing Option */}
        <div className="flex justify-center gap-4 mb-10">
          {["monthly", "yearly"].map((option) => (
            <button
              key={option}
              onClick={() => setDuration(option as "monthly" | "yearly")}
              role="button"
              aria-pressed={duration === option}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                duration === option
                  ? "bg-electric text-white shadow"
                  : "bg-white text-navy border border-electric"
              }`}
            >
              {option === "monthly" ? "Monthly Billing" : "Yearly Billing"}
            </button>
          ))}
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              cta={plan.cta}
              link={plan.link}
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default PricingSection;
