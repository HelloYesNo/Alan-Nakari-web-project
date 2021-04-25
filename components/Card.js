import Link from "next/link";
import Button from "./Button";

export default function Card(user) {
  const {
    name,
    username,
    website,
    email,
    phone,
    company,
    street,
    suite,
    city,
    zipcode,
    details = false,
    button = false,
  } = user;
  return (
    <div className="p-5 border-current shadow-lg hover:shadow-2xl ease-in duration-700 bg-gray-800 rounded-3xl space-y-3">
      <div className="bg-gray-400 rounded-full h-24 w-24 flex items-center justify-center mx-auto">
        <h1 className="text-white text-4xl font-bold">{name.charAt(0)}</h1>
      </div>
      <div>
        <h3 className="text-xl text-center text-white font-bold">{name}</h3>
      </div>
      <div className="text-gray-400">
        <p className="text-center lowercase">@{username}</p>
      </div>
      <div className="text-center text-blue-200">
        <a href={`https://${website}`} target="_blank">
          {website}
        </a>
      </div>
      <div className="space-y-4">
        {details || (
          <div className="grid grid-cols-3 text-gray-400">
            <div>Email:</div>
            <div className="text-center text-blue-200">
              <a href={`mailto: ${email}`}>{email}</a>
            </div>
          </div>
        )}
        {details || (
          <div className="grid grid-cols-3 text-gray-400">
            <p>Phone number:</p>
            <p className="text-center">{phone}</p>
          </div>
        )}
        {details || (
          <div className="grid grid-cols-3 text-gray-400">
            <p>Company name:</p>
            <p className="text-center">{company}</p>
          </div>
        )}
        {details || (
          <div className="text-gray-400">
            <p>Address:</p>
            <p className="text-center">{street}</p>
            <p className="text-center">{suite}</p>
            <p className="text-center">{city}</p>
            <p className="text-center">{zipcode}</p>
          </div>
        )}
      </div>

      {button || (
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
