export function BrandLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#DA9B5C]/25 bg-white/5 backdrop-blur-sm">
        <img src="/logo/lazuli-logo.png" alt="Logo Lazuli" className="h-11 w-11 object-contain" />
      </div>
      <div>
        <p className="text-3xl md:text-4xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          Lazuli
        </p>
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">Espaço Psicoterapêutico</p>
      </div>
    </div>
  );
}
