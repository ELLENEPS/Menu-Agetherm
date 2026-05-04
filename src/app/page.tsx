"use client"; // Esta linha resolve o erro de Runtime

export default function MenuAgetherm() {
  // Lista dos seus sistemas - Substitua os links pelos endereços reais da Vercel
  const links = [
    { name: "Formulário de Reembolso", url: "https://formulario-reembolso-agetherm.vercel.app/" },
    { name: "Gerador de Etiquetas Master", url: "https://gerador-etiquetas-agt.vercel.app/" },
    { name: "Gerador de Etiquetas DUN-14", url: "https://etiquetas-dun-14-agetherm.vercel.app/" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans relative">
      
      {/* Barra Laranja Superior */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#FF8C00]"></div>

      <div className="mb-8">
        {/* A imagem logo.png deve estar na pasta 'public' */}
        <img 
          src="/logo.png" 
          alt="Agetherm" 
          className="h-20 object-contain"
          onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/200x80?text=AGETHERM")} 
        />
      </div>

      <h1 className="text-2xl font-black text-[#002B5B] mb-8 tracking-tight uppercase">
        Menu de Ferramentas
      </h1>

      {/* Menu Vertical: flex-col garante um botão abaixo do outro */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-5 bg-white border-2 border-transparent rounded-xl shadow-sm hover:shadow-md hover:border-[#FF8C00] hover:scale-[1.02] transition-all group"
          >
            <span className="text-[#002B5B] font-bold text-lg group-hover:text-[#FF8C00]">
              {link.name}
            </span>
          </a>
        ))}
      </div>

      <footer className="mt-12 text-gray-400 text-xs font-medium uppercase tracking-widest">
        Agetherm © 2026
      </footer>
    </div>
  );
}