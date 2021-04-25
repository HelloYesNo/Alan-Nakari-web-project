export default function Loading({ children }) {
  return (
    <div className="p-5 border-current shadow-lg bg-gray-800 animate-pulse rounded-3xl space-y-3">
      <p className="text-center text-white">{children}</p>
    </div>
  );
}
