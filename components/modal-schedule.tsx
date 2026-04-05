"use client";

import { useEffect, useMemo, useState } from "react";
import { availableSlots, professionals, siteLinks } from "@/data/site-data";
import { CTAButton } from "@/components/cta-button";

type Props = {
  open: boolean;
  onClose: () => void;
  initialProfessional?: string;
};

function normalizeWhatsappHref(href: string) {
  const digits = (href || "").replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : siteLinks.whatsapp;
}

export function ModalSchedule({ open, onClose, initialProfessional = "Aline Reis" }: Props) {
  const [form, setForm] = useState({
    professional: initialProfessional,
    date: "",
    time: "09:00",
    age: "",
    reason: "",
    goal: "",
    modality: "presencial",
  });

  useEffect(() => {
    if (open) {
      setForm((prev) => ({ ...prev, professional: initialProfessional }));
    }
  }, [initialProfessional, open]);

  const selectedProfessional = useMemo(() => {
    return professionals.find((item) => item.name === form.professional) || professionals[0];
  }, [form.professional]);

  const selectedProfessionalWhatsapp = useMemo(() => {
    const whatsappContact = selectedProfessional.contacts.find((contact) => contact.label === "WhatsApp");
    return normalizeWhatsappHref(whatsappContact?.href || siteLinks.whatsapp);
  }, [selectedProfessional]);

  const whatsappMessage = useMemo(() => {
    const lines = [
      `Olá, ${selectedProfessional.name.split(" ")[0]}!`,
      "",
      "Gostaria de consultar disponibilidade para atendimento na Lazuli.",
      `Profissional escolhida: ${form.professional}`,
      `Data desejada: ${form.date || "Não informada"}`,
      `Horário desejado: ${form.time || "Não informado"}`,
      `Idade: ${form.age || "Não informada"}`,
      `Modalidade: ${form.modality}`,
      `Motivo da terapia: ${form.reason || "Não informado"}`,
      `Objetivo da terapia: ${form.goal || "Não informado"}`,
    ];

    return lines.join("\n");
  }, [form, selectedProfessional]);

  const nextStep = useMemo(() => {
    if (!form.date || !form.time || !form.reason) {
      return "Preencha os campos principais para consultar a disponibilidade.";
    }
    return `Pré-agendamento para ${form.professional} em ${form.date} às ${form.time}. Ao confirmar, você será direcionada ao WhatsApp da profissional escolhida.`;
  }, [form]);

  const canSubmit = Boolean(form.date && form.time && form.reason.trim());

  const updateField = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const openSelectedProfessionalWhatsapp = () => {
    if (!canSubmit || typeof window === "undefined") return;
    const finalUrl = `${selectedProfessionalWhatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0f1222]/70 backdrop-blur-sm">
      <div className="flex h-[100dvh] items-start justify-center p-2 sm:p-4">
        <div className="flex h-full max-h-[960px] w-full max-w-5xl flex-col overflow-hidden rounded-[32px] border border-[#181D3A]/10 bg-[#fffaf5] shadow-2xl">
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#181D3A]/8 bg-[#fffaf5]/95 px-5 py-5 backdrop-blur-sm sm:px-8">
            <div className="pr-4 sm:pr-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#9D6A37]">Consultar agenda</p>
              <h3 className="mt-2 text-2xl text-[#181D3A] md:text-4xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                Escolha a profissional, o horário e os detalhes do atendimento.
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-[#505977]">
                Ao confirmar, o visitante será direcionado ao WhatsApp da profissional escolhida com a mensagem já pronta.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full border border-[#181D3A]/10 bg-white px-4 py-2 text-sm text-[#181D3A] shadow-sm transition hover:bg-[#F8F0E8]"
            >
              Fechar
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4 pt-4 sm:px-8 sm:pb-8 sm:pt-6">
            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[#181D3A]">Profissional</label>
                  <select
                    value={form.professional}
                    onChange={(e) => updateField("professional", e.target.value)}
                    className="w-full rounded-2xl border border-[#181D3A]/10 bg-white px-4 py-3.5 text-[#181D3A] outline-none"
                  >
                    {professionals.map((professional) => (
                      <option key={professional.name} value={professional.name}>{professional.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#181D3A]">Data</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => updateField("date", e.target.value)}
                    className="w-full rounded-2xl border border-[#181D3A]/10 bg-white px-4 py-3.5 text-[#181D3A] outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#181D3A]">Horário</label>
                  <select
                    value={form.time}
                    onChange={(e) => updateField("time", e.target.value)}
                    className="w-full rounded-2xl border border-[#181D3A]/10 bg-white px-4 py-3.5 text-[#181D3A] outline-none"
                  >
                    {availableSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#181D3A]">Idade</label>
                  <input
                    type="number"
                    placeholder="Ex.: 28"
                    value={form.age}
                    onChange={(e) => updateField("age", e.target.value)}
                    className="w-full rounded-2xl border border-[#181D3A]/10 bg-white px-4 py-3.5 text-[#181D3A] outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#181D3A]">Modalidade</label>
                  <select
                    value={form.modality}
                    onChange={(e) => updateField("modality", e.target.value)}
                    className="w-full rounded-2xl border border-[#181D3A]/10 bg-white px-4 py-3.5 text-[#181D3A] outline-none"
                  >
                    <option value="presencial">Presencial</option>
                    <option value="online">Online</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[#181D3A]">Motivo da terapia</label>
                  <textarea
                    rows={4}
                    placeholder="Escreva brevemente o motivo do contato"
                    value={form.reason}
                    onChange={(e) => updateField("reason", e.target.value)}
                    className="w-full rounded-2xl border border-[#181D3A]/10 bg-white px-4 py-3.5 text-[#181D3A] outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[#181D3A]">Objetivo da terapia</label>
                  <textarea
                    rows={4}
                    placeholder="Ex.: autoconhecimento, manejo emocional, relações, apoio familiar"
                    value={form.goal}
                    onChange={(e) => updateField("goal", e.target.value)}
                    className="w-full rounded-2xl border border-[#181D3A]/10 bg-white px-4 py-3.5 text-[#181D3A] outline-none"
                  />
                </div>
              </div>

              <div className="h-fit rounded-[28px] border border-[#181D3A]/8 bg-[#181D3A] p-5 text-white shadow-xl sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[#DA9B5C]">Disponibilidade do dia</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {availableSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => updateField("time", slot)}
                      className={`rounded-2xl border px-4 py-3 text-sm transition ${form.time === slot ? "border-[#DA9B5C] bg-[#DA9B5C] text-[#181D3A] shadow-sm" : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/70">Resumo</p>
                  <p className="mt-2 text-sm leading-6 text-white">{nextStep}</p>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                  <p className="font-medium text-white">Direcionamento</p>
                  <p className="mt-2">Você será enviada para o WhatsApp de <strong>{selectedProfessional.name}</strong> com a mensagem preenchida automaticamente.</p>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                  <p className="font-medium text-white">Número usado</p>
                  <p className="mt-2 break-all">{selectedProfessionalWhatsapp}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <CTAButton label="Confirmar e abrir WhatsApp" primary onClick={openSelectedProfessionalWhatsapp} disabled={!canSubmit} />
                  <CTAButton label="WhatsApp da clínica" href={siteLinks.whatsapp} light />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
