'use client';

import {useEffect } from 'react';
import CounterDisplay from '@/components/CounterDisplay';
import { initDb } from '@/database';

export default function Home() {

  // This useEffect hook runs once when the component mounts
  useEffect(() => {
    initDb();
  }, []);




  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <CounterDisplay/>
      </main>
    </div>
  );
}
