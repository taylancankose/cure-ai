export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",

  dbCredentials: {
    url: import.meta.env.VITE_GEMINI_API_KEY,
    connectionString: import.meta.env.VITE_GEMINI_API_KEY,
  },
};
