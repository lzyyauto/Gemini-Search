import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, "../.env");

export function setupEnvironment() {
  const result = dotenv.config({ path: envPath });
  if (result.error) {
    console.warn(`Warning: Failed to load .env file from ${envPath}: ${result.error.message}`);
  }

  const googleApiKey = process.env.GOOGLE_API_KEY;
  if (!googleApiKey) {
    console.warn("Warning: GOOGLE_API_KEY environment variable is not set.");
  }

  return {
    GOOGLE_API_KEY: googleApiKey || "",
    NODE_ENV: process.env.NODE_ENV || "development",
  };
}
