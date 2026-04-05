import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { therapyImportance } from "@/data/site-data";

function Badge({ symbol }: { symbol: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xs font-semibold tracking-[0.14em] text-white">
      {symbol}
    </div>
  );
}

export function TherapyImportanceSection() {
  return (
    <section id="clinica" className="px-6 pb-20 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="rounded-[32px] bg-[#181D3A] p-8 text-white shadow-xl md:p-10">
            <SectionTitle
              eyebrow="Importância da psicoterapia"
              title="Cuidar da saúde mental é criar espaço para viver com mais consciência, vínculo e equilíbrio."
              text="A psicoterapia pode apoiar processos de autoconhecimento, elaboração emocional, fortalecimento das relações e construção de novas formas de estar no mundo."
              light
            />

            <div className="mt-10 grid gap-4">
              {therapyImportance.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-4">
                      <Badge symbol={item.symbol} />
                      <div>
                        <p className="text-xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal>
            <div className="rounded-[32px] border border-[#181D3A]/10 bg-white/80 p-8 shadow-[0_18px_42px_rgba(24,29,58,0.12)] md:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[#DA9B5C]">Sobre a Lazuli</p>
              <h3 className="mt-4 text-3xl leading-tight text-[#181D3A] md:text-4xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                Psicoterapia integrada para vínculos, desenvolvimento e cuidado emocional.
              </h3>
              <p className="mt-5 leading-7 text-[#4F5674]">
                A Lazuli se posiciona com sensibilidade, clareza e sofisticação, fortalecendo a marca e aproximando o visitante do cuidado terapêutico.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
