export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://neondb_owner:Q58YVDyRuBZf@ep-odd-fire-a67uyqzk.us-west-2.aws.neon.tech/cure_ai?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:Q58YVDyRuBZf@ep-odd-fire-a67uyqzk.us-west-2.aws.neon.tech/cure_ai?sslmode=require",
  },
};
