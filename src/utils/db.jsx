import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon(
  "postgresql://neondb_owner:Q58YVDyRuBZf@ep-odd-fire-a67uyqzk.us-west-2.aws.neon.tech/cure_ai?sslmode=require",
);

export const db = drizzle(sql, { schema });
