import path from "node:path";
import { env } from "@/env";

export const PUBLIC_FOLDER = path.join(__dirname, "../public");

export const URL = env.NEXT_PUBLIC_APP_URL
  ? env.NEXT_PUBLIC_APP_URL
  : env.VERCEL_URL
    ? `https://${env.VERCEL_URL}`
    : "http://localhost:3000"; // Default local URL

export const WEBSITE = {
  title: "GitHub Users Global Ranking",
  description:
    "Github Global User Ranking, Global Warehouse Star Ranking (Github Action is automatically updated daily).",
  keywords: [
    "github",
    "git",
    "github-api",
    "github-pages",
    "ranking",
    "github-rank",
    "github-star",
  ],
  ur: URL,
};
