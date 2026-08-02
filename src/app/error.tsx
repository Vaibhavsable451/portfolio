'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold rounded-xl transition-all"
      >
        Try again
      </button>
    </div>
  );
}
