import Link from "next/link";
import Button from "./Button";
import { getUsername } from "../users";

export default function Card(user) {
  const username = getUsername(user);
  const { firstName, lastName, imgSrc } = user;
  return (
    <div className="p-5 border border-gray-200 rounded-3xl space-y-3">
      <img
        className="w-24 h-24 object-cover mx-auto rounded-full"
        src={imgSrc}
      />
      <h3 className="text-2xl text-center font-bold">
        {firstName} {lastName}
      </h3>
      <p className="text-center text-gray-500 lowercase">@{username}</p>
      <div className="text-center">
        <Link href={`/user/${encodeURIComponent(username)}`}>
          <a>
            <Button>Enter {firstName}</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
