import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import PitchForm from "@/components/pitch-form/PitchForm";
import Playground from "@/components/playground/Playground";
import SystemWorks from "@/components/system-works/SystemWorks";
import TechStack from "@/components/tech-stack/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8">
      <Navbar />
      <div className="w-full py-6">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4 flex flex-col gap-16">
          <div className="flex flex-col gap-8" id="playground">
            <Header
              title="Playground"
              subtitle="Generate special pitch of your desired city!"
            />
            <Playground />
          </div>

          <div className="flex flex-col gap-8" id="hwsysworks">
            <Header
              title="How System Works?"
              subtitle="The below diagram explains how system works."
            />
            <SystemWorks />
          </div>

          <div className="flex flex-col gap-8" id="techstack">
            <Header
              title="Tech Stack"
              subtitle="The technologies working behind the scenes"
            />
            <TechStack />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
