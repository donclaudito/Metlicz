"use client";

import { useState, useEffect } from 'react';
// Importe a fonte, por exemplo, do Google Fonts via @next/font ou link no HTML
// Exemplo: import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

interface ImovelData {
  id: string;
  titulo: string;
  preco: string;
  localizacao: string;
  descricao: string;
  area: number;
  quartos: number;
  suites: number;
  vagas: number;
  caracteristicas: string[];
  fotos: string[];
  tipo: string;
  status: string;
}

export default function ImovelDetalhes({ imovelId }: { imovelId: string }) {
  const [imovel, setImovel] = useState<ImovelData | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [fotoPrincipal, setFotoPrincipal] = useState('');

  useEffect(() => {
    const carregarImovel = async () => {
      try {
        const response = await fetch(`/api/empreendimentos/${imovelId}`);
        if (response.ok) {
          const data = await response.json();
          // ... (mapeamento dos dados da API)
          // Adapte o mapeamento conforme sua API
          setImovel({
            id: data.id,
            titulo: data.nome || "Imóvel Metlicz",
            preco: `R$ ${data.preco || '0'}`,
            localizacao: data.localizacao || "Caraguatatuba, SP",
            descricao: data.descricao || "Excelente imóvel no Litoral Norte.",
            area: parseInt(data.area) || 0,
            quartos: data.quartos || 0,
            suites: data.suites || 0,
            vagas: data.vagas || 0,
            caracteristicas: data.caracteristicas || ["Acabamento de luxo"],
            fotos: data.fotos?.length > 0 ? data.fotos : ['/placeholder-imovel.jpg'], // Use uma imagem local ou placeholder
            tipo: data.tipo || 'Venda',
            status: 'Disponível'
          });
        } else {
          // Dados mockados (exemplo SAFIRA)
          setImovel({
            id: imovelId,
            titulo: "SAFIRA - Empreendimento Exclusivo",
            preco: "R$ 850.000",
            localizacao: "Praia de Aruã, Caraguatatuba - SP",
            descricao: "Empreendimento de alto padrão com apenas 6 unidades, acabamento impecável e vista para o mar. Localizado em uma das praias mais exclusivas de Caraguatatuba, oferece conforto e segurança.",
            area: 118,
            quartos: 3,
            suites: 1,
            vagas: 2,
            caracteristicas: ["Vista para o mar", "Acabamento de luxo", "Piscina", "Segurança 24h"],
            fotos: [
              "https://placehold.co/1200x800/1a1a2e/FFFFFF?text=SAFIRA",
              "https://placehold.co/600x400/2d2d44/FFFFFF?text=Foto+1",
              "https://placehold.co/600x400/3d3d5c/FFFFFF?text=Foto+2"
            ],
            tipo: "Venda",
            status: "Disponível"
          });
        }
      } catch (error) {
        console.error("Erro:", error);
        // Dados de fallback
        setImovel({
          id: imovelId,
          titulo: "Metlicz - Imóvel de Alto Padrão",
          preco: "R$ 850.000",
          localizacao: "Caraguatatuba, SP",
          descricao: "Imóvel com acabamento impecável no Litoral Norte.",
          area: 118,
          quartos: 3,
          suites: 1,
          vagas: 2,
          caracteristicas: ["Acabamento de luxo", "Vista para o mar"],
          fotos: ['/placeholder-imovel.jpg'],
          tipo: "Venda",
          status: "Disponível"
        });
      } finally {
        setCarregando(false);
      }
    };

    if (imovelId) {
      carregarImovel();
    }
  }, [imovelId]);

  if (carregando) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid"></div>
        <p className="text-gray-500 mt-6 font-medium">Carregando imóvel...</p>
      </div>
    );
  }

  if (!imovel) {
    return (
      <div className="text-center py-20">
        <div className="text-7xl mb-6">🏠</div>
        <h2 className="text-2xl font-semibold text-gray-700">Imóvel não encontrado</h2>
        <p className="text-gray-500 mt-2">O imóvel não está disponível.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans"> {/* Fonte mais limpa */}
      {/* Título e Localização - Estilo mais clean */}
      <div className="mb-8 border-b border-gray-100 pb-6">
        <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-2 tracking-tight">
          {imovel.titulo}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-gray-500">
          <span className="text-lg">📍</span>
          <span className="text-base">{imovel.localizacao}</span>
          <span className="hidden sm:inline mx-2 text-gray-300">|</span>
          <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-0.5 rounded-full">
            {imovel.tipo}
          </span>
        </div>
      </div>

      {/* Grid Principal: Galeria e Card de Preço - Ajuste de proporção */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
        {/* Galeria de Fotos - Ocupa 3/5 */}
        <div className="lg:col-span-3">
          <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-sm aspect-[4/3]">
            <img
              src={fotoPrincipal}
              alt={imovel.titulo}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/1200x800/e5e7eb/6b7280?text=Metlicz+Imóvel';
              }}
            />
            <span className={`absolute top-4 right-4 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm ${
              imovel.status === 'Disponível' ? 'bg-emerald-500 text-white' :
              imovel.status === 'Vendido' ? 'bg-rose-500 text-white' :
              'bg-amber-500 text-white'
            }`}>
              {imovel.status}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {imovel.fotos.slice(0, 4).map((foto, index) => (
              <button
                key={index}
                onClick={() => setFotoPrincipal(foto)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition ${
                  fotoPrincipal === foto ? 'border-orange-500 shadow-md' : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img src={foto} alt={`Imagem ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Card de Preço e Informações - Ocupa 2/5 com mais estilo */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 sticky top-24">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {imovel.preco}
            </div>
            <div className="text-sm text-gray-500 mb-6">Preço de venda</div>

            <div className="grid grid-cols-3 gap-3 my-6">
              <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                <span className="block text-xl font-semibold text-gray-800">{imovel.area}m²</span>
                <span className="text-xs text-gray-500">Área</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                <span className="block text-xl font-semibold text-gray-800">{imovel.quartos}</span>
                <span className="text-xs text-gray-500">Quartos</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                <span className="block text-xl font-semibold text-gray-800">{imovel.suites}</span>
                <span className="text-xs text-gray-500">Suítes</span>
              </div>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
              <span>📱</span> Falar com Especialista
            </button>

            <div className="mt-5 p-4 bg-gray-50 rounded-xl text-center text-sm text-gray-500 border border-gray-100">
              <p className="font-medium text-gray-700">📞 (12) 99999-9999</p>
              <p className="mt-1">💬 WhatsApp: (12) 99999-9999</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Descrição e Características - Refinada */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Descrição */}
          <div>
            <h2 className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Sobre o imóvel</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="leading-relaxed">{imovel.descricao}</p>
            </div>
          </div>

          {/* Características */}
          <div>
            <h2 className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Características</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {imovel.caracteristicas.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                  <span className="text-orange-400 text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card de Contato Rápido - Reforço visual */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">📞 Fale com a Cláudia</h3>
            <p className="text-sm text-gray-600 mb-4">Especialista em imóveis de alto padrão no Litoral Norte.</p>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <p className="flex items-center gap-2"><span className="text-gray-400">📞</span> (12) 99999-9999</p>
              <p className="flex items-center gap-2"><span className="text-gray-400">💬</span> (12) 99999-9999</p>
              <p className="flex items-center gap-2"><span className="text-gray-400">📧</span> claudia@metlicz.com</p>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-sm hover:shadow">
              <span>💬</span> WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Rodapé - Ajuste visual */}
      <div className="mt-16 pt-6 border-t border-gray-200 text-center text-sm text-gray-400">
        <p className="font-medium text-gray-500 tracking-wide">METLICZ</p>
        <p className="mt-1">Imóveis · Litoral Norte & São Paulo</p>
        <p className="mt-1">© {new Date().getFullYear()} Metlicz Imóveis. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}