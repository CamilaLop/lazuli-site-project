export function FloatingScheduleButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-[#DA9B5C]/30 bg-[#181D3A] px-5 py-3 text-sm text-white shadow-[0_18px_42px_rgba(24,29,58,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#11162d]"
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px] tracking-[0.14em]">AG</span>
      Agendar
    </button>
  );
}
