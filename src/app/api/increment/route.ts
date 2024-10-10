//handles the GET and POST requests when the increment button is pressed & returns the new value of the count as json

import { NextResponse } from 'next/server';
import { incrementCounter } from '@/database';



export async function GET() {
  const newValue = await incrementCounter();
  return NextResponse.json({ value: newValue });
}

export async function POST() {
  const newValue = await incrementCounter();
  return NextResponse.json({ value: newValue });
}