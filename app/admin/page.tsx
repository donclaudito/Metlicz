"use client";

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [empreendimentos, setEmpreendimentos] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState({
    id: '',
    nome: '',
    slug: '',
    localizacao: '',
    descricao: '',
    unidades: '',
    area: '',
    quartos: '',
    suites: '',
    vagas: '',
    entrada: '',
    parcelas: '',
    preco: '',
    caracteristicas: '',
    linkInstagram: '',
    linkYouTube: ''
  });

  const carregarEmpreendimentos = async () => {
    try {
      const response = await fetch('/api/empreendimentos');
      const data = await response.json();
      setEmpreendimentos(data);
      setCarregando(false);
    } catch (error) {
      console.error('Erro ao carregar:', error);
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarEmpreendimentos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      ...form,
      unidades: parseInt(form.unidades) || 0,
      quartos: parseInt(form.quartos) || 0,
      suites: parseInt(form.suites) || 0,
      vagas: parseInt(form.vagas) || 0,
      caracteristicas: form.caracteristicas.split(',').map(c => c.trim()).filter(c => c)
    };

    const response = await fetch('/api/empreendimentos', {
      method: editando ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert(editando ? '✅ Empreendimento atualizado!' : '✅ Empreendimento criado!');
      resetForm();
      carregarEmpreendimentos();
    } else {
      alert('❌ Erro ao salvar!');
    }
  };

  const resetForm = () => {
    setForm({
      id: '',
      nome: '',
      slug: '',
      localizacao: '',
      descricao: '',
      unidades: '',
      area: '',
      quartos: '',
      suites: '',
      vagas: '',
      entrada: '',
      parcelas: '',
      preco: '',
      caracteristicas: '',
      linkInstagram: '',
      linkYouTube: ''
    });
    setEditando(false);
  };

  const handleEdit = (item: any) => {
    setForm({
      id: item.id,
      nome: item.nome,
      slug: item.slug,
      localizacao: item.localizacao,
      descricao: item.descricao || '',
      unidades: item.unidades.toString(),
      area: item.area,
      quartos: item.quartos.toString(),
      suites: item.suites.toString(),
      vagas: item.vagas.toString(),
      entrada: item.entrada,
      parcelas: item.parcelas,
      preco: item.preco,
      caracteristicas: item.caracteristicas.join(', '),
      linkInstagram: item.linkInstagram || '',
      linkYouTube: item.linkYouTube || ''
    });
    setEditando(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este empreendimento?')) return;

    await fetch(`/api/empreendimentos?id=${id}`, { method: 'DELETE' });
    carregarEmpreendimentos();
  };

  return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* CABEÇALHO COM BOTÃO DE VOLTAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827' }}>🏗️ Admin - Empreendimentos</h1>
            <p style={{ color: '#4b5563', marginTop: '4px' }}>Gerencie todos os empreendimentos da Metlicz</p>
          </div>
          
          {/* 👇 BOTÃO VOLTAR PARA FRONTPAGE */}
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#f97316',
              color: '#ffffff',
              fontWeight: '600',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
          >
            <span>🏠</span> Voltar para Frontpage
          </a>
        </div>

        {/* FORMULÁRIO */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
            {editando ? '✏️ Editar Empreendimento' : '➕ Novo Empreendimento'}
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Nome *</label>
              <input
                type="text"
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Ex: SAFIRA"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Slug *</label>
              <input
                type="text"
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                placeholder="Ex: safira"
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Localização *</label>
              <input
                type="text"
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.localizacao}
                onChange={(e) => setForm({ ...form, localizacao: e.target.value })}
                placeholder="Ex: Praia de Aruã, Caraguatatuba"
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Descrição</label>
              <textarea
                rows={3}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none',
                  resize: 'vertical'
                }}
                value={form.descricao}
                onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                placeholder="Descreva o empreendimento..."
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Unidades</label>
              <input
                type="number"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.unidades}
                onChange={(e) => setForm({ ...form, unidades: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Área (m²)</label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                placeholder="Ex: 118"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Quartos</label>
              <input
                type="number"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.quartos}
                onChange={(e) => setForm({ ...form, quartos: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Suítes</label>
              <input
                type="number"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.suites}
                onChange={(e) => setForm({ ...form, suites: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Vagas</label>
              <input
                type="number"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.vagas}
                onChange={(e) => setForm({ ...form, vagas: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Preço (R$)</label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.preco}
                onChange={(e) => setForm({ ...form, preco: e.target.value })}
                placeholder="Ex: 850.000"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Entrada</label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.entrada}
                onChange={(e) => setForm({ ...form, entrada: e.target.value })}
                placeholder="Ex: 20%"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Parcelas</label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.parcelas}
                onChange={(e) => setForm({ ...form, parcelas: e.target.value })}
                placeholder="Ex: até 60x"
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Características (separadas por vírgula)</label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.caracteristicas}
                onChange={(e) => setForm({ ...form, caracteristicas: e.target.value })}
                placeholder="Ex: Vista para o mar, Acabamento de luxo, Piscina"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Link Instagram</label>
              <input
                type="url"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.linkInstagram}
                onChange={(e) => setForm({ ...form, linkInstagram: e.target.value })}
                placeholder="https://instagram.com/..."
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a5f', marginBottom: '4px' }}>Link YouTube</label>
              <input
                type="url"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003366',
                  backgroundColor: '#e5e7eb',
                  outline: 'none'
                }}
                value={form.linkYouTube}
                onChange={(e) => setForm({ ...form, linkYouTube: e.target.value })}
                placeholder="https://youtube.com/..."
              />
            </div>

            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '12px' }}>
              <button
                type="submit"
                style={{ backgroundColor: '#f97316', color: '#ffffff', fontWeight: '600', padding: '10px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
              >
                {editando ? '💾 Atualizar' : '➕ Cadastrar'}
              </button>
              {editando && (
                <button
                  type="button"
                  onClick={resetForm}
                  style={{ backgroundColor: '#d1d5db', color: '#1f2937', fontWeight: '600', padding: '10px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        {/* LISTA */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', padding: '24px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
            📋 Empreendimentos Cadastrados ({empreendimentos.length})
          </h2>

          {carregando ? (
            <p style={{ color: '#6b7280' }}>Carregando...</p>
          ) : empreendimentos.length === 0 ? (
            <p style={{ color: '#6b7280' }}>Nenhum empreendimento cadastrado.</p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f3f4f6' }}>
                    <th style={{ textAlign: 'left', padding: '12px', fontSize: '14px', fontWeight: '600', color: '#374151' }}>Nome</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontSize: '14px', fontWeight: '600', color: '#374151' }}>Local</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontSize: '14px', fontWeight: '600', color: '#374151' }}>Preço</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontSize: '14px', fontWeight: '600', color: '#374151' }}>Fotos</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontSize: '14px', fontWeight: '600', color: '#374151' }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {empreendimentos.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '12px', fontWeight: '500', color: '#111827' }}>{item.nome}</td>
                      <td style={{ padding: '12px', fontSize: '14px', color: '#4b5563' }}>{item.localizacao}</td>
                      <td style={{ padding: '12px', fontSize: '14px', color: '#111827' }}>R$ {item.preco}</td>
                      <td style={{ padding: '12px' }}>
                        <button
                          onClick={() => alert('📸 Fotos do ' + item.nome)}
                          style={{ backgroundColor: '#3b82f6', color: '#ffffff', fontSize: '12px', padding: '4px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                        >
                          📸 {item.fotos?.length || 0}
                        </button>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={() => handleEdit(item)}
                            style={{ backgroundColor: '#3b82f6', color: '#ffffff', fontSize: '12px', padding: '4px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            style={{ backgroundColor: '#ef4444', color: '#ffffff', fontSize: '12px', padding: '4px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}