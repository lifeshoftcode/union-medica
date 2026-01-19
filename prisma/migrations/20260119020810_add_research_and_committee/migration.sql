-- CreateTable
CREATE TABLE "CommitteeMember" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT,
    "bio" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ResearchPublication" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "link" TEXT,
    "category" TEXT NOT NULL DEFAULT 'Regular',
    "publishedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authors" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "CommitteeMember_order_idx" ON "CommitteeMember"("order");

-- CreateIndex
CREATE INDEX "CommitteeMember_active_idx" ON "CommitteeMember"("active");

-- CreateIndex
CREATE INDEX "ResearchPublication_category_idx" ON "ResearchPublication"("category");

-- CreateIndex
CREATE INDEX "ResearchPublication_publishedDate_idx" ON "ResearchPublication"("publishedDate");

-- CreateIndex
CREATE INDEX "ResearchPublication_active_idx" ON "ResearchPublication"("active");
