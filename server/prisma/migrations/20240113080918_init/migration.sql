/*
  Warnings:

  - Added the required column `gender` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Challenges" ADD COLUMN     "imgUrl" TEXT,
ALTER COLUMN "feeAmount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "aboutMe" TEXT,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "imgUrl" TEXT,
ADD COLUMN     "name" TEXT NOT NULL;
