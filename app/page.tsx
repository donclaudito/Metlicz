"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [moduloAtual, setModuloAtual] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {/* HEADER PREMIUM */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* LOGO PREMIUM */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">M</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900 tracking-wider">METLICZ</span>
                <span className="block text-xs text-gray-400 font-light tracking-widest">IMÓWIEŚ</span>
              </div>
            </div>

            {/* MENU PREMIUM */}
            <nav className="hidden md:flex items-center gap-1">
              <button
                onClick={() => setModuloAtual('home')}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  moduloAtual === 'home'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                🏠 Início
              </button>
              <button
                onClick={() => setModuloAtual('atendimento')}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  moduloAtual === 'atendimento'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                💬 Atendimento IA
              </button>
              <button
                onClick={() => setModuloAtual('empreendimentos')}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  moduloAtual === 'empreendimentos'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                🏠 Empreendimentos
              </button>
              <button
                onClick={() => setModuloAtual('upload')}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  moduloAtual === 'upload'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                📸 Upload
              </button>
              <button
                onClick={() => setModuloAtual('login')}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  moduloAtual === 'login'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                🔐 Login
              </button>
              <a
                href="/admin"
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all duration-200"
              >
                ⚙️ Admin
              </a>
            </nav>

            {/* MENU MOBILE */}
            <button className="md:hidden p-2 rounded-xl hover:bg-gray-100">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PREMIUM */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {moduloAtual === 'home' && <ModuloHomePremium />}
        {moduloAtual === 'atendimento' && <ModuloAtendimentoPremium />}
        {moduloAtual === 'empreendimentos' && <ModuloEmpreendimentosPremium />}
        {moduloAtual === 'upload' && <ModuloUploadPremium />}
        {moduloAtual === 'login' && <ModuloLoginPremium />}
      </main>
    </div>
  );
}

// ============================================
// HOME PREMIUM
// ============================================

