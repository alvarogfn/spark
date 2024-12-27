import type { InitOptions } from "i18next";

export default {
  defaultNS: "common",
  fallbackLng: "en",
  fallbackNS: "common",
  react: { useSuspense: false },
  supportedLngs: ["en", "pt"],
} satisfies InitOptions;
