export default function Card({ firstName, lastName, imgSrc }) {
  return (
    <div className="p-5 border border-gray-200 rounded-3xl space-y-3">
      <img
        className="w-24 h-24 object-cover mx-auto rounded-full"
        src={imgSrc}
      />
      <h3 className="text-2xl text-center font-bold">
        {firstName} {lastName}
      </h3>
      <p className="text-center text-gray-500 lowercase">
        @{firstName}
        {lastName}
      </p>
    </div>
  );
}
