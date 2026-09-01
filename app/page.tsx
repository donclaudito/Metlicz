"use client";

import { useState, useEffect } from 'react';
import ImovelDetalhes from '@/components/ImovelDetalhes';

export default function Home() {
  const [moduloAtual, setModuloAtual] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-md border-b-4 border-orange-500 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-800 tracking-tight">METLICZ</span>
              <span className="text-sm font-light text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">IMÓWIEŚ</span>
            </div>
            <nav className="flex flex-wrap gap-2">
              <button
                onClick={() => setModuloAtual('home')}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  moduloAtual === 'home'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
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
              >
                🏠 Detalhes do Imóvel
              </button>
              <button
                onClick={() => setModuloAtual('login')}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  moduloAtual === 'login'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🔐 Login
              </button>
              <a
                href="/admin"
                target="_blank"
                className="px-4 py-2 rounded-lg transition font-medium bg-blue-500 text-white hover:bg-blue-600"
              >
                ⚙️ Admin
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {moduloAtual === 'home' && <ModuloHome />}
        {moduloAtual === 'atendimento' && <ModuloAtendimento />}
        {moduloAtual === 'empreendimentos' && <ModuloEmpreendimentos />}
        {moduloAtual === 'upload' && <ModuloUpload />}
        {moduloAtual === 'login' && <ModuloLogin />}
        {moduloAtual === 'imovel' && <ImovelDetalhes imovelId="9f83168a-6ac7-4a57-acf2-00ccf4c28830" />}
      </main>
    </div>
  );
}

// ============================================
// MÓDULO: HOME
// ============================================

function ModuloHome() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">🏖️ Bem-vinda, Cláudia!</h1>
        <p className="text-lg md:text-xl opacity-90">Seu sistema de gestão imobiliária com IA está pronto para usar.</p>
        <p className="text-md opacity-80 mt-2">Caraguatatuba - Litoral Norte SP</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <div className="text-4xl mb-3">💬</div>
          <h3 className="text-xl font-semibold text-gray-800">Atendimento IA</h3>
          <p className="text-gray-500 text-sm mt-2">Responda clientes com IA personalizada.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <div className="text-4xl mb-3">🏠</div>
          <h3 className="text-xl font-semibold text-gray-800">Empreendimentos</h3>
          <p className="text-gray-500 text-sm mt-2">Gerencie todos os seus imóveis.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <div className="text-4xl mb-3">📸</div>
          <h3 className="text-xl font-semibold text-gray-800">Upload de Arquivos</h3>
          <p className="text-gray-500 text-sm mt-2">Envie fotos, PDFs e documentos.</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MÓDULO: ATENDIMENTO
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
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">💬 Central de Atendimento IA</h2>
      <p className="text-gray-500 mb-6">Cole a mensagem do cliente e veja a resposta personalizada.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">📩 Mensagem do Lead</label>
          <textarea
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 text-gray-900"
            placeholder="Cole aqui a mensagem do cliente..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">📱 DDD do Cliente</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 text-gray-900"
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
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition disabled:opacity-50"
        >
          {carregando ? '⏳ Gerando resposta...' : '🚀 Gerar Resposta Personalizada'}
        </button>

        {resposta && (
          <div className="mt-6 bg-gray-900 rounded-xl p-6 border-2 border-orange-500 max-h-96 overflow-y-auto">
            <p className="text-white whitespace-pre-wrap">{resposta}</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(resposta);
                  alert('✅ Resposta copiada!');
                }}
                className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium"
              >
                📋 Copiar
              </button>
              <button
                onClick={() => {
                  const numero = ddd === '11' ? '5511' : '5512';
                  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(resposta)}`, '_blank');
                }}
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
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
// MÓDULO: EMPREENDIMENTOS
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

  if (carregando) return <p className="text-gray-500">Carregando...</p>;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">🏠 Empreendimentos</h2>
      <p className="text-gray-500 mb-6">Lista de todos os imóveis cadastrados.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lista.map((emp) => (
          <div key={emp.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
            <h3 className="text-lg font-bold text-gray-800">{emp.nome}</h3>
            <p className="text-sm text-gray-500">{emp.localizacao}</p>
            <p className="text-sm text-gray-700 font-semibold mt-1">R$ {emp.preco}</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{emp.area}m²</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{emp.quartos} quartos</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{emp.unidades} unidades</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// MÓDULO: UPLOAD
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
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">📸 Upload de Arquivos</h2>
      <p className="text-gray-500 mb-6">Envie fotos, PDFs, TXTs e DOCs dos empreendimentos.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">🏠 Empreendimento</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-xl text-gray-900"
            value={empreendimentoId}
            onChange={(e) => setEmpreendimentoId(e.target.value)}
          >
            {empreendimentos.map((emp) => (
              <option key={emp.id} value={emp.id}>{emp.nome}</option>
            ))}
          </select>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-400 transition">
          <input
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.gif,.webp,.pdf,.txt,.doc,.docx"
            className="hidden"
            id="uploadInput"
            onChange={handleUpload}
          />
          <label htmlFor="uploadInput" className="cursor-pointer block">
            <div className="text-5xl mb-3">📂</div>
            <p className="text-gray-600 font-medium">Clique para selecionar arquivos</p>
            <p className="text-sm text-gray-400">JPG, PNG, PDF, TXT, DOC, DOCX</p>
            <div className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition">
              {uploadando ? '⏳ Enviando...' : '📤 Selecionar Arquivos'}
            </div>
          </label>
        </div>

        {arquivos.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">📋 Arquivos ({arquivos.length})</h4>
            <div className="grid grid-cols-4 gap-2">
              {arquivos.map((arq, idx) => (
                <a
                  key={idx}
                  href={arq.caminho}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-lg text-center hover:bg-gray-200 transition"
                >
                  <div className="text-2xl">
                    {arq.nome.includes('.pdf') && '📄'}
                    {arq.nome.includes('.jpg') && '🖼️'}
                    {arq.nome.includes('.png') && '🖼️'}
                    {arq.nome.includes('.txt') && '📝'}
                    {arq.nome.includes('.doc') && '📎'}
                  </div>
                  <span className="text-xs text-gray-600 truncate block">{arq.nome}</span>
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
// MÓDULO: LOGIN
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
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-800 tracking-tight">METLICZ</span>
              <span className="text-sm font-light text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">IMÓWIEŚ</span>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Acesse sua conta' : 'Crie sua conta'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? 'Ainda não tem uma conta?' : 'Já tem uma conta?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 font-medium text-orange-500 hover:text-orange-600"
            >
              {isLogin ? 'Registre-se' : 'Faça login'}
            </button>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {!isLogin && (
              <input
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <input
              type="email"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            {isLogin ? 'Entrar' : 'Registrar'}
          </button>
        </form>

        <div className="text-center text-xs text-gray-500">
          <p>
            Ao continuar, você concorda com nossos{' '}
            <a href="#" className="text-orange-500 hover:text-orange-600">Termos de Serviço</a>
            {' '}e{' '}
            <a href="#" className="text-orange-500 hover:text-orange-600">Política de Privacidade</a>
          </p>
          <p className="mt-2">© 2025 Metlicz. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}