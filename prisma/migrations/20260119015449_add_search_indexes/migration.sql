-- CreateIndex
CREATE INDEX "Doctor_name_idx" ON "Doctor"("name");

-- CreateIndex
CREATE INDEX "Doctor_specialty_idx" ON "Doctor"("specialty");

-- CreateIndex
CREATE INDEX "Doctor_specialty_name_idx" ON "Doctor"("specialty", "name");
