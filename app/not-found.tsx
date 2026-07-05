import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">

      <h1 className="text-8xl font-bold text-yellow-600">
        404
      </h1>

      <h2 className="mt-6 text-4xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-4 text-gray-600 max-w-lg">
        The page you are looking for does not exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-10 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-semibold transition"
      >
        Back to Home
      </Link>

    </main>
  );
}