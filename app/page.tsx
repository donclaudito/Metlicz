"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [moduloAtual, setModuloAtual] = useState('home');

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {/* HEADER ELEGANTE */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 tracking-wide">METLICZ</span>
                <span className="block text-[10px] text-gray-400 tracking-[0.2em] font-light uppercase">Imóveis</span>
              </div>
            </div>

            {/* MENU */}
            <nav className="hidden md:flex items-center gap-1">
              {['home', 'atendimento', 'empreendimentos', 'upload', 'login'].map((modulo) => (
                <button
                  key={modulo}
                  onClick={() => setModuloAtual(modulo)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    moduloAtual === modulo
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {modulo === 'home' && 'Início'}
                  {modulo === 'atendimento' && '💬 IA'}
                  {modulo === 'empreendimentos' && '🏠 Imóveis'}
                  {modulo === 'upload' && '📸 Upload'}
                  {modulo === 'login' && '🔐 Login'}
                </button>
              ))}
              <a href="/admin" className="ml-2 px-5 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-200 shadow-sm hover:shadow">
                Admin
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* CONTEÚDO */}
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
// HOME
// ============================================

function ModuloHome() {
  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* HERO */}
      <div className="text-center space-y-6 py-8">
        <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-500">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          Sistema Online
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
          Bem-vinda, <span className="font-semibold text-orange-500">Cláudia</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
          Seu sistema de gestão imobiliária com inteligência artificial para 
          <span className="text-gray-700 font-medium"> Caraguatatuba</span> e 
          <span className="text-gray-700 font-medium"> Litoral Norte</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-sm hover:shadow">
            Explorar Imóveis
          </button>
          <button className="px-8 py-3 border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-all">
            Ver Demonstração
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: '💬', title: 'Atendimento IA', description: 'Respostas personalizadas com inteligência artificial para cada cliente.', color: 'orange' },
          { icon: '🏠', title: 'Empreendimentos', description: 'Gestão completa de imóveis com acabamento de alto padrão.', color: 'blue' },
          { icon: '📸', title: 'Upload de Arquivos', description: 'Envio simples de fotos, documentos e vídeos dos imóveis.', color: 'purple' }
        ].map((item, index) => (
          <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-${item.color}-50`}>
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/* ESTATÍSTICAS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
        {[
          { value: '12', label: 'Imóveis Ativos', color: 'text-orange-500' },
          { value: '5', label: 'Leads Hoje', color: 'text-blue-500' },
          { value: '3', label: 'Visitas Agendadas', color: 'text-green-500' },
          { value: 'R$ 2.5M', label: 'Em Vendas', color: 'text-purple-500' }
        ].map((stat, index) => (
          <div key={index} className="text-center p-4">
            <div className={`text-3xl font-semibold ${stat.color}`}>{stat.value}</div>
            <div className="text-sm text-gray-400 font-light">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// ATENDIMENTO
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
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-xl">
          💬
        </div>
        <div>
          <h2 className="text-2xl font-light text-gray-900">Atendimento IA</h2>
          <p className="text-sm text-gray-400 font-light">Respostas personalizadas com inteligência artificial</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Mensagem do Lead</label>
          <textarea
            rows={4}
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-gray-900"
            placeholder="Cole aqui a mensagem do cliente..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">DDD do Cliente</label>
          <select
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-gray-900"
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
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50 shadow-sm hover:shadow"
        >
          {carregando ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Gerando...
            </span>
          ) : (
            'Gerar Resposta'
          )}
        </button>

        {resposta && (
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-medium text-gray-400">✨ Resposta</span>
            </div>
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
// EMPREENDIMENTOS
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
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">
          🏠
        </div>
        <div>
          <h2 className="text-2xl font-light text-gray-900">Empreendimentos</h2>
          <p className="text-sm text-gray-400 font-light">Lista de todos os imóveis cadastrados</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {lista.map((emp) => (
          <div key={emp.id} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
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
// UPLOAD
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
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-xl">
          📸
        </div>
        <div>
          <h2 className="text-2xl font-light text-gray-900">Upload de Arquivos</h2>
          <p className="text-sm text-gray-400 font-light">Envie fotos, PDFs, TXTs e DOCs</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Empreendimento</label>
          <select
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-gray-900"
            value={empreendimentoId}
            onChange={(e) => setEmpreendimentoId(e.target.value)}
          >
            {empreendimentos.map((emp) => (
              <option key={emp.id} value={emp.id}>{emp.nome}</option>
            ))}
          </select>
        </div>

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
// LOGIN
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
