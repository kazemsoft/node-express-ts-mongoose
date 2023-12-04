const config =
  process.env.NODE_ENV !== "production" ? await import("dotenv") : null;

console.log(process.env.NODE_ENV);

if (config) config.config();
export const PORT = process.env.PORT || 2000;
