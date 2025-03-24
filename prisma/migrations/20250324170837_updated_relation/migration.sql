/*
  Warnings:

  - You are about to drop the column `title` on the `PdfSummary` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `PdfSummary` table. All the data in the column will be lost.
  - Added the required column `userEmail` to the `PdfSummary` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PdfSummary" DROP CONSTRAINT "PdfSummary_userId_fkey";

-- AlterTable
ALTER TABLE "PdfSummary" DROP COLUMN "title",
DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PdfSummary" ADD CONSTRAINT "PdfSummary_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
