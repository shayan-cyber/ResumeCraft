/*
  Warnings:

  - You are about to drop the column `skils_details` on the `ResumeData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ResumeData" DROP COLUMN "skils_details",
ADD COLUMN     "skills_details" TEXT[];
