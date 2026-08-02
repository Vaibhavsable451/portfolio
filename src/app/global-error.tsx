'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold rounded-xl transition-all"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
