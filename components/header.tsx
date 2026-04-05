"use client";

import { useState } from "react";
import { BrandLogo } from "./brand-logo";

type HeaderProps = {
  scrollToId: (id: string) => void;
};

export function Header({ scrollToId }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id: string) => {
    scrollToId(id);
    setIsOpen(false);
  };

  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
        <BrandLogo />

        <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
          <button onClick={() => handleNavigate("clinica")} className="transition hover:text-white">
            Clínica
          </button>
          <button onClick={() => handleNavigate("atendimentos")} className="transition hover:text-white">
            Atendimentos
          </button>
          <button onClick={() => handleNavigate("profissionais")} className="transition hover:text-white">
            Profissionais
          </button>
          <button onClick={() => handleNavigate("local")} className="transition hover:text-white">
            Local
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
          </span>
        </button>
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-[#0f1222]/60 backdrop-blur-sm md:hidden"
          />

          <div className="absolute right-0 top-full z-50 mt-4 w-full max-w-[320px] overflow-hidden rounded-[24px] border border-white/10 bg-[#181D3A] p-3 shadow-2xl md:hidden">
            <nav className="flex flex-col">
              <button
                onClick={() => handleNavigate("clinica")}
                className="rounded-[18px] px-4 py-3 text-left text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Clínica
              </button>

              <button
                onClick={() => handleNavigate("atendimentos")}
                className="rounded-[18px] px-4 py-3 text-left text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Atendimentos
              </button>

              <button
                onClick={() => handleNavigate("profissionais")}
                className="rounded-[18px] px-4 py-3 text-left text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Profissionais
              </button>

              <button
                onClick={() => handleNavigate("local")}
                className="rounded-[18px] px-4 py-3 text-left text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Local
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}