function ModuloHomePremium() {
  return (
    <div className="space-y-12">
      {/* HERO PREMIUM */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-12 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Sistema Online
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            🏖️ Bem-vinda, <span className="text-orange-200">Cláudia</span>!
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-2xl">
            Seu sistema de gestão imobiliária com IA está pronto para transformar seu negócio.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-200">
              🚀 Começar Agora
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200">
              📹 Ver Demonstração
            </button>
          </div>
        </div>
      </div>

      {/* CARDS PREMIUM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
            💬
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Atendimento IA</h3>
          <p className="text-gray-500 leading-relaxed">Responda clientes com inteligência artificial personalizada e persuasiva.</p>
          <button className="mt-4 text-orange-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
            Saiba mais →
          </button>
        </div>

        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
            🏠
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Empreendimentos</h3>
          <p className="text-gray-500 leading-relaxed">Gerencie todos os seus imóveis com acabamento de alto padrão.</p>
          <button className="mt-4 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
            Saiba mais →
          </button>
        </div>

        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
            📸
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Upload de Arquivos</h3>
          <p className="text-gray-500 leading-relaxed">Envie fotos, documentos e vídeos dos imóveis de forma simples.</p>
          <button className="mt-4 text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
            Saiba mais →
          </button>
        </div>
      </div>

      {/* ESTATÍSTICAS PREMIUM */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100">
          <div className="text-3xl font-bold text-orange-600">12</div>
          <div className="text-sm text-gray-500">Imóveis Ativos</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100">
          <div className="text-3xl font-bold text-blue-600">5</div>
          <div className="text-sm text-gray-500">Leads Hoje</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100">
          <div className="text-3xl font-bold text-green-600">3</div>
          <div className="text-sm text-gray-500">Visitas Agendadas</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100">
          <div className="text-3xl font-bold text-purple-600">R$ 2.5M</div>
          <div className="text-sm text-gray-500">Em Vendas</div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// ATENDIMENTO PREMIUM
// ============================================

function ModuloAtendimentoPremium() {
  const [mensagem, setMensagem] = useState('');
  const [ddd, setDdd] = useState('');
  const [resposta, setResposta] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleEnviar = async () => {
    if (!mensagem) return;
    setCarregando(true);
    setResposta('');

    try {
      const response = await fetch('/api/ia/atendimento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensagem, ddd: ddd || '00' }),
      });
      const data = await response.json();
      setResposta(data.resposta);
    } catch (error) {
      setResposta('Ops! Tive um problema técnico.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-orange-200">
          💬
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Central de Atendimento IA</h2>
          <p className="text-gray-500">Cole a mensagem do cliente e veja a resposta personalizada.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">📩 Mensagem do Lead</label>
          <textarea
            rows={4}
            className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 shadow-sm"
            placeholder="Cole aqui a mensagem do cliente..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">📱 DDD do Cliente</label>
          <select
            className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 shadow-sm"
            value={ddd}
            onChange={(e) => setDdd(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="11">São Paulo (11)</option>
            <option value="12">Caraguatatuba (12)</option>
            <option value="13">Santos (13)</option>
            <option value="19">Campinas (19)</option>
            <option value="21">Rio de Janeiro (21)</option>
            <option value="00">Outro</option>
          </select>
        </div>

        <button
          onClick={handleEnviar}
          disabled={carregando || !mensagem}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-200 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 disabled:opacity-50"
        >
          {carregando ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Gerando resposta...
            </span>
          ) : (
            '🚀 Gerar Resposta Personalizada'
          )}
        </button>

        {resposta && (
          <div className="mt-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm">✨</div>
              <span className="text-orange-400 font-semibold">Resposta da Cláudia IA</span>
            </div>
            <p className="text-gray-200 whitespace-pre-wrap leading-relaxed">{resposta}</p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(resposta);
                  alert('✅ Resposta copiada!');
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all"
              >
                📋 Copiar
              </button>
              <button
                onClick={() => {
                  const numero = ddd === '11' ? '5511' : '5512';
                  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(resposta)}`, '_blank');
                }}
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all"
              >
                📤 WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// EMPREENDIMENTOS PREMIUM
// ============================================

function ModuloEmpreendimentosPremium() {
  const [lista, setLista] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregar = async () => {
      try {
        const res = await fetch('/api/empreendimentos');
        const data = await res.json();
        setLista(data);
      } catch (error) {
        console.error('Erro:', error);
      } finally {
        setCarregando(false);
      }
    };
    carregar();
  }, []);

  if (carregando) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="text-gray-500 mt-4">Carregando empreendimentos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-blue-200">
          🏠
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Empreendimentos</h2>
          <p className="text-gray-500">Lista de todos os imóveis cadastrados.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lista.map((emp) => (
          <div key={emp.id} className="group bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900">{emp.nome}</h3>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                {emp.tipo || 'Venda'}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-2">{emp.localizacao}</p>
            <p className="text-2xl font-bold text-gray-900">R$ {emp.preco}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">{emp.area}m²</span>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">{emp.quartos} quartos</span>
              <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">{emp.unidades} unidades</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// UPLOAD PREMIUM
// ============================================

function ModuloUploadPremium() {
  const [empreendimentos, setEmpreendimentos] = useState<any[]>([]);
  const [empreendimentoId, setEmpreendimentoId] = useState('');
  const [arquivos, setArquivos] = useState<any[]>([]);
  const [uploadando, setUploadando] = useState(false);

  useEffect(() => {
    const carregar = async () => {
      try {
        const res = await fetch('/api/empreendimentos');
        const data = await res.json();
        setEmpreendimentos(data);
        if (data.length > 0) setEmpreendimentoId(data[0].id);
      } catch (error) {
        console.error('Erro:', error);
      }
    };
    carregar();
  }, []);

  useEffect(() => {
    if (empreendimentoId) {
      const carregarArquivos = async () => {
        try {
          const res = await fetch(`/api/upload?empreendimentoId=${empreendimentoId}`);
          const data = await res.json();
          setArquivos(Array.isArray(data) ? data : []);
        } catch (error) {
          console.error('Erro:', error);
        }
      };
      carregarArquivos();
    }
  }, [empreendimentoId]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0 || !empreendimentoId) return;

    setUploadando(true);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('empreendimentoId', empreendimentoId);
      formData.append('tipo', file.type);

      try {
        await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });
      } catch (error) {
        console.error('Erro:', error);
      }
    }

    setUploadando(false);
    alert('✅ Arquivos enviados com sucesso!');

    const res = await fetch(`/api/upload?empreendimentoId=${empreendimentoId}`);
    const data = await res.json();
    setArquivos(Array.isArray(data) ? data : []);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-200">
          📸
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Upload de Arquivos</h2>
          <p className="text-gray-500">Envie fotos, PDFs, TXTs e DOCs dos empreendimentos.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">🏠 Empreendimento</label>
          <select
            className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 shadow-sm"
            value={empreendimentoId}
            onChange={(e) => setEmpreendimentoId(e.target.value)}
          >
            {empreendimentos.map((emp) => (
              <option key={emp.id} value={emp.id}>{emp.nome}</option>
            ))}
          </select>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-orange-400 transition-all hover:bg-orange-50/50">
          <input
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.gif,.webp,.pdf,.txt,.doc,.docx"
            className="hidden"
            id="uploadInput"
            onChange={handleUpload}
          />
          <label htmlFor="uploadInput" className="cursor-pointer block">
            <div className="text-6xl mb-4">📂</div>
            <p className="text-gray-600 font-medium text-lg">Clique para selecionar arquivos</p>
            <p className="text-sm text-gray-400 mt-1">JPG, PNG, PDF, TXT, DOC, DOCX</p>
            <div className="mt-6 inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-200 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-200">
              {uploadando ? '⏳ Enviando...' : '📤 Selecionar Arquivos'}
            </div>
          </label>
        </div>

        {arquivos.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">📋 Arquivos ({arquivos.length})</h4>
            <div className="grid grid-cols-4 gap-3">
              {arquivos.map((arq, idx) => (
                <a
                  key={idx}
                  href={arq.caminho}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 p-4 rounded-2xl text-center hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="text-3xl">
                    {arq.nome.includes('.pdf') && '📄'}
                    {arq.nome.includes('.jpg') && '🖼️'}
                    {arq.nome.includes('.png') && '🖼️'}
                    {arq.nome.includes('.txt') && '📝'}
                    {arq.nome.includes('.doc') && '📎'}
                  </div>
                  <span className="text-xs text-gray-600 truncate block mt-1">{arq.nome}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// LOGIN PREMIUM
// ============================================

function ModuloLoginPremium() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isLogin ? '🔐 Login realizado com sucesso!' : '✅ Conta criada com sucesso!');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
              <span className="text-white text-2xl font-bold">M</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Acesse sua conta' : 'Crie sua conta'}
          </h2>
          <p className="text-gray-500 mt-1">
            {isLogin ? 'Ainda não tem uma conta?' : 'Já tem uma conta?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-orange-600 font-semibold hover:text-orange-700"
            >
              {isLogin ? 'Registre-se' : 'Faça login'}
            </button>
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              required
              className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 shadow-sm"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            required
            className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 shadow-sm"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 shadow-sm"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-200 text-white font-semibold py-4 rounded-2xl transition-all duration-200"
          >
            {isLogin ? 'Entrar' : 'Registrar'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Ao continuar, você concorda com nossos{' '}
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">Termos de Serviço</a>
            {' '}e{' '}
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">Política de Privacidade</a>
          </p>
          <p className="mt-2">© 2025 Metlicz. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}