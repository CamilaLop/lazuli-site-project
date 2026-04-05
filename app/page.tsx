"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TherapyImportanceSection } from "@/components/therapy-importance-section";
import { ProfessionalsSection } from "@/components/professionals-section";
import { LocationSection } from "@/components/location-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FloatingScheduleButton } from "@/components/floating-schedule-button";
import { ModalSchedule } from "@/components/modal-schedule";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState("Aline Reis");

  const openSchedule = (professional = "Aline Reis") => {
    setSelectedProfessional(professional);
    setIsModalOpen(true);
  };

  const scrollToId = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#FDEDDD] text-[#181D3A]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[680px] w-full bg-[#181D3A]" />
        <div className="absolute right-[-80px] top-16 h-72 w-72 rounded-full bg-[#DA9B5C]/20 blur-3xl" />
        <div className="absolute left-[-60px] top-[380px] h-44 w-44 rounded-full bg-[#D9DEE7]/25 blur-2xl" />
      </div>

      <main className="relative z-10">
        <HeroSection openSchedule={() => openSchedule()} scrollToId={scrollToId} />
        <ServicesSection openSchedule={() => openSchedule()} />
        <TherapyImportanceSection />
        <ProfessionalsSection onSchedule={openSchedule} />
        <LocationSection openSchedule={() => openSchedule()} />
        <ContactSection />
        <Footer />
      </main>

      <FloatingScheduleButton onClick={() => openSchedule()} />
      <ModalSchedule open={isModalOpen} onClose={() => setIsModalOpen(false)} initialProfessional={selectedProfessional} />
    </div>
  );
}
