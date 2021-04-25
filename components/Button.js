export default function Button({ children }) {
  return (
    <button className="bg-gray-600 w-30 h-8 text-center text-white px-3 leading-8 rounded-3xl shadow-md hover:shadow-xl ease-out">
      {children}
    </button>
  );
}
