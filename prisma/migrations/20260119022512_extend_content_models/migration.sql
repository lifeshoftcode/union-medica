-- CreateTable
CREATE TABLE "StaffMember" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT,
    "type" TEXT NOT NULL,
    "bio" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ContentBlock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "page" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "image" TEXT,
    "link" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "StaffMember_type_idx" ON "StaffMember"("type");

-- CreateIndex
CREATE INDEX "StaffMember_order_idx" ON "StaffMember"("order");

-- CreateIndex
CREATE INDEX "StaffMember_active_idx" ON "StaffMember"("active");

-- CreateIndex
CREATE INDEX "ContentBlock_page_section_idx" ON "ContentBlock"("page", "section");

-- CreateIndex
CREATE INDEX "ContentBlock_order_idx" ON "ContentBlock"("order");

-- CreateIndex
CREATE INDEX "ContentBlock_active_idx" ON "ContentBlock"("active");
