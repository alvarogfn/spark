import Backend from "i18next-fs-backend";
import path from "node:path";
import { RemixI18Next } from "remix-i18next/server";

import i18n from "./i18n";

const i18nServer = new RemixI18Next({
  backend: Backend,
  detection: {
    fallbackLanguage: i18n.fallbackLng,
    supportedLanguages: i18n.supportedLngs,
  },
  i18next: {
    ...i18n,
    backend: {
      loadPath: path.resolve("./public/locales/{{lng}}/{{ns}}.json"),
    },
  },
});

export default i18nServer;
