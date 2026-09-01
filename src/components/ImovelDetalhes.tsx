"use client";

import { useState, useEffect } from 'react';

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
            fotos: data.fotos?.length > 0 ? data.fotos : ['https://placehold.co/1200x800/1a1a2e/FFFFFF?text=Metlicz'],
            tipo: data.tipo || 'Venda',
            status: 'Disponível'
          });
        } else {
          // Dados mockados
          setImovel({
            id: imovelId,
            titulo: "SAFIRA - Empreendimento Exclusivo",
            preco: "R$ 850.000",
            localizacao: "Praia de Aruã, Caraguatatuba - SP",
            descricao: "Empreendimento de alto padrão com apenas 6 unidades, acabamento impecável e vista para o mar.",
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
          fotos: ['https://placehold.co/1200x800/1a1a2e/FFFFFF?text=Metlicz'],
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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {imovel.titulo}
        </h1>
        <p className="text-gray-600">📍 {imovel.localizacao}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
        <div className="lg:col-span-3">
          <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <img
              src={fotoPrincipal}
              alt={imovel.titulo}
              className="w-full h-[400px] object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/1200x800/1a1a2e/FFFFFF?text=Sem+Imagem';
              }}
            />
            <span className={`absolute top-4 right-4 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-md ${
              imovel.status === 'Disponível' ? 'bg-green-500 text-white' :
              imovel.status === 'Vendido' ? 'bg-red-500 text-white' :
              'bg-yellow-500 text-white'
            }`}>
              {imovel.status}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {imovel.fotos.slice(0, 4).map((foto, index) => (
              <button
                key={index}
                onClick={() => setFotoPrincipal(foto)}
                className={`relative h-20 rounded-lg overflow-hidden border-2 transition ${
                  fotoPrincipal === foto ? 'border-orange-500' : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img src={foto} alt={`Imagem ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 sticky top-24">
            <div className="text-3xl font-bold text-orange-600 mb-2">{imovel.preco}</div>
            <div className="grid grid-cols-3 gap-2 my-4">
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <span className="block text-xl font-semibold text-gray-800">{imovel.area}m²</span>
                <span className="text-xs text-gray-500">Área</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <span className="block text-xl font-semibold text-gray-800">{imovel.quartos}</span>
                <span className="text-xs text-gray-500">Quartos</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <span className="block text-xl font-semibold text-gray-800">{imovel.suites}</span>
                <span className="text-xs text-gray-500">Suítes</span>
              </div>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition">
              📱 Fale com a Cláudia
            </button>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg text-center text-xs text-gray-500">
              <p>📞 (12) 99999-9999</p>
              <p>💬 WhatsApp: (12) 99999-9999</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">📝 Descrição</h3>
        <p className="text-gray-700 leading-relaxed">{imovel.descricao}</p>
        
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">⭐ Características</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {imovel.caracteristicas.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className="text-orange-500 text-lg">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-400">
        <p className="font-medium text-gray-500">METLICZ</p>
        <p>Imóveis · Litoral Norte & São Paulo</p>
        <p>© {new Date().getFullYear()} Metlicz Imóveis</p>
      </div>
    </div>
  );
}