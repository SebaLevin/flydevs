import { config } from "dotenv";

const { parsed } = config();

export const {
  DB,
  PORT,
  PROD,
  SECRET,
  MODE,
  IN_PROD = MODE !== "prod",
  BASE_URL = `http://localhost:${PORT}`,
} = parsed;
