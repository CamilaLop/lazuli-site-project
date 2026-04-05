import { siteLinks } from "@/data/site-data";
import { CTAButton } from "@/components/cta-button";

export function ContactSection() {
  return (
    <section className="px-6 pb-10 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-[#DA9B5C] to-[#e0ad77] p-[1px] shadow-xl">
        <div className="rounded-[31px] bg-[#fff7f0] px-8 py-10 md:px-12 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[#9D6A37]">Contato</p>
              <h3 className="mt-3 text-3xl text-[#181D3A] md:text-4xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                Um site pensado para acolher, apresentar e facilitar o primeiro passo.
              </h3>
              <p className="mt-4 leading-7 text-[#505977]">
                A Lazuli aproxima você de um cuidado terapêutico humano, sensível e especializado, em um espaço pensado para acolher desde o primeiro contato.
Não desperdice a chance de investir em sua saúde mental, no seu equilíbrio e na sua qualidade de vida.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton label="Falar no WhatsApp" href={siteLinks.whatsapp} primary />
              <CTAButton label="Instagram" href={siteLinks.instagram} />
              <CTAButton label="Email" href={siteLinks.email} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
