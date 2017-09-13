import { IDatabase } from 'pg-promise';
import * as pgp from 'pg-promise';

export default () => {
  const db = pgp()(process.env.DATABASE_URL);
  return db.none(`
    CREATE TABLE IF NOT EXISTS tickets(
      id serial PRIMARY KEY,
      title text NOT NULL
    );
    CREATE TABLE IF NOT EXISTS projects(
      id serial PRIMARY KEY,
      name text UNIQUE NOT NULL
    );
    CREATE TABLE IF NOT EXISTS projects_tickets(
      project_id integer NOT NULL REFERENCES projects (id) ON DELETE CASCADE,
      ticket_id integer NOT NULL REFERENCES tickets (id) ON DELETE CASCADE
    );
  `).then(() => db);
};

export type Database = IDatabase<any>