-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Doctor" (
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
    "location" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_Doctor" ("externalId", "id", "image", "insurance", "location", "name", "phone", "rating", "specialty", "telemedicine", "title") SELECT "externalId", "id", "image", "insurance", "location", "name", "phone", "rating", "specialty", "telemedicine", "title" FROM "Doctor";
DROP TABLE "Doctor";
ALTER TABLE "new_Doctor" RENAME TO "Doctor";
CREATE UNIQUE INDEX "Doctor_externalId_key" ON "Doctor"("externalId");
CREATE INDEX "Doctor_name_idx" ON "Doctor"("name");
CREATE INDEX "Doctor_specialty_idx" ON "Doctor"("specialty");
CREATE INDEX "Doctor_active_idx" ON "Doctor"("active");
CREATE INDEX "Doctor_specialty_name_idx" ON "Doctor"("specialty", "name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
