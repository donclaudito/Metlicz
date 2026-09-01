"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [moduloAtual, setModuloAtual] = useState('home');

  // Definir os módulos diretamente aqui para evitar imports problemáticos
  const renderizarModulo = () => {
    switch (moduloAtual) {
      case 'home':
        return <ModuloHome />;
      case 'atendimento':
        return <ModuloAtendimento />;
      case 'empreendimentos':
        return <ModuloEmpreendimentos />;
      case 'upload':
        return <ModuloUpload />;
      case 'login':
        return <ModuloLogin />;
      case 'imovel':
        return <ModuloImovel />;
      default:
        return <ModuloHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md border-b-4 border-orange-500 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* LOGO COM CORMORANT GARAMOND */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-800 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                METLICZ
              </span>
              <span className="text-sm font-light text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
                IMÓWIEŚ
              </span>
            </div>

            {/* MENU DE NAVEGAÇÃO */}
            <nav className="flex flex-wrap gap-2">
              <button
                onClick={() => setModuloAtual('home')}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  moduloAtual === 'home'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                🏠 Início
              </button>
              <button
                onClick={() => setModuloAtual('atendimento')}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  moduloAtual === 'atendimento'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                💬 Atendimento IA
              </button>
              <button
                onClick={() => setModuloAtual('empreendimentos')}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  moduloAtual === 'empreendimentos'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                🏠 Empreendimentos
              </button>
              <button
                onClick={() => setModuloAtual('upload')}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  moduloAtual === 'upload'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                📸 Upload
              </button>
              <button
                onClick={() => setModuloAtual('imovel')}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  moduloAtual === 'imovel'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                🏠 Detalhes
              </button>
              <button
                onClick={() => setModuloAtual('login')}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  moduloAtual === 'login'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                🔐 Login
              </button>
              <a
                href="/admin"
                target="_blank"
                className="px-4 py-2 rounded-lg transition font-medium bg-blue-500 text-white hover:bg-blue-600"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ⚙️ Admin
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderizarModulo()}
      </main>
    </div>
  );
}

// ============================================
// MÓDULO HOME
// ============================================

function ModuloHome() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          🏖️ Bem-vinda, Cláudia!
        </h1>
        <p className="text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Seu sistema de gestão imobiliária com IA está pronto.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="text-4xl mb-3">💬</div>
          <h3 className="text-xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Atendimento IA</h3>
          <p className="text-gray-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Responda clientes com IA personalizada.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="text-4xl mb-3">🏠</div>
          <h3 className="text-xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Empreendimentos</h3>
          <p className="text-gray-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Gerencie todos os seus imóveis.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="text-4xl mb-3">📸</div>
          <h3 className="text-xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Upload</h3>
          <p className="text-gray-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Envie fotos, PDFs e documentos.</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MÓDULO ATENDIMENTO
// ============================================

function ModuloAtendimento() {
  const [mensagem, setMensagem] = useState('');
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
        body: JSON.stringify({ mensagem }),
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
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        💬 Central de Atendimento IA
      </h2>
      <textarea
        rows={4}
        className="w-full p-3 border rounded-xl text-gray-900"
        placeholder="Cole a mensagem do cliente..."
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      />
      <button
        onClick={handleEnviar}
        disabled={carregando || !mensagem}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl mt-4 disabled:opacity-50"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {carregando ? '⏳ Gerando...' : '🚀 Gerar Resposta'}
      </button>
      {resposta && (
        <div className="mt-6 bg-gray-900 rounded-xl p-6 border-2 border-orange-500">
          <p className="text-white whitespace-pre-wrap" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {resposta}
          </p>
        </div>
      )}
    </div>
  );
}

// ============================================
// MÓDULO EMPREENDIMENTOS
// ============================================

function ModuloEmpreendimentos() {
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

  if (carregando) return <p style={{ fontFamily: "'Cormorant Garamond', serif" }}>Carregando...</p>;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        🏠 Empreendimentos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lista.map((emp) => (
          <div key={emp.id} className="border rounded-xl p-4">
            <h3 className="text-lg font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {emp.nome}
            </h3>
            <p className="text-sm text-gray-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {emp.localizacao}
            </p>
            <p className="text-sm font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              R$ {emp.preco}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// MÓDULO UPLOAD
// ============================================

function ModuloUpload() {
  const [empreendimentos, setEmpreendimentos] = useState<any[]>([]);
  const [empreendimentoId, setEmpreendimentoId] = useState('');

  useEffect(() => {
    const carregar = async () => {
      const res = await fetch('/api/empreendimentos');
      const data = await res.json();
      setEmpreendimentos(data);
      if (data.length > 0) setEmpreendimentoId(data[0].id);
    };
    carregar();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !empreendimentoId) return;

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append('file', files[i]);
      formData.append('empreendimentoId', empreendimentoId);
      await fetch('/api/upload', { method: 'POST', body: formData });
    }
    alert('✅ Arquivos enviados!');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        📸 Upload
      </h2>
      <select
        className="w-full p-3 border rounded-xl text-gray-900"
        value={empreendimentoId}
        onChange={(e) => setEmpreendimentoId(e.target.value)}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {empreendimentos.map((emp) => (
          <option key={emp.id} value={emp.id}>{emp.nome}</option>
        ))}
      </select>
      <div className="border-2 border-dashed rounded-xl p-8 text-center mt-4">
        <input type="file" multiple className="hidden" id="uploadInput" onChange={handleUpload} />
        <label htmlFor="uploadInput" className="cursor-pointer">
          <div className="text-4xl mb-2">📂</div>
          <p className="text-gray-600" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Clique para selecionar arquivos
          </p>
        </label>
      </div>
    </div>
  );
}

// ============================================
// MÓDULO IMOVEL (SIMPLIFICADO)
// ============================================

function ModuloImovel() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        🏠 Detalhes do Imóvel
      </h2>
      <div className="bg-gray-100 rounded-xl p-8 text-center">
        <p className="text-gray-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Página de detalhes do imóvel (em desenvolvimento)
        </p>
      </div>
    </div>
  );
}

// ============================================
// MÓDULO LOGIN
// ============================================

function ModuloLogin() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        🔐 Login
      </h2>
      <form>
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-3 border rounded-xl mb-4 text-gray-900"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 border rounded-xl mb-4 text-gray-900"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        />
        <button
          className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
