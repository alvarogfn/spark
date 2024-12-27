declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly HOSTNAME: string;
      readonly MODE: "dev" | "prod";
      readonly PORT: number;
    }
  }
}

export {};
