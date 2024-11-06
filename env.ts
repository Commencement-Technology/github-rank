import { createEnv } from "@t3-oss/env-nextjs";
import "dotenv/config";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
  },
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    VERCEL_URL: z.string().optional(),
    GITHUB_TOKEN: z.string().optional(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    VERCEL_URL: process.env.VERCEL_URL,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
