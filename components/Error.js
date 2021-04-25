export default function Error({ children }) {
  return (
    <main className="max-w-sm mx-auto my-10 space-y-3">
      <div className="p-5 border-current shadow-lg bg-red-800 rounded-3xl space-y-3">
        <p className="text-center text-white">{children}</p>
      </div>
    </main>
  );
}
