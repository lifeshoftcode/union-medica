-- CreateTable
CREATE TABLE "Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'card',
    "isReverse" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "Service_type_idx" ON "Service"("type");

-- CreateIndex
CREATE INDEX "Service_order_idx" ON "Service"("order");

-- CreateIndex
CREATE INDEX "Service_active_idx" ON "Service"("active");
