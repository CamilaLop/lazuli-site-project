type Props = {
  label: string;
  onClick?: () => void;
  href?: string;
  light?: boolean;
  primary?: boolean;
  disabled?: boolean;
};

export function CTAButton({ label, onClick, href, light = false, primary = false, disabled = false }: Props) {
  const shared = `inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition duration-300 ${disabled ? "cursor-not-allowed opacity-50" : ""}`;
  const theme = primary
    ? "border-[#DA9B5C] bg-[#DA9B5C] text-[#181D3A] shadow-[0_12px_30px_rgba(218,155,92,0.25)] hover:-translate-y-0.5 hover:bg-[#e4a86d]"
    : light
      ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
      : "border-[#181D3A]/10 bg-white text-[#181D3A] shadow-[0_18px_42px_rgba(24,29,58,0.12)] hover:-translate-y-0.5 hover:border-[#DA9B5C]/50";

  const content = (
    <>
      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[10px] tracking-[0.14em] ${primary ? "bg-[#181D3A] text-white" : light ? "bg-white/10 text-white" : "bg-[#181D3A] text-white"}`}>
        •
      </span>
      {label}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${shared} ${theme}`}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={disabled ? undefined : onClick} disabled={disabled} className={`${shared} ${theme}`}>
      {content}
    </button>
  );
}
