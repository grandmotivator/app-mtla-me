"use client";

import { useTranslations } from "@/shared/lib/hooks";

export const Loader = () => {
  const Loader = () => {
    const translations = useTranslations();

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>{translations.common.title}</div>
      </div>
    )
  };

  return Loader;
};
