/* 
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database | null = null;

export async function openDb(): Promise<Database> {
  if (db) {
    return db;
  }

  db = await open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  });
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS counter (
      id INTEGER PRIMARY KEY,
      value INTEGER NOT NULL DEFAULT 0
    )
  `);
  
  return db;
}

export async function incrementCounter(): Promise<number> {
  const db = await openDb();
  await db.run('INSERT OR IGNORE INTO counter (id, value) VALUES (1, 0)');
  await db.run('UPDATE counter SET value = value + 1 WHERE id = 1');
  const { value } = await db.get('SELECT value FROM counter WHERE id = 1') as { value: number };
  return value;
}
export async function getCounterValue(): Promise<number> {
  const db = await openDb();
  const result = await db.get('SELECT value FROM counter WHERE id = 1') as { value: number } | undefined;
  return result?.value ?? 0;
}  
*/
//commented out the old database 



import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});


export async function initDb() {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS counter (
      id INTEGER PRIMARY KEY,
      value INTEGER NOT NULL DEFAULT 0
    )
  `);
}

// Function to increment the counter and return the new value
export async function incrementCounter(): Promise<number> {
  // Insert a row with id 1 and value 0 if it doesn't exist
  await client.execute('INSERT OR IGNORE INTO counter (id, value) VALUES (1, 0)');
  
  // Increment the value of the counter
  await client.execute('UPDATE counter SET value = value + 1 WHERE id = 1');
  
  // Retrieve the updated counter value
  const { rows } = await client.execute('SELECT value FROM counter WHERE id = 1');
  
  // Return the new counter value
  return rows[0].value as number;
}
