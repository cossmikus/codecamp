import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for every creator. Free plan available. Pro at $9/month. Business at $29/month. 14-day money-back guarantee.",
};

export default function PricingPage() {
  return <PricingClient />;
}
