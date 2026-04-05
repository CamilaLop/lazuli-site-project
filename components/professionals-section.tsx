import { professionals } from "@/data/site-data";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";

function ContactChip({ label, href, short }: { label: string; href: string; short: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-[#181D3A]/10 bg-white px-4 py-2.5 text-sm text-[#181D3A] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#DA9B5C]/50 hover:shadow-md"
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#181D3A] text-[10px] tracking-[0.14em] text-white transition group-hover:bg-[#DA9B5C] group-hover:text-[#181D3A]">
        {short}
      </span>
      {label}
    </a>
  );
}

export function ProfessionalsSection({ onSchedule }: { onSchedule: (name: string) => void }) {
  return (
    <section id="profissionais" className="px-6 pb-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle
            eyebrow="Profissionais"
            title="Conheça quem acolhe cada processo com escuta ética e presença clínica"
            text="A seção de profissionais traz espaço para foto, links prontos para trocar e cards mais próximos de um site final de clínica."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {professionals.map((professional, index) => (
            <Reveal key={professional.name} delay={index * 0.07}>
              <div className="h-full rounded-[30px] border border-[#181D3A]/10 bg-white/85 p-5 shadow-[0_18px_42px_rgba(24,29,58,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-[#181D3A]/10 bg-[#e9d6c4] shadow-sm">
                  <img src={professional.photo} alt={professional.imageAlt} className="h-full w-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181D3A]/25 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {professional.name.split(" ")[0]}
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl text-[#181D3A]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{professional.name}</h3>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[#9D6A37]">{professional.crp}</p>
                  </div>
                  <div className="rounded-full border border-[#DA9B5C]/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#9D6A37]">Lazuli</div>
                </div>

                <p className="mt-5 text-lg text-[#181D3A]">{professional.role}</p>
                <p className="mt-3 text-[15px] leading-7 text-[#4F5674]">{professional.focus}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {professional.contacts.map((contact) => (
                    <ContactChip key={contact.label} label={contact.label} href={contact.href} short={contact.short} />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSchedule(professional.name)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#DA9B5C]/35 bg-[#fbf3eb] px-4 py-2 text-sm font-medium text-[#9D6A37] transition hover:border-[#DA9B5C] hover:bg-white"
                >
                  Agendar com {professional.name.split(" ")[0]} <span aria-hidden>→</span>
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
