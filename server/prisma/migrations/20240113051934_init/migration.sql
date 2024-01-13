-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWallets" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserWallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Locations" (
    "id" TEXT NOT NULL,
    "latitudeStart" DOUBLE PRECISION NOT NULL,
    "longitudeStart" DOUBLE PRECISION NOT NULL,
    "latitudeEnd" DOUBLE PRECISION NOT NULL,
    "longitudeEnd" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Challenges" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isFeeApplied" BOOLEAN NOT NULL,
    "feeAmount" DOUBLE PRECISION NOT NULL,
    "locationId" TEXT NOT NULL,
    "peopleLimit" INTEGER NOT NULL,
    "isChallengeCompleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Challenges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserChallenges" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserChallenges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserChallengeHistories" (
    "id" TEXT NOT NULL,
    "userChallengeId" TEXT NOT NULL,
    "timer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserChallengeHistories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "UserWallets" ADD CONSTRAINT "UserWallets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Challenges" ADD CONSTRAINT "Challenges_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChallenges" ADD CONSTRAINT "UserChallenges_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChallenges" ADD CONSTRAINT "UserChallenges_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenges"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChallengeHistories" ADD CONSTRAINT "UserChallengeHistories_userChallengeId_fkey" FOREIGN KEY ("userChallengeId") REFERENCES "UserChallenges"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
