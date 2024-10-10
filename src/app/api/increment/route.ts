import { NextResponse } from 'next/server';
import { incrementCounter, openDb } from '@/database';


export async function GET() {
  const newValue = await incrementCounter();
  return NextResponse.json({ value: newValue });
}

export async function POST() {
  const db = await openDb();
  await db.run('UPDATE counter SET value = value + 1 WHERE id = 1');
  const result = await db.get('SELECT value FROM counter WHERE id = 1');
  return NextResponse.json({ value: result ? result.value : 0 });
}
