import "i18next";

import commonEn from "../../public/locales/en/common.json";
import homeEn from "../../public/locales/en/home.json";
import commonPt from "../../public/locales/pt/common.json";
import homePt from "../../public/locales/pt/home.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof commonEn | typeof commonPt;
      home: typeof homeEn | typeof homePt;
    };
  }
}
