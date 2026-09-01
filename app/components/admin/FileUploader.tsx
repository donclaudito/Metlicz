"use client";

import { useState } from 'react';

interface FileUploaderProps {
  empreendimentoId: string;
  onUploadComplete: (files: any[]) => void;
}

export default function FileUploader({ empreendimentoId, onUploadComplete }: FileUploaderProps) {
  const [arquivos, setArquivos] = useState<File[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [progresso, setProgresso] = useState(0);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setArquivos(prev => [...prev, ...files]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setArquivos(prev => [...prev, ...files]);
  };

  const removerArquivo = (index: number) => {
    setArquivos(prev => prev.filter((_, i) => i !== index));
  };

  const fazerUpload = async () => {
    if (arquivos.length === 0) return;

    setCarregando(true);
    setProgresso(0);

    const resultados: any[] = [];

    for (let i = 0; i < arquivos.length; i++) {
      const arquivo = arquivos[i];
      const formData = new FormData();
      formData.append('file', arquivo);
      formData.append('empreendimentoId', empreendimentoId);
      formData.append('tipo', arquivo.type);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();
        resultados.push({ ...data, nome: arquivo.name });
        setProgresso(Math.round(((i + 1) / arquivos.length) * 100));
      } catch (error) {
        console.error('Erro no upload:', error);
        alert(`Erro ao enviar ${arquivo.name}`);
      }
    }

    setCarregando(false);
    setArquivos([]);
    onUploadComplete(resultados);
    alert(`✅ ${resultados.length} arquivo(s) enviado(s) com sucesso!`);
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 transition hover:border-orange-400">
      <div
        className="text-center"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="text-4xl mb-2">📂</div>
        <p className="text-gray-600 font-medium">
          Arraste arquivos aqui ou clique para selecionar
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Suporta: PDF, IMAGEM, TXT, DOC, DOCX
        </p>

        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.gif,.webp,.txt,.doc,.docx"
          onChange={handleFileSelect}
          className="hidden"
          id="fileInput"
        />

        <label
          htmlFor="fileInput"
          className="mt-3 inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition cursor-pointer"
        >
          📤 Selecionar Arquivos
        </label>
      </div>

      {arquivos.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 mb-2">
            📋 Arquivos selecionados ({arquivos.length})
          </h4>

          <div className="space-y-2 max-h-40 overflow-y-auto">
            {arquivos.map((file, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 p-2 rounded"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">
                    {file.type.includes('image') ? '🖼️' :
                     file.type.includes('pdf') ? '📄' :
                     file.type.includes('text') ? '📝' : '📎'}
                  </span>
                  <span className="text-sm text-gray-700">{file.name}</span>
                  <span className="text-xs text-gray-400">
                    ({(file.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                <button
                  onClick={() => removerArquivo(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {carregando && (
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progresso}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Enviando... {progresso}%
              </p>
            </div>
          )}

          <button
            onClick={fazerUpload}
            disabled={carregando}
            className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition disabled:opacity-50"
          >
            {carregando ? '⏳ Enviando...' : '🚀 Enviar Arquivos'}
          </button>
        </div>
      )}
    </div>
  );
}
