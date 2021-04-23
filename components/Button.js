export default function Button({ children }) {
  return (
    <button className="bg-blue-600 text-white px-3 leading-8 rounded-md">
      {children}
    </button>
  );
}
