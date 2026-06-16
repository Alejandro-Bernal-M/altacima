import Hero from "@/components/Hero";
import FiveElements from "@/components/FiveElements";
import MeetAlejandro from "@/components/MeetAlejandro";
import WhoIHelp from "@/components/WhoIHelp";
import WhyTrainDifferently from "@/components/WhyTrainDifferently";
import TrainingPaths from "@/components/TrainingPaths";
import JourneyTimeline from "@/components/JourneyTimeline";
import TheGodaiApproach from "@/components/TheGodaiApproach";
import CurrentMission from "@/components/CurrentMission";
import FreeAssessment from "@/components/FreeAssessment";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0F14] text-white overflow-x-hidden">
      <Hero />

      <FiveElements />

      <MeetAlejandro />

      <WhoIHelp />

      <WhyTrainDifferently />

      <TrainingPaths />

      <JourneyTimeline />

      <TheGodaiApproach />

      <CurrentMission />

      <FreeAssessment />

      <Contact />

      <FinalCTA />

      <Footer />
    </main>
  );
}