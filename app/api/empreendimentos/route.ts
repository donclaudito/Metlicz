import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// ============================================
// BANCO DE DADOS EM MEMÓRIA
// ============================================

let empreendimentos: any[] = [];

// ============================================
// GET - LISTAR EMPREENDIMENTOS
// ============================================

export async function GET() {
  return NextResponse.json(empreendimentos);
}

// ============================================
// POST - CRIAR EMPREENDIMENTO
// ============================================

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const novoEmpreendimento = {
      id: uuidv4(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    empreendimentos.push(novoEmpreendimento);
    
    return NextResponse.json(novoEmpreendimento, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao criar empreendimento' },
      { status: 500 }
    );
  }
}

// ============================================
// PUT - ATUALIZAR EMPREENDIMENTO
// ============================================

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...resto } = data;
    
    const index = empreendimentos.findIndex((e: any) => e.id === id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Empreendimento não encontrado' },
        { status: 404 }
      );
    }
    
    empreendimentos[index] = {
      ...empreendimentos[index],
      ...resto,
      updatedAt: new Date().toISOString()
    };
    
    return NextResponse.json(empreendimentos[index]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao atualizar empreendimento' },
      { status: 500 }
    );
  }
}

// ============================================
// DELETE - REMOVER EMPREENDIMENTO
// ============================================

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID não fornecido' },
        { status: 400 }
      );
    }
    
    empreendimentos = empreendimentos.filter((e: any) => e.id !== id);
    
    return NextResponse.json({ message: 'Empreendimento removido' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao remover empreendimento' },
      { status: 500 }
    );
  }
}

// ============================================
// DADOS INICIAIS (EXEMPLO)
// ============================================

// Inicializar com dados de exemplo
empreendimentos = [
  {
    id: '1',
    nome: 'SAFIRA',
    slug: 'safira',
    localizacao: 'Praia de Aruã, Caraguatatuba - Litoral Norte SP',
    descricao: 'Empreendimento exclusivo com apenas 6 unidades, acabamento impecável e vista para o mar.',
    unidades: 6,
    area: '118',
    quartos: 3,
    suites: 1,
    vagas: 2,
    entrada: '20%',
    parcelas: 'até 60x',
    preco: '850.000',
    caracteristicas: ['Vista para o mar', 'Acabamento de luxo', 'Área de lazer completa'],
    fotos: [],
    videos: [],
    linkInstagram: 'https://instagram.com/metlicz_imoveis',
    linkYouTube: 'https://youtube.com/metlicz_imoveis',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    nome: 'MARESIA',
    slug: 'maresia',
    localizacao: 'Praia do Indaiá, Caraguatatuba - Litoral Norte SP',
    descricao: 'Estilo de vida praiano a 100 metros da praia, com academia e piscina.',
    unidades: 12,
    area: '85',
    quartos: 2,
    suites: 1,
    vagas: 1,
    entrada: '25%',
    parcelas: 'até 48x',
    preco: '620.000',
    caracteristicas: ['Perto da praia', 'Academia', 'Piscina'],
    fotos: [],
    videos: [],
    linkInstagram: 'https://instagram.com/metlicz_imoveis',
    linkYouTube: 'https://youtube.com/metlicz_imoveis',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '3',
    nome: 'SOLAR',
    slug: 'solar',
    localizacao: 'Centro, Caraguatatuba - Litoral Norte SP',
    descricao: 'No coração da cidade, com segurança 24h e acabamento em granito.',
    unidades: 8,
    area: '95',
    quartos: 2,
    suites: 1,
    vagas: 1,
    entrada: '30%',
    parcelas: 'até 36x',
    preco: '480.000',
    caracteristicas: ['Centro da cidade', 'Comércio perto', 'Segurança 24h'],
    fotos: [],
    videos: [],
    linkInstagram: 'https://instagram.com/metlicz_imoveis',
    linkYouTube: 'https://youtube.com/metlicz_imoveis',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];