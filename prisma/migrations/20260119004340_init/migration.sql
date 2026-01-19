-- CreateTable
CREATE TABLE "Doctor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "externalId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "specialty" TEXT NOT NULL,
    "image" TEXT,
    "rating" REAL DEFAULT 0,
    "phone" TEXT,
    "insurance" BOOLEAN NOT NULL DEFAULT true,
    "telemedicine" BOOLEAN NOT NULL DEFAULT false,
    "location" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_externalId_key" ON "Doctor"("externalId");
