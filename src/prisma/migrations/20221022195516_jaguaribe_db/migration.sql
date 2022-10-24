/*
  Warnings:

  - Added the required column `updated_at` to the `Doador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Doador_Orgao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Orgao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Orgao_Instituicao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Receptor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Receptor_Orgao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Doador" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Doador_Orgao" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Orgao" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Orgao_Instituicao" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Receptor" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Receptor_Orgao" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
