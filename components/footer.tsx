export function Footer() {
  return (
    <footer className="border-t border-[#181D3A]/10 px-6 py-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-2xl text-[#181D3A]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Lazuli</p>
          <p className="text-sm text-[#5A637F]">Espaço Psicoterapêutico</p>
        </div>
        <div className="text-sm text-[#5A637F]">© Direitos Camila Lopes</div>
      </div>
    </footer>
  );
}
