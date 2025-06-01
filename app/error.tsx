'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
      <button onClick={() => reset()} className="btn">
        Try again
      </button>
    </div>
  );
}
