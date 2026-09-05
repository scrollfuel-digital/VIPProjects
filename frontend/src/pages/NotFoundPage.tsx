import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0B] px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-white/10">404</h1>
        <h2 className="mt-4 font-display text-2xl">Page not found</h2>
        <p className="mt-2 text-sm text-white/50">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-[#0B0B0B]"
          style={{ background: "var(--gradient-gold)" }}
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
