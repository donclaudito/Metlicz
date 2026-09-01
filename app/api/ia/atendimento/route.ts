import { NextResponse } from 'next/server';

// ============================================
// DADOS DO EMPREENDIMENTO SAFIRA
// ============================================

const EMPREENDIMENTO = {
  nome: "SAFIRA",
  localizacao: "Praia de Aruã, Caraguatatuba - Litoral Norte SP",
  unidades: 6,
  area: "118m²",
  quartos: 3,
  suites: 1,
  vagas: 2,
  entrada: "20%",
  parcelas: "até 60x direto com a construtora",
  acabamento: "Impecável, completamente decorado",
  destaque: "Apenas 6 unidades - Exclusividade à beira-mar"
};

// ============================================
// RESPOSTAS PERSONALIZADAS POR DDD
// ============================================

const RESPOSTAS_PADRAO = {
  // Clientes de Caraguatatuba (DDD 12)
  caragua: {
    saudacao: "Oi! Tudo bem? Sou a Cláudia, consultora da Metlicz Imóveis aqui em Caraguatatuba! 🌊",
    local: "Que legal que você já está por aqui! O SAFIRA fica na Praia de Aruã, um dos lugares mais exclusivos da nossa cidade.",
    chamada: "Que tal agendar uma visita ainda esta semana? Posso te mostrar pessoalmente!"
  },
  // Clientes de São Paulo (DDD 11)
  sp: {
    saudacao: "Olá! Sou a Cláudia, consultora da Metlicz Imóveis no Litoral Norte! 🌊",
    local: "O SAFIRA é um empreendimento exclusivo na Praia de Aruã, em Caraguatatuba - a 2h30 de São Paulo, perfeito para finais de semana e investimento.",
    chamada: "Agende uma visita no final de semana! Posso te mostrar o imóvel e você já aproveita para conhecer a região."
  },
  // Clientes de outros DDD
  outros: {
    saudacao: "Olá! Sou a Cláudia, consultora da Metlicz Imóveis no Litoral Norte! 🌊",
    local: "O SAFIRA fica na Praia de Aruã, em Caraguatatuba, um dos destinos mais valorizados do Litoral Norte de São Paulo.",
    chamada: "Vale a pena agendar uma visita para conhecer de perto! Posso te ajudar com hospedagem e roteiro."
  }
};

// ============================================
// FUNÇÃO PRINCIPAL
// ============================================

export async function POST(request: Request) {
  try {
    const { mensagem, ddd } = await request.json();

    if (!mensagem) {
      return NextResponse.json(
        { error: 'Mensagem é obrigatória' },
        { status: 400 }
      );
    }

    console.log('📩 Mensagem recebida:', mensagem);
    console.log('📱 DDD:', ddd || 'não informado');

    // ============================================
    // IDENTIFICAR PERFIL DO CLIENTE
    // ============================================

    const msgLower = mensagem.toLowerCase();
    
    // Identificar se quer preço
    const querPreco = msgLower.includes('preço') || 
                      msgLower.includes('preco') || 
                      msgLower.includes('valor') ||
                      msgLower.includes('custa') ||
                      msgLower.includes('quanto');

    // Identificar se quer informações gerais
    const querInfo = msgLower.includes('info') || 
                     msgLower.includes('informação') ||
                     msgLower.includes('característica') ||
                     msgLower.includes('detalhe') ||
                     msgLower.includes('como é');

    // Identificar se quer agendar visita
    const querVisita = msgLower.includes('visita') || 
                       msgLower.includes('agendar') ||
                       msgLower.includes('conhecer') ||
                       msgLower.includes('ver');

    // ============================================
    // ESCOLHER RESPOSTA BASEADA NO DDD
    // ============================================

    let respostaPadrao;
    if (ddd === '12') {
      respostaPadrao = RESPOSTAS_PADRAO.caragua;
    } else if (ddd === '11') {
      respostaPadrao = RESPOSTAS_PADRAO.sp;
    } else {
      respostaPadrao = RESPOSTAS_PADRAO.outros;
    }

    // ============================================
    // CONSTRUIR RESPOSTA PERSONALIZADA
    // ============================================

    let resposta = `${respostaPadrao.saudacao}\n\n`;

    // 1. IDENTIFICAR O QUE O CLIENTE QUER
    if (querPreco) {
      resposta += `💰 Sobre o valor do SAFIRA:\n`;
      resposta += `• Entrada de ${EMPREENDIMENTO.entrada}\n`;
      resposta += `• Restante em ${EMPREENDIMENTO.parcelas}\n`;
      resposta += `• Imóvel de ${EMPREENDIMENTO.area} com acabamento impecável\n\n`;
    }

    if (querInfo) {
      resposta += `🏠 Informações do SAFIRA:\n`;
      resposta += `• Local: ${EMPREENDIMENTO.localizacao}\n`;
      resposta += `• ${EMPREENDIMENTO.quartos} dormitórios sendo 1 suíte\n`;
      resposta += `• ${EMPREENDIMENTO.area} de área privativa\n`;
      resposta += `• Acabamento: ${EMPREENDIMENTO.acabamento}\n`;
      resposta += `• Apenas ${EMPREENDIMENTO.unidades} unidades - EXCLUSIVO!\n\n`;
    }

    // 2. INFORMAÇÕES GERAIS (sempre incluir)
    resposta += `🌊 Sobre o empreendimento:\n`;
    resposta += `O ${EMPREENDIMENTO.nome} é um dos poucos lançamentos com acabamento de alto padrão na Praia de Aruã.\n`;
    resposta += `${EMPREENDIMENTO.destaque}\n\n`;

    // 3. INFORMAÇÕES DA REGIÃO
    resposta += `📍 Sobre Caraguatatuba:\n`;
    resposta += `• Praia de Aruã: uma das mais procuradas do Litoral Norte\n`;
    resposta += `• Valorização imobiliária de 15% ao ano\n`;
    resposta += `• Infraestrutura completa: comércio, restaurantes e lazer\n\n`;

    // 4. CHAMADA PARA AÇÃO (Personalizada)
    resposta += `${respostaPadrao.local}\n\n`;

    if (querVisita) {
      resposta += `✅ Ótimo! Já anotei seu interesse em visitar o SAFIRA.\n`;
      resposta += `📱 Me mande seu melhor horário e já agendamos!\n`;
      resposta += `📍 Endereço: ${EMPREENDIMENTO.localizacao}\n\n`;
    } else {
      resposta += `${respostaPadrao.chamada}\n\n`;
    }

    // 5. FINALIZAÇÃO
    resposta += `💬 Qualquer dúvida, estou à disposição!\n`;
    resposta += `🌊✨ Aguardo seu contato!`;

    return NextResponse.json({ resposta });

  } catch (error) {
    console.error('❌ Erro:', error);
    return NextResponse.json(
      { 
        resposta: `Olá! 👋 Sou a Cláudia, consultora da Metlicz Imóveis!

🌊 O empreendimento SAFIRA é um lançamento exclusivo na Praia de Aruã, Caraguatatuba.

🏠 Apartamentos de 118m² com acabamento impecável, 3 dormitórios sendo 1 suíte.

💰 Entrada de 20% e parcelamento direto com a construtora.

📱 Me mande seu WhatsApp para mais informações ou agende uma visita!

🌊✨ Aguardo seu contato!` 
      },
      { status: 200 }
    );
  }
}