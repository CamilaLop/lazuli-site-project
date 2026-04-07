import { CTAButton } from "@/components/cta-button";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";

export function HeroSection({
  openSchedule,
  scrollToId,
}: {
  openSchedule: () => void;
  scrollToId: (id: string) => void;
}) {
  return (
    <section className="px-6 pt-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-[#181D3A] text-white shadow-2xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="px-7 py-8 md:px-12 md:py-12 lg:px-14 lg:py-14">
            <Header scrollToId={scrollToId} />

            <Reveal>
              <div className="pt-10 md:pt-14">
                <div className="mb-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-[#DA9B5C]">
                  <span>Confiança</span>
                  <span>•</span>
                  <span>Cuidado</span>
                  <span>•</span>
                  <span>Excelência</span>
                </div>

                <p className="max-w-2xl text-sm uppercase tracking-[0.25em] text-white/55">Saúde mental com ética, profundidade e acolhimento.</p>

                <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl md:leading-[1.03]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  Um espaço onde cada história é acolhida com sensibilidade, presença e acolhimento.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
                  A Lazuli é um espaço pensado para acolher histórias, emoções e processos com delicadeza e presença. Por meio da psicoterapia integrada, cuida de crianças, adolescentes, casais, famílias, pessoas com TEA e adultos em geral, traduzindo o cuidado emocional em experiência humana, ética e acolhedora.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <CTAButton label="Consultar agenda" onClick={openSchedule} primary />
                  <CTAButton label="Conhecer profissionais" onClick={() => scrollToId("profissionais")} light />
                  <CTAButton label="Ver local de atendimento" onClick={() => scrollToId("local")} light />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="px-6 pb-8 lg:pb-0 lg:pr-10 lg:pt-10">
            <Reveal>
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[30px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                  <div className="relative h-[520px] overflow-hidden rounded-[24px]">
                    <img src="/images/pedras.jpg" alt="Pedras empilhadas representando equilíbrio" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181D3A]/55 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 right-5 sm:left-6 sm:top-6 sm:right-6">
                      <p className="text-[10px] uppercase tracking-[0.32em] text-[#DA9B5C] sm:text-xs">
                        Lazuli
                      </p>

                      <div className="mt-4 inline-block rounded-[18px] bg-[#181D3A]/22 px-3 py-3 backdrop-blur-[2px] sm:px-4 sm:py-4">
                        <h3
                          className="max-w-[170px] text-[34px] leading-[0.95] text-white sm:max-w-[210px] sm:text-[48px] md:max-w-[250px] md:text-[60px]"
                          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                        >
                      
                          <br />
                        
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="relative h-[300px] overflow-hidden rounded-[24px] border border-[#D8BE9B] bg-white">
                    <img src="/images/atendimento.jpg" alt="Atendimento terapêutico" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181D3A]/20 via-transparent to-transparent" />
                    <div className="absolute left-6 top-6 max-w-[220px] rounded-[20px] bg-white/70 px-5 py-4 backdrop-blur-sm">
                      <h3 className="text-3xl leading-tight text-[#181D3A]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                        Escuta
                        <br />
                        ética e
                        <br />
                        acolhimento
                      </h3>
                    </div>
                  </div>

  
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
