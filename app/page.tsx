"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [moduloAtual, setModuloAtual] = useState('home');

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {/* Cabeçalho com Logo e Navegação estilizada */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900 tracking-wide">METLICZ</span>
              <span className="text-xs text-gray-400 tracking-[0.2em] font-light uppercase">Imóveis</span>
            </div>

            {/* Navegação principal - estilo visual que você pediu */}
            <nav className="flex flex-wrap items-center gap-1 mt-2 sm:mt-0">
              <button
                onClick={() => setModuloAtual('home')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  moduloAtual === 'home'
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => setModuloAtual('atendimento')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  moduloAtual === 'atendimento'
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Atendimento IA
              </button>
              <button
                onClick={() => setModuloAtual('empreendimentos')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  moduloAtual === 'empreendimentos'
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Empreendimentos
              </button>
              <button
                onClick={() => setModuloAtual('upload')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  moduloAtual === 'upload'
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Upload
              </button>
              <button
                onClick={() => setModuloAtual('login')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  moduloAtual === 'login'
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Login
              </button>
              <a
                href="/admin"
                className="ml-2 px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-200 shadow-sm hover:shadow"
              >
                Admin
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal - Estrutura limpa e centralizada */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {moduloAtual === 'home' && <ModuloHome />}
        {moduloAtual === 'atendimento' && <ModuloAtendimento />}
        {moduloAtual === 'empreendimentos' && <ModuloEmpreendimentos />}
        {moduloAtual === 'upload' && <ModuloUpload />}
        {moduloAtual === 'login' && <ModuloLogin />}
      </main>
    </div>
  );
}

// ============================================
// Módulo Home - Visual limpo com cards de funcionalidades
// ============================================

function ModuloHome() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
          Bem-vinda, <span className="font-semibold text-orange-500">Cláudia</span>!
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-light">
          Seu sistema de gestão imobiliária com IA está pronto.
        </p>
      </div>

      {/* Cards das Funcionalidades - Organização clara */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { 
            icon: '💬', 
            title: 'Atendimento IA', 
            description: 'Respostas personalizadas com inteligência artificial para cada cliente.' 
          },
          { 
            icon: '🏠', 
            title: 'Empreendimentos', 
            description: 'Gestão completa de imóveis com acabamento de alto padrão.' 
          },
          { 
            icon: '📸', 
            title: 'Upload', 
            description: 'Envio simples de fotos, documentos e vídeos dos imóveis.' 
          }
        ].map((item, index) => (
          <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Módulo Atendimento IA
// ============================================

function ModuloAtendimento() {
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
    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
      <h2 className="text-2xl font-light text-gray-900 mb-6">Atendimento IA</h2>
      <div className="space-y-4">
        <textarea
          rows={4}
          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-gray-900"
          placeholder="Cole a mensagem do cliente..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <select
          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-gray-900"
          value={ddd}
          onChange={(e) => setDdd(e.target.value)}
        >
          <option value="">DDD do Cliente</option>
          <option value="11">São Paulo (11)</option>
          <option value="12">Caraguatatuba (12)</option>
          <option value="13">Santos (13)</option>
          <option value="19">Campinas (19)</option>
          <option value="21">Rio de Janeiro (21)</option>
          <option value="00">Outro</option>
        </select>
        <button
          onClick={handleEnviar}
          disabled={carregando || !mensagem}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50 shadow-sm hover:shadow"
        >
          {carregando ? 'Gerando...' : 'Gerar Resposta Personalizada'}
        </button>
        {resposta && (
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">{resposta}</p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(resposta);
                  alert('✅ Copiado!');
                }}
                className="text-sm text-gray-500 hover:text-gray-700 border border-gray-200 px-4 py-2 rounded-full transition-all"
              >
                Copiar
              </button>
              <button
                onClick={() => {
                  const numero = ddd === '11' ? '5511' : '5512';
                  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(resposta)}`, '_blank');
                }}
                className="text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-all"
              >
                Enviar WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// Módulo Empreendimentos
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

  if (carregando) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-sm">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-light text-gray-900 mb-8">Empreendimentos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {lista.map((emp) => (
          <div key={emp.id} className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-medium text-gray-900">{emp.nome}</h3>
              <span className="text-xs font-medium text-white bg-gray-900 px-3 py-1 rounded-full">
                {emp.tipo || 'Venda'}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-3">{emp.localizacao}</p>
            <p className="text-2xl font-light text-gray-900">R$ {emp.preco}</p>
            <div className="flex gap-2 mt-3">
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{emp.area}m²</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{emp.quartos} quartos</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{emp.unidades} unidades</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Módulo Upload
// ============================================

function ModuloUpload() {
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
    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
      <h2 className="text-2xl font-light text-gray-900 mb-6">Upload de Arquivos</h2>
      <div className="space-y-4">
        <select
          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-gray-900"
          value={empreendimentoId}
          onChange={(e) => setEmpreendimentoId(e.target.value)}
        >
          {empreendimentos.map((emp) => (
            <option key={emp.id} value={emp.id}>{emp.nome}</option>
          ))}
        </select>
        <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center hover:border-gray-300 transition-all">
          <input
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.gif,.webp,.pdf,.txt,.doc,.docx"
            className="hidden"
            id="uploadInput"
            onChange={handleUpload}
          />
          <label htmlFor="uploadInput" className="cursor-pointer block">
            <div className="text-5xl mb-4 text-gray-300">📂</div>
            <p className="text-gray-600 font-medium">Clique para selecionar arquivos</p>
            <p className="text-sm text-gray-400 mt-1">JPG, PNG, PDF, TXT, DOC, DOCX</p>
            <div className="mt-6 inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-full transition-all shadow-sm hover:shadow">
              {uploadando ? '⏳ Enviando...' : 'Selecionar Arquivos'}
            </div>
          </label>
        </div>
        {arquivos.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Arquivos ({arquivos.length})</h4>
            <div className="grid grid-cols-4 gap-3">
              {arquivos.map((arq, idx) => (
                <a
                  key={idx}
                  href={arq.caminho}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 p-4 rounded-xl text-center hover:bg-gray-100 transition-all"
                >
                  <div className="text-2xl">
                    {arq.nome.includes('.pdf') && '📄'}
                    {arq.nome.includes('.jpg') && '🖼️'}
                    {arq.nome.includes('.png') && '🖼️'}
                    {arq.nome.includes('.txt') && '📝'}
                    {arq.nome.includes('.doc') && '📎'}
                  </div>
                  <span className="text-xs text-gray-500 truncate block mt-1">{arq.nome}</span>
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
// Módulo Login
// ============================================

function ModuloLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isLogin ? '🔐 Login realizado!' : '✅ Conta criada!');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <span className="text-white text-xl font-bold">M</span>
          </div>
          <h2 className="text-2xl font-light text-gray-900 mt-4">
            {isLogin ? 'Acesse sua conta' : 'Crie sua conta'}
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            {isLogin ? 'Ainda não tem uma conta?' : 'Já tem uma conta?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-gray-700 font-medium hover:text-gray-900"
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
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-gray-900"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            required
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-gray-900"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-gray-900"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 rounded-xl transition-all shadow-sm hover:shadow"
          >
            {isLogin ? 'Entrar' : 'Registrar'}
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-6">
          Ao continuar, você concorda com nossos{' '}
          <a href="#" className="text-gray-600 hover:text-gray-900">Termos de Serviço</a>
          {' '}e{' '}
          <a href="#" className="text-gray-600 hover:text-gray-900">Política de Privacidade</a>
        </p>
      </div>
    </div>
  );
}