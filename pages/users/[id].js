// /user/[username].js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "@components/Card";
import Link from "next/link";

export default function User() {
  const router = useRouter();
  const query = router.query;
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const [user, setUser] = useState(null);

  useEffect(async () => {
    if (query.id) {
      const response = await fetch(`${baseUrl}/users/${query.id}`); // itt volt a hiba
      const data = await response.json();
      setUser(data);
    }
  }, [query]);

  if (user == null) {
    return "Loading...";
  }

  if (user.error) {
    return "User not found";
  }

  return (
    <main className="max-w-lg mx-auto my-10 space-y-3">
      <Link href="/">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
      </Link>
      <Card
        details // ugyanaz mint details={true}
        name={user.name}
        username={user.username}
        website={user.website}
        id={user.id}
      />
    </main>
  );
}
