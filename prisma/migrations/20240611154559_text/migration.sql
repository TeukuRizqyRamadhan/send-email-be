/*
  Warnings:

  - You are about to drop the column `body` on the `Email` table. All the data in the column will be lost.
  - Added the required column `text` to the `Email` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Email" DROP COLUMN "body",
ADD COLUMN     "text" TEXT NOT NULL;
