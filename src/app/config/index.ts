import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT || 5000,
  database_url: process.env.DATABASE_URL,
  bycript_salt_rounds: process.env.BYCRIPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASSWORD,
};
