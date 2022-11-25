-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "is_doador" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_receptor" BOOLEAN NOT NULL DEFAULT false;
