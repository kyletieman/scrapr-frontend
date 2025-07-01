import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Scrapr
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Effortless Facebook Group & Marketplace scraping, rebuilt for speed and scale.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800"
          >
            Log In
          </Link>
          <Link
            href="/dashboard"
            className="border border-gray-400 text-gray-700 px-6 py-3 rounded-full text-lg font-medium hover:border-black hover:text-black"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

