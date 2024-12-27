import type { InitOptions } from "i18next";

export default {
  defaultNS: "common",
  fallbackLng: "en",
  react: { useSuspense: false },
  supportedLngs: ["en", "es"],
} satisfies InitOptions;
