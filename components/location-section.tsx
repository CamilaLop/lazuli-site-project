import { siteLinks } from "@/data/site-data";
import { CTAButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";

export function LocationSection({ openSchedule }: { openSchedule: () => void }) {
  return (
    <section id="local" className="px-6 pb-20 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="rounded-[32px] border border-[#181D3A]/10 bg-white/80 p-8 shadow-[0_18px_42px_rgba(24,29,58,0.12)] md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#DA9B5C]">Local de atendimento</p>
            <h3 className="mt-4 text-3xl leading-tight text-[#181D3A] md:text-4xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Terapias presenciais em um espaço pensado para acolher com calma e presença.
            </h3>
            <div className="mt-6 rounded-[24px] bg-[#F8F0E8] p-6">
              <p className="leading-7 text-[#4F5674]">
                <span className="font-medium text-[#181D3A]">Av. Dois 55, Manguinhos</span>
                <br />
                German Saúde, 2º andar, sala 4
                <br />
                Armação dos Búzios
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton label="Abrir no mapa" href={siteLinks.maps} />
              <CTAButton label="Instagram da clínica" href={siteLinks.instagram} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-[32px] bg-[#181D3A] p-8 text-white shadow-xl md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#DA9B5C]">Agenda</p>
            <h3 className="mt-4 text-3xl leading-tight md:text-4xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Escolha profissional, data, horário, objetivo e modalidade do atendimento.
            </h3>
            <p className="mt-5 leading-7 text-white/75">
              Ao clicar em consultar agenda, o visitante acessa um modal completo para iniciar o contato com mais clareza e organização.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton label="Abrir agenda" onClick={openSchedule} primary />
              <CTAButton label="WhatsApp" href={siteLinks.whatsapp} light />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
