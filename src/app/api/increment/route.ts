import { NextResponse } from 'next/server';
import { openDb } from '@/database';

export async function GET() {
  const db = await openDb();
  const result = await db.get('SELECT value FROM counter WHERE id = 1');
  return NextResponse.json({ value: result ? result.value : 0 });
}

export async function POST() {
  const db = await openDb();
  await db.run('UPDATE counter SET value = value + 1 WHERE id = 1');
  const result = await db.get('SELECT value FROM counter WHERE id = 1');
  return NextResponse.json({ value: result ? result.value : 0 });
}
