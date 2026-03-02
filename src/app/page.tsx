import { Metadata } from "next";
import HeroSection from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks.";
import StatsSection from "./components/StatsSection";
import Pricing from "./components/Pricing";
import Referral from "./components/Referral";
import Hooks from "./page.client";


/* export const metadata: Metadata = {
  title: "Admission compass",
  description: "Find Your Admission Path with Confidence",
}; */

export default function Home() {
  return (
    <>
      <Hooks />
      <main>
        {" "}
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <StatsSection />
        <Pricing />
        <Referral />
      </main>
    </>
  );
}
