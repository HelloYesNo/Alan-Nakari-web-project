import Link from "next/link";
import Button from "./Button";

export default function Card(user) {
  const { name, username, website, id, details = false } = user;
  return (
    <div className="p-5 border border-gray-200 rounded-3xl space-y-3">
      <div className="bg-gray-400 rounded-full h-24 w-24 flex items-center justify-center mx-auto">
        <h1 className="text-white text-4xl font-bold">{id}</h1>
      </div>
      <h3 className="text-2xl text-center font-bold">{name}</h3>
      <p className="text-center text-gray-500 lowercase">@{username}</p>
      <p className="text-center text-blue-400">
        <a href={`https://${website}`} target="_blank">
          {website}
        </a>
      </p>
      {details || (
        <div className="text-center">
          <Link href={`/users/${encodeURIComponent(user.id)}`}>
            <a>
              <Button>Detailed info</Button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
