import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db:any = null;

async function openDb() {
  if (!db) {
    db = await open({
      filename: './counter.sqlite',
      driver: sqlite3.Database
    });
    await db.exec(`CREATE TABLE IF NOT EXISTS counter (id INTEGER PRIMARY KEY, value INTEGER)`);
    
    // Initialize the counter if it doesn't exist
    const count = await db.get('SELECT value FROM counter WHERE id = 1');
    if (!count) {
      await db.run('INSERT INTO counter (id, value) VALUES (1, 0)');
    }
  }
  return db;
}

export { openDb };
