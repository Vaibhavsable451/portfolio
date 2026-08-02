import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-6 text-center">
      <h1 className="text-6xl font-bold text-amber-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20"
      >
        Return to Home
      </Link>
    </div>
  );
}
