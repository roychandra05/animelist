/*
  Warnings:

  - You are about to alter the column `user_email` on the `collection` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `collection` MODIFY `user_email` INTEGER NOT NULL;
