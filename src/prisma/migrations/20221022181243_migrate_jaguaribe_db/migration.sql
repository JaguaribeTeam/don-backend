-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "dt_nascimento" TEXT NOT NULL,
    "tipo_sanguineo" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Instituicao" (
    "id_instituicao" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Instituicao_pkey" PRIMARY KEY ("id_instituicao")
);

-- CreateTable
CREATE TABLE "Orgao" (
    "id_orgao" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Orgao_pkey" PRIMARY KEY ("id_orgao")
);

-- CreateTable
CREATE TABLE "Doador" (
    "id_doador" TEXT NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "pretencao_doacao" BOOLEAN NOT NULL,

    CONSTRAINT "Doador_pkey" PRIMARY KEY ("id_doador")
);

-- CreateTable
CREATE TABLE "Doador_Orgao" (
    "id_doador" TEXT NOT NULL,
    "id_orgao" TEXT NOT NULL,

    CONSTRAINT "Doador_Orgao_pkey" PRIMARY KEY ("id_doador","id_orgao")
);

-- CreateTable
CREATE TABLE "Orgao_Instituicao" (
    "id_orgao" TEXT NOT NULL,
    "id_instituicao" TEXT NOT NULL,

    CONSTRAINT "Orgao_Instituicao_pkey" PRIMARY KEY ("id_orgao","id_instituicao")
);

-- CreateTable
CREATE TABLE "Receptor" (
    "id_receptor" SERIAL NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "tempo_fila_espera" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Receptor_pkey" PRIMARY KEY ("id_receptor")
);

-- CreateTable
CREATE TABLE "Receptor_Orgao" (
    "id_orgao" TEXT NOT NULL,
    "id_receptor" INTEGER NOT NULL,

    CONSTRAINT "Receptor_Orgao_pkey" PRIMARY KEY ("id_orgao","id_receptor")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Instituicao_cnpj_key" ON "Instituicao"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Instituicao_email_key" ON "Instituicao"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Orgao_nome_key" ON "Orgao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Doador_id_usuario_key" ON "Doador"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Receptor_id_usuario_key" ON "Receptor"("id_usuario");

-- AddForeignKey
ALTER TABLE "Doador" ADD CONSTRAINT "Doador_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doador_Orgao" ADD CONSTRAINT "Doador_Orgao_id_doador_fkey" FOREIGN KEY ("id_doador") REFERENCES "Doador"("id_doador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doador_Orgao" ADD CONSTRAINT "Doador_Orgao_id_orgao_fkey" FOREIGN KEY ("id_orgao") REFERENCES "Orgao"("id_orgao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orgao_Instituicao" ADD CONSTRAINT "Orgao_Instituicao_id_orgao_fkey" FOREIGN KEY ("id_orgao") REFERENCES "Orgao"("id_orgao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orgao_Instituicao" ADD CONSTRAINT "Orgao_Instituicao_id_instituicao_fkey" FOREIGN KEY ("id_instituicao") REFERENCES "Instituicao"("id_instituicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receptor" ADD CONSTRAINT "Receptor_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receptor_Orgao" ADD CONSTRAINT "Receptor_Orgao_id_orgao_fkey" FOREIGN KEY ("id_orgao") REFERENCES "Orgao"("id_orgao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receptor_Orgao" ADD CONSTRAINT "Receptor_Orgao_id_receptor_fkey" FOREIGN KEY ("id_receptor") REFERENCES "Receptor"("id_receptor") ON DELETE RESTRICT ON UPDATE CASCADE;
