import { audience } from "@/data/site-data";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";

function SymbolCard({ symbol }: { symbol: string }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DA9B5C]/35 bg-[#F8F0E8] text-sm font-semibold tracking-[0.14em] text-[#181D3A]">
      {symbol}
    </div>
  );
}

export function ServicesSection({ openSchedule }: { openSchedule: () => void }) {
  return (
    <section id="atendimentos" className="px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle
            eyebrow="Atendimentos"
            title="Para diferentes fases da vida e diferentes formas de cuidado"
            text="Os cards organizam os serviços de forma clara e sofisticada, ajudando o visitante a se reconhecer mais rápido no site."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {audience.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.04}>
              <div className="h-full rounded-[28px] border border-[#181D3A]/8 bg-white/75 p-6 shadow-[0_18px_42px_rgba(24,29,58,0.12)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <SymbolCard symbol={item.symbol} />
                <h3 className="mt-5 text-2xl text-[#181D3A]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#4F5674]">{item.text}</p>
                <button
                  type="button"
                  onClick={openSchedule}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#DA9B5C]/35 bg-[#fbf3eb] px-4 py-2 text-sm font-medium text-[#9D6A37] transition hover:border-[#DA9B5C] hover:bg-white"
                >
                  Consultar agenda <span aria-hidden>→</span>
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
