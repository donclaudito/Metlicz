import { NextResponse } from 'next/server';
import { writeFile, mkdir, readdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const empreendimentoId = formData.get('empreendimentoId') as string;
    const tipo = formData.get('tipo') as string;

    if (!file) {
      return NextResponse.json({ error: 'Arquivo não enviado' }, { status: 400 });
    }

    if (!empreendimentoId) {
      return NextResponse.json({ error: 'ID do empreendimento não informado' }, { status: 400 });
    }

    // Validar tipo de arquivo
    const tiposPermitidos = [
      'image/jpeg', 'image/png', 'image/gif', 'image/webp',
      'application/pdf',
      'text/plain',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!tiposPermitidos.includes(file.type)) {
      return NextResponse.json(
        { error: 'Tipo de arquivo não permitido' },
        { status: 400 }
      );
    }

    // Validar tamanho (10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Arquivo muito grande (máximo 10MB)' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = join(process.cwd(), 'public', 'uploads', empreendimentoId);
    await mkdir(uploadDir, { recursive: true });

    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name}`;
    const filepath = join(uploadDir, filename);

    await writeFile(filepath, buffer);

    // Salvar registro (em memória)
    const metadata = {
      id: timestamp.toString(),
      nome: file.name,
      tamanho: file.size,
      tipo: file.type,
      caminho: `/uploads/${empreendimentoId}/${filename}`,
      empreendimentoId,
      data: new Date().toISOString()
    };

    return NextResponse.json(metadata, { status: 201 });

  } catch (error) {
    console.error('Erro no upload:', error);
    return NextResponse.json(
      { error: 'Erro ao fazer upload' },
      { status: 500 }
    );
  }
}

// ============================================
// GET - LISTAR ARQUIVOS DE UM EMPREENDIMENTO
// ============================================

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const empreendimentoId = searchParams.get('empreendimentoId');

    if (!empreendimentoId) {
      return NextResponse.json(
        { error: 'ID do empreendimento não informado' },
        { status: 400 }
      );
    }

    const uploadDir = join(process.cwd(), 'public', 'uploads', empreendimentoId);
    const files = await readdir(uploadDir).catch(() => []);

    const arquivos = files.map(filename => ({
      nome: filename,
      caminho: `/uploads/${empreendimentoId}/${filename}`
    }));

    return NextResponse.json(arquivos);

  } catch (error) {
    console.error('Erro ao listar arquivos:', error);
    return NextResponse.json(
      { error: 'Erro ao listar arquivos' },
      { status: 500 }
    );
  }
}
