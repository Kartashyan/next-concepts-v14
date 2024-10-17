"use client"

import { useTranslation } from "@/hooks/use-translation";

export function ClientSideTranslation() {
  const { t } = useTranslation();
  return <h1>{t("dynamic.title")}</h1>;
}