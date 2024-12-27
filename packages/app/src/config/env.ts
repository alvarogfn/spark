import { z } from "zod";

export const envSchema = z.object({
  PUBLIC_API_BASE: z.string().nonempty(),
});

export const env = envSchema.parse(import.meta.env);
